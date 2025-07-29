declare module 'base58-universal' {
    export function encode(data: Uint8Array): string;
    export function decode(str: string): Uint8Array;
}
