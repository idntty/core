import { jwtVerify } from 'jose';
import * as _sodium from 'libsodium-wrappers-sumo';
import { createPrivateKey, createPublicKey, type KeyObject } from 'crypto';

import {
    MULTICODEC_PUB_HEADER,
    MULTIBASE_BASE58BTC_HEADER,
} from '@digitalbazaar/ed25519-multikey/lib/constants';
import * as base58btc from 'base58-universal/lib';
import * as Ed25519Multikey from '@digitalbazaar/ed25519-multikey/lib';

import { v4 } from 'uuid';
import type { v4String } from '../types/uuid';

export const uuidv4 = v4 as v4String;

export async function toPrivateKeyObject(rawPrivateKey: Buffer) {
    await _sodium.ready;
    const sodium = _sodium;

    return createPrivateKey({
        key: `-----BEGIN PRIVATE KEY-----\n${sodium.to_base64(
            Buffer.concat([
                Buffer.from('302e020100300506032b657004220420', 'hex'),
                rawPrivateKey.subarray(0, 32),
            ]),
            sodium.base64_variants.ORIGINAL,
        )}\n-----END PRIVATE KEY-----`,
        format: 'pem',
    });
}

export async function toPublicKeyObject(rawPublicKey: Buffer) {
    await _sodium.ready;
    const sodium = _sodium;

    return createPublicKey({
        key: `-----BEGIN PUBLIC KEY-----\n${sodium.to_base64(
            Buffer.concat([Buffer.from('302a300506032b6570032100', 'hex'), rawPublicKey]),
            sodium.base64_variants.ORIGINAL,
        )}\n-----END PUBLIC KEY-----`,
        format: 'pem',
    });
}

export async function verifyJWT(jwt: string, publicKey: KeyObject, rawPublicKey: string) {
    return jwtVerify(jwt, publicKey, {
        issuer: rawPublicKey,
    });
}

/**
 * Converts a raw Ed25519 public key to a DID:key format
 * @param publicKeyHex Hex string of the public key
 * @returns DID key string in the format did:key:z...
 */
export function publicKeyToDidKey(publicKeyHex: string): string {
    // Convert hex string to Buffer
    const publicKeyBytes = Buffer.from(publicKeyHex, 'hex');

    if (publicKeyBytes.length !== 32) {
        throw new Error('Invalid Ed25519 public key length. Expected 32 bytes.');
    }

    // Prepend multicodec header (0xed01)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const header: Uint8Array = MULTICODEC_PUB_HEADER;
    const multicodecBytes = new Uint8Array(header.length + publicKeyBytes.length);
    multicodecBytes.set(header);
    multicodecBytes.set(new Uint8Array(publicKeyBytes), header.length);

    // Encode with Base58btc and prepend 'z' prefix
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const encoded = base58btc.encode(multicodecBytes);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const prefix: string = MULTIBASE_BASE58BTC_HEADER;
    const multibaseString = `${prefix}${encoded}`;

    // Prepend did:key prefix
    return `did:key:${multibaseString}`;
}

/**
 * Converts a public key to JWK format for OpenBadges v3 verification
 * @param publicKeyHex Hex string of the public key
 * @returns JWK representation of the public key
 */
export async function publicKeyToJwk(publicKeyHex: string): Promise<Record<string, unknown>> {
    // Convert hex string to Buffer
    const publicKeyBytes = Buffer.from(publicKeyHex, 'hex');

    if (publicKeyBytes.length !== 32) {
        throw new Error('Invalid Ed25519 public key length. Expected 32 bytes.');
    }

    // Create a minimal keyPair object for Ed25519Multikey.toJwk
    const keyPair = { publicKey: new Uint8Array(publicKeyBytes) };

    // Convert to JWK
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
    return Ed25519Multikey.toJwk({ keyPair });
}
