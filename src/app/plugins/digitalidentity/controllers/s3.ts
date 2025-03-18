import type { FastifyRequest, FastifyReply } from 'fastify';

import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import {
    S3Client,
    PutObjectCommand,
    HeadObjectCommand,
    DeleteObjectCommand,
} from '@aws-sdk/client-s3';

import { saveBadgeImage, getBadgeImagesByAddress, deleteBadgeByFileKey } from '../database';
import { uuidv4 } from '../../../../lib/utils';

const s3Client = new S3Client({ region: 'eu-west-1' });

export const getUploadUrl =
    () =>
    async (
        req: FastifyRequest<{
            Body: {
                publicKey: string;
                fileName: string;
                contentType: string;
                folder?: string;
            };
        }>,
        res: FastifyReply,
    ) => {
        const { publicKey, fileName, contentType, folder = '/' } = req.body;

        // List of allowed folders (plus root "/")
        const allowedFolders = ['/', 'images', 'badges'];

        if (!allowedFolders.includes(folder)) {
            return res.status(400).send({ error: 'Invalid folder. Upload not allowed.' });
        }

        // Determine the full path to check for existing file
        const checkPath = folder === '/' ? fileName : `${folder}/${fileName}`;

        let newFileName = '';
        try {
            await s3Client.send(
                new HeadObjectCommand({
                    Bucket: 'io.idntty.cdn',
                    Key: checkPath,
                }),
            );
            newFileName = fileName;
        } catch (error) {
            newFileName = uuidv4();
        }

        // Create the full key with folder path (handle root folder case)
        const fullKey = folder === '/' ? newFileName : `${folder}/${newFileName}`;

        const command = new PutObjectCommand({
            Bucket: 'io.idntty.cdn',
            Key: fullKey,
            ContentType: contentType,
            // Expires: new Date(),
        });

        try {
            const url = await getSignedUrl(s3Client, command, {
                expiresIn: 3600,
            });

            // Only save badge image references if this is a badge upload
            if (folder === 'badges') {
                await saveBadgeImage({ publicKey, fileKey: newFileName });
            }

            // Return the full path including folder in the response
            // This is the key change - return the full path so frontend doesn't need to add folder
            return res.send({
                url,
                newFileName: fullKey, // Return the full path including folder
                fileName: newFileName, // Also return just the filename for backward compatibility
            });
        } catch (error) {
            console.error(error);
            return res.status(500).send({ error: `Error generating a presigned URL: ${error}` });
        }
    };

export const getUploadedImages =
    () =>
    async (
        req: FastifyRequest<{
            Querystring: { address: string };
        }>,
        res: FastifyReply,
    ) => {
        const { address } = req.query;

        if (!address) {
            return res.status(400).send({ error: 'Address not found' });
        }

        try {
            const badges = await getBadgeImagesByAddress(address);

            return res.send(badges.map(badge => badge.fileKey));
        } catch (error) {
            console.error(error);
            return res.status(500).send({ error: `Error getting images: ${error}` });
        }
    };

export const removeUploadedImage =
    () =>
    async (
        req: FastifyRequest<{
            Body: {
                publicKey: string;
                fileName: string;
            };
        }>,
        res: FastifyReply,
    ) => {
        const { fileName, publicKey } = req.body;

        if (!fileName) {
            return res.status(400).send({ error: 'File name not provided' });
        }

        try {
            // Delete from database using publicKey
            const result = await deleteBadgeByFileKey(fileName, publicKey);

            // Delete from S3
            const fullKey = `badges/${fileName}`;
            await s3Client.send(
                new DeleteObjectCommand({
                    Bucket: 'io.idntty.cdn',
                    Key: fullKey,
                }),
            );

            return res.send({
                success: true,
                message: 'Badge removed successfully',
                deletedCount: result.count,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).send({ error: `Error removing image: ${error}` });
        }
    };
