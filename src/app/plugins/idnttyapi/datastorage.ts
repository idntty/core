import { codec } from 'lisk-sdk';
import { KVStore } from '@liskhq/lisk-db';
import { databaseAccountTransactionsSchema, databaseTransactionsFilesSchema } from './schemas';

const fs_extra = require("fs-extra");
const path = require("path");

const DB_KEY_ACCOUNTS_TRANSACIONS = 'accounts:transactions';
const DB_KEY_TRANSACIONS_FILES = 'transactions:files';

export const setupDataBase = async (_path: string, _databaseName: string): Promise<KVStore> => {
    const dbPath = path.join(_path, 'data/plugins/', _databaseName);
    await fs_extra.ensureDir(dbPath);

    return new KVStore(dbPath);
}

export const postFiles = async (_db: KVStore, _package: object): Promise<void> => {    
    const encodedPackage = codec.encode(databaseTransactionsFilesSchema, _package);
    await _db.put(DB_KEY_TRANSACIONS_FILES + ':' + _package.id + ':' + _package.account , encodedPackage);        
}

export const getFiles = async (_db: KVStore, _package: object): databaseTransactionsFilesSchema => {    
    const encodedPackage = await _db.get(DB_KEY_TRANSACIONS_FILES + ':' + _package.id + ':' + _package.account);
    const decodedPackage = codec.decode(databaseTransactionsFilesSchema, encodedPackage);
    return decodedPackage;
}

export const postTransaction = async (_db: KVStore, _transaction: object): Promise<void> => {
    const encodedTransactions = codec.encode(databaseAccountTransactionsSchema, _transaction);  
    console.log(DB_KEY_ACCOUNTS_TRANSACIONS + ':' + _transaction.senderAccount + ':' + _transaction.id);  
    await _db.put(DB_KEY_ACCOUNTS_TRANSACIONS + ':' + _transaction.senderAccount + ':' + _transaction.id, encodedTransactions);
}

export const getTransactions = async (_db: KVStore, _senderAccount: string): Promise<Object[]> => {
    
    const stream = _db.createReadStream({
            gte: DB_KEY_ACCOUNTS_TRANSACIONS + ':' + _senderAccount,
            lt: DB_KEY_ACCOUNTS_TRANSACIONS + ';' + _senderAccount,
            reverse: true
        });
    
    const decodedTransactions = await new Promise<Object[]>((resolve, reject) => {
        const tx: Buffer[] = [];
        stream
            .on('data', ({ value }: { value: Buffer }) => {                
                tx.push(codec.decode(databaseAccountTransactionsSchema, value)); 
                console.log('push tx:',codec.decode(databaseAccountTransactionsSchema, value));               
            })
            .on('error', error => {
                reject(error);
            })
            .on('end', () => {
                resolve(tx);
            });
        });

        return decodedTransactions;        
}

