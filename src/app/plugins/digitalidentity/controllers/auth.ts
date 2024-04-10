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
} from '@simplewebauthn/typescript-types';

// eslint-disable-next-line import/no-unresolved
import { isoUint8Array, isoBase64URL } from '@simplewebauthn/server/helpers';

import {
	getUserByPublicKey,
	getUserWithDevicesByPublicKey,
	getAuthenticatorDeviceByCredentialID,
	createUser,
	createAuthenticatorDevice,
	updateAuthenticatorDevice,
} from '../database';

const rpName = 'WebAuthn Server';
const rpID = 'localhost';
const origin = `http://${rpID}:3000`;

export const signup =
	() =>
	async (		
		request: FastifyRequest<{
			Querystring: {
				publicKey: string;
				username: string;
			};
		}>,
		response: FastifyReply,
	): Promise<object> => {
		const { publicKey, username } = request.query;

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
			userName: username,
			timeout: 60000,
			attestationType: 'none',
			excludeCredentials,
			authenticatorSelection: {
				residentKey: 'discouraged',
			},
			supportedAlgorithmIDs: [-7, -257],
		});
		console.log('Generated registration options:', options);

		response.session.set('currentChallenge', options.challenge);
		response.session.set('publicKey', publicKey);
		response.session.set('username', username);

		console.log(response.session.get('currentChallenge'));
		console.log(response.session.get('publicKey'));
		console.log(response.session.get('username'));

		return response.send(options);
	};

export const signupVerify =
	() =>
	async (
		request: FastifyRequest<{
			Body: RegistrationResponseJSON;
		}>,
		response: FastifyReply,
	) => {
		const expectedChallenge = request.session.get('currentChallenge');
                console.log(request.session.get('currentChallenge'));
                console.log(request.session.get('publicKey'));
                console.log(request.session.get('username'));

		if (!expectedChallenge) {
			return response.status(400).send({ error: 'Challenge not found or expired.' });
		}

		let verification: VerifiedRegistrationResponse;
		let webAuthnPublicKey: Uint8Array = new Uint8Array();
		try {
			verification = await verifyRegistrationResponse({
				response: request.body,
				expectedChallenge: `${expectedChallenge}`,
				expectedOrigin: origin,
				expectedRPID: rpID,
				requireUserVerification: true,
			});

			const { verified, registrationInfo } = verification;

			if (verified && registrationInfo) {
				const { credentialPublicKey, credentialID, counter } = registrationInfo;

				if (!request.session.get('publicKey') || !request.session.get('username')) {
					return response.status(400).send({ error: 'Public key or username not found' });
				}

				if (!request.body.response.transports) {
					return response.status(400).send({ error: 'Transports not found' });
				}

				let user = await getUserByPublicKey(request.session.get('publicKey'));

				if (!user) {
					user = await createUser({
						publicKey: response.session.get('publicKey'),
						username: response.session.get('username'),
						credentialID,
						credentialPublicKey,
						counter,
						transports: response.body.response.transports,
					});
				} else {
					await createAuthenticatorDevice({
						userID: request.session.get('publicKey'),
						credentialID,
						credentialPublicKey,
						counter,
						transports: request.body.response.transports,
					});
				}

				webAuthnPublicKey = credentialPublicKey;
			}
		} catch (error) {
			const _error = error as Error;
			console.error(error);
			return response.status(400).send({ error: _error.message });
		}

		request.session.set('currentChallenge', undefined);
		request.session.set('publicKey', undefined);
		request.session.set('username', undefined);

		const responseObject = {
			verified: verification.verified,
			webAuthnPublicKey: isoUint8Array.toHex(webAuthnPublicKey),
		};
		console.log('Sending verification status and WebAuthn public key:', response);
		return response.send(responseObject);
	};

export const signin =
	() =>
	async (
		request: FastifyRequest<{
			Querystring: { publicKey: string };
		}>,
		response: FastifyReply,
	) => {
		const { publicKey } = request.query;

		const dbUser = await getUserWithDevicesByPublicKey(publicKey);

		if (!dbUser) {
			return response.status(400).send({ error: 'User not found' });
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

		request.session.set('currentChallenge', options.challenge);
		request.session.set('publicKey', publicKey);

		return response.send(options);
	};

export const signinVerify =
	() => async (request: FastifyRequest<{ Body: AuthenticationResponseJSON }>, response: FastifyReply) => {
		const expectedChallenge = request.session.get('currentChallenge');

		if (!expectedChallenge) {
			return response.status(400).send({ error: 'Challenge not found or expired.' });
		}

		const bodyCredentialID = isoBase64URL.toBuffer(request.body.rawId);

		const dbAuthenticator = await getAuthenticatorDeviceByCredentialID(bodyCredentialID);

		if (!dbAuthenticator) {
			return response.status(400).send({ error: 'Device not found' });
		}

		let verification: VerifiedAuthenticationResponse;
		try {
			verification = await verifyAuthenticationResponse({
				response: request.body,
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
			return response.status(400).send({ error: _error.message });
		}

		const { verified, authenticationInfo } = verification;
		if (verified) {
			await updateAuthenticatorDevice({
				credentialID: dbAuthenticator.credential_id,
				counter: authenticationInfo.newCounter,
			});
		}

		request.session.set('currentChallenge', undefined);

		const responseObject = {
			verified,
			webAuthnPublicKey: isoUint8Array.toHex(dbAuthenticator.credential_public_key),
		};
		return response.send(responseObject);
	};