import type { FastifyRequest, FastifyReply } from 'fastify';

import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { S3Client, PutObjectCommand, HeadObjectCommand } from '@aws-sdk/client-s3';

import { saveBadgeImage, getBadgeImagesByAddress } from '../database';
import { uuidv4 } from '../../../../lib/utils';

const s3Client = new S3Client({ region: 'eu-west-1' });

export const getUploadUrl =
    () =>
    async (
        req: FastifyRequest<{
            Body: { publicKey: string; fileName: string; contentType: string };
        }>,
        res: FastifyReply,
    ) => {
        const { publicKey, fileName, contentType } = req.body;

        let newFileName = '';
        try {
            await s3Client.send(new HeadObjectCommand({ Bucket: 'io.idntty.cdn', Key: fileName }));
            newFileName = fileName;
        } catch (error) {
            newFileName = uuidv4();
        }

        const command = new PutObjectCommand({
            Bucket: 'io.idntty.cdn',
            Key: newFileName,
            ContentType: contentType,
            // Expires: new Date(),
        });

        try {
            const url = await getSignedUrl(s3Client, command, {
                expiresIn: 3600,
            });
            await saveBadgeImage({ publicKey, fileKey: newFileName });
            return res.send({ url, newFileName });
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
