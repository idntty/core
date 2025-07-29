import type { AuthenticatorTransportFuture } from '@simplewebauthn/types';
import { cryptography } from 'klayr-sdk';

import { PrismaClient } from './generated/client';

const prisma = new PrismaClient();

export const getUserWithDevicesByPublicKey = async (publicKey: string) =>
    prisma.user.findUnique({
        where: {
            public_key: publicKey,
        },
        include: {
            devices: {
                include: {
                    transports: true,
                },
            },
        },
    });

export const getUserByPublicKey = async (publicKey: string) =>
    prisma.user.findUnique({
        where: {
            public_key: publicKey,
        },
    });

export const getAuthenticatorDeviceByCredentialID = async (credentialID: Uint8Array) =>
    prisma.authenticatorDevice.findFirst({
        where: {
            credential_id: Uint8Array.from(credentialID),
        },
        include: {
            transports: true,
        },
    });

export const createUser = async ({
    publicKey,
    username,
    isAuthority,
    credentialID,
    credentialPublicKey,
    counter,
    transports,
    layout,
}: {
    publicKey: string;
    username: string;
    isAuthority: boolean;
    credentialID: Uint8Array;
    credentialPublicKey: Uint8Array;
    counter: number;
    transports: AuthenticatorTransportFuture[];
    layout: object;
}) =>
    prisma.user.create({
        data: {
            public_key: publicKey,
            address: cryptography.address.getKlayr32AddressFromPublicKey(
                Buffer.from(publicKey, 'hex'),
            ),
            username,
            isAuthority,
            layout: JSON.stringify(layout),
            devices: {
                create: [
                    {
                        credential_id: Uint8Array.from(credentialID),
                        credential_public_key: Uint8Array.from(credentialPublicKey),
                        counter,
                        transports: {
                            create: transports.map(transport => ({
                                transport: transport === 'smart-card' ? 'smart_card' : transport,
                            })),
                        },
                    },
                ],
            },
        },
    });

export const createAuthenticatorDevice = async ({
    publicKey,
    credentialID,
    credentialPublicKey,
    counter,
    transports,
}: {
    publicKey: string;
    credentialID: Uint8Array;
    credentialPublicKey: Uint8Array;
    counter: number;
    transports: AuthenticatorTransportFuture[];
}) =>
    prisma.authenticatorDevice.create({
        data: {
            public_key: publicKey,
            credential_id: Uint8Array.from(credentialID),
            credential_public_key: Uint8Array.from(credentialPublicKey),
            counter,
            transports: {
                create: transports.map(transport => ({
                    transport: transport === 'smart-card' ? 'smart_card' : transport,
                })),
            },
        },
    });

export const updateAuthenticatorDevice = async ({
    credentialID,
    counter,
}: {
    credentialID: Uint8Array;
    counter: number;
}) =>
    prisma.authenticatorDevice.update({
        where: {
            credential_id: credentialID,
        },
        data: {
            counter,
        },
    });

export const getUserLayout = async (address: string) => {
    const user = await prisma.user.findUnique({
        where: {
            address,
        },
        select: {
            layout: true,
        },
    });

    if (!user) {
        throw new Error('User not found');
    }

    return JSON.parse(user.layout as string) as object;
};

export const updateUserLayout = async ({ address, layout }: { address: string; layout: object }) =>
    prisma.user.update({
        where: {
            address,
        },
        data: {
            layout: JSON.stringify(layout),
        },
    });

export const getIsAuthority = async (address: string) => {
    const user = await prisma.user.findUnique({
        where: {
            address,
        },
    });

    if (!user) {
        throw new Error('User not found');
    }

    return user.isAuthority;
};

export const getUserByAddressOrPublicKey = async (identifier: string) =>
    prisma.user.findFirst({
        where: {
            OR: [{ address: identifier }, { public_key: identifier }],
        },
    });

export const saveUserChallenge = async (publicKey: string, challenge: string | null) =>
    prisma.userChallenge.upsert({
        where: {
            public_key: publicKey,
        },
        create: {
            public_key: publicKey,
            challenge,
        },
        update: {
            challenge,
        },
    });

export const getUserChallenge = async (publicKey: string) => {
    const user = await prisma.userChallenge.findUnique({
        where: {
            public_key: publicKey,
        },
    });

    if (!user) {
        throw new Error('Challenge not found');
    }

    return user.challenge;
};
