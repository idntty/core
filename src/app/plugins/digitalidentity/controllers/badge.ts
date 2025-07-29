import type { FastifyRequest, FastifyReply } from 'fastify';
import { Prisma } from '@prisma/client';
import {
    updateBadgeMetadata,
    getUserByAddressOrPublicKey,
    saveSignedBadgeJson,
    getSignedBadgeJson,
    getBadgeByFileKey,
    getFullBadgeDetails,
} from '../database';
import { publicKeyToDidKey, publicKeyToJwk } from '../../../../lib/utils';

export const getIssuerProfile =
    () =>
    async (
        req: FastifyRequest<{
            Params: {
                authorityIdentifier: string;
            };
        }>,
        res: FastifyReply,
    ) => {
        try {
            const { authorityIdentifier } = req.params;

            // Find the authority user
            const user = await getUserByAddressOrPublicKey(authorityIdentifier);

            if (!user) {
                return res.status(404).send({
                    success: false,
                    error: 'Authority not found',
                });
            }

            // Check if user is an authority
            if (!user.isAuthority) {
                return res.status(403).send({
                    success: false,
                    error: 'The requested identifier is not an authority',
                });
            }

            // Convert the public key to DID format using the TypeScript utility
            const issuerDid = publicKeyToDidKey(user.public_key);

            // Construct profile response
            const profileJson = {
                '@context': 'https://purl.imsglobal.org/spec/vc/ob/vocab.html#Profile',
                id: issuerDid,
                type: ['Profile'],
                name: user.username,
            };

            // Set content type and return the profile JSON
            res.header('Content-Type', 'application/json');
            return res.send(profileJson);
        } catch (error) {
            console.error('Error fetching issuer profile:', error);
            return res.status(500).send({
                success: false,
                error: 'Internal server error',
            });
        }
    };

export const getPublicKeyJwk =
    () =>
    async (
        req: FastifyRequest<{
            Params: {
                address: string;
            };
        }>,
        res: FastifyReply,
    ) => {
        try {
            const { address } = req.params;

            // Validate and find the user by address
            const user = await getUserByAddressOrPublicKey(address);

            if (!user) {
                return res.status(404).send({
                    success: false,
                    error: 'User not found',
                });
            }

            // Convert the public key to JWK format
            const jwk = await publicKeyToJwk(user.public_key);

            // Set content type and return the JWK
            res.header('Content-Type', 'application/json');
            return res.send(jwk);
        } catch (error) {
            console.error('Error converting public key to JWK:', error);
            return res.status(500).send({
                success: false,
                error: 'Internal server error',
            });
        }
    };

export const saveSignedBadgeJsonHandler =
    () =>
    async (
        req: FastifyRequest<{
            Body: {
                fileKey: string;
                signedBadgeJson: Prisma.InputJsonValue;
                publicKey: string;
            };
        }>,
        res: FastifyReply,
    ) => {
        try {
            const { fileKey, signedBadgeJson, publicKey } = req.body;

            // Check if badge exists
            const badge = await getBadgeByFileKey(fileKey);
            if (!badge) {
                return res.status(404).send({
                    success: false,
                    error: 'Badge not found',
                });
            }

            // Verify ownership
            if (badge.public_key !== publicKey) {
                return res.status(403).send({
                    success: false,
                    error: 'You do not have permission to update this badge',
                });
            }

            // Save the signed badge JSON
            await saveSignedBadgeJson({
                fileKey,
                publicKey,
                signedBadgeJson,
            });

            return res.send({
                success: true,
                message: 'Signed badge JSON saved successfully',
            });
        } catch (error) {
            console.error('Error saving signed badge JSON:', error);
            return res.status(500).send({
                success: false,
                error: 'Internal server error',
            });
        }
    };

export const getSignedBadgeJsonHandler =
    () =>
    async (
        req: FastifyRequest<{
            Params: {
                fileKey: string;
            };
        }>,
        res: FastifyReply,
    ) => {
        try {
            const { fileKey } = req.params;

            // Get the signed badge JSON
            const badge = await getSignedBadgeJson(fileKey);

            if (!badge) {
                return res.status(404).send({
                    success: false,
                    error: 'Badge not found',
                });
            }

            if (!badge.signedBadgeJson) {
                return res.status(404).send({
                    success: false,
                    error: 'Badge has no signed JSON data',
                });
            }

            // Set content type and return ONLY the raw signed badge JSON
            res.header('Content-Type', 'application/json');
            return res.send(badge.signedBadgeJson);
        } catch (error) {
            console.error('Error retrieving signed badge JSON:', error);
            return res.status(500).send({
                success: false,
                error: 'Internal server error',
            });
        }
    };

export const getFullBadgeDetailsHandler =
    () =>
    async (
        req: FastifyRequest<{
            Params: {
                fileKey: string;
            };
        }>,
        res: FastifyReply,
    ) => {
        try {
            const { fileKey } = req.params;

            // Get the full badge details
            const badge = await getFullBadgeDetails(fileKey);

            if (!badge) {
                return res.status(404).send({
                    success: false,
                    error: 'Badge not found',
                });
            }

            // Set content type and return all badge info
            res.header('Content-Type', 'application/json');
            return res.send(badge);
        } catch (error) {
            console.error('Error retrieving full badge details:', error);
            return res.status(500).send({
                success: false,
                error: 'Internal server error',
            });
        }
    };

export const updateBadgeDefinition =
    () =>
    async (
        req: FastifyRequest<{
            Body: {
                fileKey: string;
                name: string;
                description: string;
                criteriaNarrative: string;
                publicKey: string;
            };
        }>,
        res: FastifyReply,
    ) => {
        try {
            const { fileKey, name, description, criteriaNarrative, publicKey } = req.body;

            // Check if badge exists
            const badge = await getBadgeByFileKey(fileKey);
            if (!badge) {
                return res.status(404).send({
                    success: false,
                    error: 'Badge not found',
                });
            }

            // Verify ownership
            if (badge.public_key !== publicKey) {
                return res.status(403).send({
                    success: false,
                    error: 'You do not have permission to update this badge',
                });
            }

            // Update badge metadata
            await updateBadgeMetadata({
                fileKey,
                publicKey,
                name,
                description,
                criteriaNarrative,
            });

            return res.send({ success: true });
        } catch (error) {
            console.error('Error updating badge definition:', error);
            return res.status(500).send({
                success: false,
                error: 'Internal server error',
            });
        }
    };
