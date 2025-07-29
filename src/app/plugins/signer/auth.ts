import type { FastifyRequest, FastifyReply } from 'fastify';
import {
    generateRegistrationOptions,
    verifyRegistrationResponse,
    generateAuthenticationOptions,
    verifyAuthenticationResponse,
    type VerifiedRegistrationResponse,
    type VerifiedAuthenticationResponse,
} from '@simplewebauthn/server';

import type {
    PublicKeyCredentialType,
    AuthenticationResponseJSON,
    RegistrationResponseJSON,
} from '@simplewebauthn/types';

// eslint-disable-next-line import/no-unresolved
import { isoUint8Array, isoBase64URL } from '@simplewebauthn/server/helpers';

import {
    getUserByPublicKey,
    getUserWithDevicesByPublicKey,
    getAuthenticatorDeviceByCredentialID,
    createUser,
    createAuthenticatorDevice,
    updateAuthenticatorDevice,
    saveUserChallenge,
    getUserChallenge,
} from './database';

import { toPublicKeyObject, verifyJWT } from '../../../lib/utils';

const rpName = 'WebAuthn Server';
const rpID = 'sign.idntty.io';
// const rpID = 'localhost';
// const rpID = 'idntty-app.vercel.app';
const origin = `https://${rpID}`;
// const origin = `http://${rpID}:3000`;

export const register =
    () =>
    async (
        req: FastifyRequest<{
            Querystring: {
                publicKey: string;
            };
        }>,
        res: FastifyReply,
    ): Promise<object> => {
        const { publicKey } = req.query;

        const dbUser = await getUserWithDevicesByPublicKey(publicKey);

        const excludeCredentials = dbUser
            ? dbUser.devices.map(device => ({
                  id: device.credential_id,
                  type: 'public-key' as PublicKeyCredentialType,
                  transports: device.transports.map(transport =>
                      transport.transport === 'smart_card' ? 'smart-card' : transport.transport,
                  ),
              }))
            : undefined;

        const options = await generateRegistrationOptions({
            rpName,
            rpID,
            userID: publicKey,
            userName: publicKey,
            timeout: 60000,
            attestationType: 'none',
            excludeCredentials,
            authenticatorSelection: {
                residentKey: 'discouraged',
            },
            supportedAlgorithmIDs: [-7, -257],
        });
        console.log('Generated registration options:', options);

        await saveUserChallenge(publicKey, options.challenge);

        return res.send(options);
    };

export const registerVerify =
    () =>
    async (
        req: FastifyRequest<{
            Body: {
                publicKey: string;
                isAuthority: boolean;
                registrationResponse: RegistrationResponseJSON;
            };
        }>,
        res: FastifyReply,
    ) => {
        const expectedChallenge = await getUserChallenge(req.body.publicKey);

        if (!expectedChallenge) {
            return res.status(400).send({ error: 'Challenge not found or expired.' });
        }

        let verification: VerifiedRegistrationResponse;
        let webAuthnPublicKey: Uint8Array = new Uint8Array();
        try {
            verification = await verifyRegistrationResponse({
                response: req.body.registrationResponse,
                expectedChallenge: `${expectedChallenge}`,
                expectedOrigin: origin,
                expectedRPID: rpID,
                requireUserVerification: true,
            });

            const { verified, registrationInfo } = verification;

            if (verified && registrationInfo) {
                const { credentialPublicKey, credentialID, counter } = registrationInfo;

                if (!req.body.registrationResponse.response.transports) {
                    return res.status(400).send({ error: 'Transports not found' });
                }

                let user = await getUserByPublicKey(req.body.publicKey);

                if (!user) {
                    user = await createUser({
                        publicKey: req.body.publicKey,
                        username: req.body.publicKey,
                        isAuthority: req.body.isAuthority,
                        credentialID,
                        credentialPublicKey,
                        counter,
                        transports: req.body.registrationResponse.response.transports,
                        layout: {},
                    });
                } else {
                    await createAuthenticatorDevice({
                        publicKey: req.body.publicKey,
                        credentialID,
                        credentialPublicKey,
                        counter,
                        transports: req.body.registrationResponse.response.transports,
                    });
                }

                webAuthnPublicKey = credentialPublicKey;
            }
        } catch (error) {
            const _error = error as Error;
            console.error(error);
            return res.status(400).send({ error: _error.message });
        }

        await saveUserChallenge(req.body.publicKey, null);

        const response = {
            verified: verification.verified,
            webAuthnPublicKey: isoUint8Array.toHex(webAuthnPublicKey),
        };
        console.log('Sending verification status and WebAuthn public key:', response);
        return res.send(response);
    };

