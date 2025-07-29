import { PrismaClient, Prisma } from '@prisma/client';
import type { AuthenticatorTransportFuture } from '@simplewebauthn/types';
import { cryptography } from 'klayr-sdk';

import type { DataEntry } from './controllers/data';

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

export const saveUserDataEntry = async ({
    publicKey,
    domains,
    data,
}: {
    publicKey: string;
    domains: string[];
    data: DataEntry[];
}) => {
    console.log('Trying to save user data entry', { publicKey, domains, data });

    const userExists = await prisma.user.findUnique({
        where: { public_key: publicKey },
    });

    if (!userExists) {
        throw new Error('User does not exist with the provided public key');
    }

    await Promise.all(
        domains.map(async domain => {
            await Promise.all(
                data.map(async item => {
                    console.log('Trying to save data item', {
                        uuid: item.uuid,
                        value: item.value,
                        nonce: item.nonce,
                    });
                    const existingEntry = await prisma.userData.findFirst({
                        where: {
                            public_key: publicKey,
                            domain,
                            label: item.uuid,
                        },
                    });

                    console.log('Existing entry', existingEntry);

                    if (existingEntry) {
                        await prisma.userData.update({
                            where: {
                                id: existingEntry.id,
                            },
                            data: {
                                value: item.value,
                                nonce: item.nonce,
                            },
                        });
                    } else {
                        console.log('Creating new entry');
                        await prisma.userData.create({
                            data: {
                                public_key: publicKey,
                                address: cryptography.address.getKlayr32AddressFromPublicKey(
                                    Buffer.from(publicKey, 'hex'),
                                ),
                                domain,
                                label: item.uuid,
                                value: item.value,
                                nonce: item.nonce,
                            },
                        });
                    }
                }),
            );
            if (domain && domain !== publicKey) {
                await prisma.notification.create({
                    data: {
                        public_key: cryptography.address.getKlayr32AddressFromPublicKey(
                            Buffer.from(publicKey, 'hex'),
                        ),
                        for_public_key: cryptography.address.getKlayr32AddressFromPublicKey(
                            Buffer.from(domain, 'hex'),
                        ),
                        type: 'share',
                        data: JSON.stringify({
                            features: data.map(item => item.uuid),
                        }),
                        timestamp: new Date(),
                    },
                });
            }
        }),
    );
};

export const getPrivateUserDataEntry = async (publicKey: string) => {
    const entries = await prisma.userData.findMany({
        where: {
            public_key: publicKey,
            domain: publicKey,
        },
    });

    return entries.map(
        entry =>
            ({
                uuid: entry.label,
                value: entry.value,
                nonce: entry.nonce,
            } as DataEntry),
    );
};

export const getPublicUserDataEntry = async (address: string) => {
    const entries = await prisma.userData.findMany({
        where: {
            address,
            domain: '',
        },
    });

    return entries.map(
        entry =>
            ({
                uuid: entry.label,
                value: entry.value,
                nonce: entry.nonce,
            } as DataEntry),
    );
};

export const getSharedUserDataEntry = async (address: string, forPublicKey: string) => {
    const entries = await prisma.userData.findMany({
        where: {
            address,
            domain: forPublicKey,
            NOT: {
                public_key: forPublicKey,
            },
        },
    });

    return entries.map(
        entry =>
            ({
                uuid: entry.label,
                value: entry.value,
                nonce: entry.nonce,
            } as DataEntry),
    );
};

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

export const saveBadgeImage = async ({
    publicKey,
    fileKey,
}: {
    publicKey: string;
    fileKey: string;
}) =>
    prisma.badge.create({
        data: {
            public_key: publicKey,
            fileKey,
            address: cryptography.address.getKlayr32AddressFromPublicKey(
                Buffer.from(publicKey, 'hex'),
            ),
        },
    });

export const getBadgeImagesByPublicKey = async (publicKey: string) =>
    prisma.badge.findMany({
        where: {
            public_key: publicKey,
        },
    });

export const getBadgeImagesByAddress = async (address: string) =>
    prisma.badge.findMany({
        where: {
            address,
        },
    });

export const getBadgeCollections = async (address: string) => {
    const user = await prisma.user.findUnique({
        where: {
            address,
        },
        select: {
            badge_collections: true,
        },
    });

    if (!user) {
        throw new Error('User not found');
    }

    return user.badge_collections;
};

export const addBadgeCollection = async (publicKey: string, collection: string) =>
    prisma.user.update({
        where: {
            public_key: publicKey,
        },
        data: {
            badge_collections: {
                push: collection,
            },
        },
    });

export const getBadgeTags = async (publicKey: string) => {
    const user = await prisma.user.findUnique({
        where: {
            public_key: publicKey,
        },
        select: {
            badge_tags: true,
        },
    });

    if (!user) {
        throw new Error('User not found');
    }

    return user.badge_tags;
};

export const addBadgeTags = async (publicKey: string, tags: string[]) => {
    const user = await prisma.user.findUnique({
        where: {
            public_key: publicKey,
        },
    });

    if (!user) {
        throw new Error('User not found');
    }

    user.badge_tags.push(...tags);

    return prisma.user.update({
        where: {
            public_key: publicKey,
        },
        data: {
            badge_tags: user.badge_tags,
        },
    });
};

export const deleteBadgeByFileKey = async (fileKey: string, publicKey: string) =>
    prisma.badge.deleteMany({
        where: {
            fileKey,
            public_key: publicKey,
        },
    });

export const getBadgeByFileKey = async (fileKey: string) =>
    prisma.badge.findFirst({
        where: {
            fileKey,
        },
    });

export const saveSignedBadgeJson = async ({
    fileKey,
    publicKey,
    signedBadgeJson,
}: {
    fileKey: string;
    publicKey: string;
    signedBadgeJson: Prisma.InputJsonValue;
}) =>
    prisma.badge.updateMany({
        where: {
            fileKey,
            public_key: publicKey,
        },
        data: {
            signedBadgeJson,
        },
    });

export const getSignedBadgeJson = async (fileKey: string) =>
    prisma.badge.findFirst({
        where: {
            fileKey,
        },
        select: {
            signedBadgeJson: true,
        },
    });

export const getFullBadgeDetails = async (fileKey: string) =>
    prisma.badge.findFirst({
        where: {
            fileKey,
        },
        include: {
            user: {
                select: {
                    username: true,
                    address: true,
                    isAuthority: true,
                },
            },
        },
    });

export const updateBadgeMetadata = async ({
    fileKey,
    publicKey,
    name,
    description,
    criteriaNarrative,
}: {
    fileKey: string;
    publicKey: string;
    name: string;
    description: string;
    criteriaNarrative: string;
}) =>
    prisma.badge.updateMany({
        where: {
            fileKey,
            public_key: publicKey,
        },
        data: {
            name,
            description,
            criteriaNarrative,
            metadataComplete: true,
        },
    });

export const getUserByAddressOrPublicKey = async (identifier: string) =>
    prisma.user.findFirst({
        where: {
            OR: [{ address: identifier }, { public_key: identifier }],
        },
    });