export const login =
    () =>
    async (
        req: FastifyRequest<{
            Querystring: { publicKey: string };
        }>,
        res: FastifyReply,
    ) => {
        const { publicKey } = req.query;

        const dbUser = await getUserWithDevicesByPublicKey(publicKey);

        if (!dbUser) {
            return res.status(400).send({ error: 'User not found' });
        }

        const options = await generateAuthenticationOptions({
            timeout: 60000,
            allowCredentials: dbUser.devices.map(device => ({
                id: device.credential_id,
                type: 'public-key',
                transports: device.transports.map(transport =>
                    transport.transport === 'smart_card' ? 'smart-card' : transport.transport,
                ),
            })),
            userVerification: 'required',
            rpID,
        });
        console.log('Generated authentication options:', options);

        await saveUserChallenge(publicKey, options.challenge);

        return res.send(options);
    };

export const loginVerify =
    () =>
    async (
        req: FastifyRequest<{
            Body: { publicKey: string; authenticationResponse: AuthenticationResponseJSON };
        }>,
        res: FastifyReply,
    ) => {
        const expectedChallenge = await getUserChallenge(req.body.publicKey);

        if (!expectedChallenge) {
            return res.status(400).send({ error: 'Challenge not found or expired.' });
        }

        const bodyCredentialID = isoBase64URL.toBuffer(req.body.authenticationResponse.rawId);

        const dbAuthenticator = await getAuthenticatorDeviceByCredentialID(bodyCredentialID);

        if (!dbAuthenticator) {
            return res.status(400).send({ error: 'Device not found' });
        }

        let verification: VerifiedAuthenticationResponse;
        try {
            verification = await verifyAuthenticationResponse({
                response: req.body.authenticationResponse,
                expectedChallenge: `${expectedChallenge}`,
                expectedOrigin: origin,
                expectedRPID: rpID,
                authenticator: {
                    credentialPublicKey: dbAuthenticator.credential_public_key,
                    credentialID: dbAuthenticator.credential_id,
                    counter: dbAuthenticator.counter,
                    transports: dbAuthenticator.transports.map(transport =>
                        transport.transport === 'smart_card' ? 'smart-card' : transport.transport,
                    ),
                },
                requireUserVerification: true,
            });
        } catch (error) {
            const _error = error as Error;
            console.error(error);
            return res.status(400).send({ error: _error.message });
        }

        const { verified, authenticationInfo } = verification;
        if (verified) {
            await updateAuthenticatorDevice({
                credentialID: dbAuthenticator.credential_id,
                counter: authenticationInfo.newCounter,
            });
        }

        await saveUserChallenge(req.body.publicKey, null);

        const response = {
            verified,
            webAuthnPublicKey: isoUint8Array.toHex(dbAuthenticator.credential_public_key),
        };
        return res.send(response);
    };

// FIXME: The types don't work here, have to check manually
type RequestWithPublicKey = (
    | { Body: { publicKey: string } }
    | { Querystring: { publicKey: string } }
) &
    Record<string, unknown>;
export const jwtVerificationPreHandler =
    () => async (req: FastifyRequest<RequestWithPublicKey>, res: FastifyReply) => {
        const authHeader = req.headers.authorization;
        if (!authHeader?.startsWith('Bearer ')) {
            res.status(401).send({ error: 'Unauthorized' });
            return;
        }

        let rawPublicKey: string | undefined;
        if (req.query && typeof req.query === 'object' && 'forPublicKey' in req.query) {
            rawPublicKey = (req.query as { forPublicKey: string }).forPublicKey;
        } else if (req.body && typeof req.body === 'object' && 'publicKey' in req.body) {
            rawPublicKey = (req.body as { publicKey: string }).publicKey;
        } else if (req.query && typeof req.query === 'object' && 'publicKey' in req.query) {
            rawPublicKey = (req.query as { publicKey: string }).publicKey;
        }

        if (!rawPublicKey) {
            res.status(400).send({ error: 'publicKey not provided' });
            return;
        }

        const jwt = authHeader.split(' ')[1];
        const publicKey = await toPublicKeyObject(Buffer.from(rawPublicKey, 'hex'));

        try {
            const verified = await verifyJWT(jwt, publicKey, rawPublicKey);
            console.log('JWT verification:', verified);
            return;
        } catch (err) {
            res.status(401).send({ error: 'Invalid token' });
        }
    };
