const pluginPackage = require('./package.json');
import { configSchema, databaseSchema } from './schemas';


import { KVStore } from '@liskhq/lisk-db';
const { cryptography, codec, BasePlugin, BaseChannel, EventsDefinition, ActionsDefinition, SchemaWithDefault } = require("lisk-sdk");

const path = require("path");
const fs_extra = require("fs-extra");

const DB_KEY_ACCOUNTS_TRANSACIONS = Buffer.from([10]); //'accounts:transactions';
//const DB_KEY_TRANSACIONS_COUNT = Buffer.from([10]); 'transactions:count';


export class IdnttyTransactionHistoryPlugin extends BasePlugin {        
    
    public name = pluginPackage.name;    

    public static get alias(): string {
	    return pluginPackage.name;
    }
    
    public static get info(): PluginInfo {
        return {
            author: pluginPackage.author,
            version: pluginPackage.version,
            name: pluginPackage.name,
        };
    }

    public get defaults(): SchemaWithDefault {
	    return configSchema;
    }

    public get events(): EventsDefinition {
        return [];
    }

    public get actions(): ActionsDefinition {
        return {            
            getAccountTransactions: async (account: object ) => {                
                const accountTransactions = await this.getTransactions(account.address);                
                return accountTransactions;
            },
            getNetworkTransactionCount: async () => {                
                const transactionsCount = await getTransactionCount(this._db);
                return transactionsCount;
            },            
        };
    }

    public async load(channel: BaseChannel): Promise<void> {
        this._channel = channel;

	    this._channel.once('app:ready', async () => {
            this._db = await this.setupDataBase(this.options.dataPath, this.options.databaseName);                  
        });

        
        this._channel.subscribe('app:block:new', (data) => {
            const decodedBlock = this.codec.decodeBlock(data.block);   

            decodedBlock.payload.forEach(blockTransaction => {
                blockTransaction.height = decodedBlock.header.height;
                this.postTransactions(blockTransaction);
            });
        });


        this._channel.subscribe('app:block:delete', (data) => {
            const decodedBlock = this.codec.decodeBlock(data.block);
            console.log("app:block:delete", data);
        });


    }

    public async unload(): Promise<void> {}

    private async setupDataBase(_path: string, _databaseName: string): Promise<KVStore> {
        const dbPath = path.join(_path, `plugins/${this.name}/`, _databaseName);
        await fs_extra.ensureDir(dbPath);
        return new KVStore(dbPath);
    }

    private async getTransactions(account: string): object {

        const stream = this._db.createReadStream({
            gt: Buffer.concat([DB_KEY_ACCOUNTS_TRANSACIONS, Buffer.from(account,'hex'), Buffer.alloc(32)]),
            lt: Buffer.concat([DB_KEY_ACCOUNTS_TRANSACIONS, Buffer.from(account,'hex'), Buffer.alloc(32,'ff','hex')]),
            reverse: true
        });

        const decodedTransactions = await new Promise<Object[]>((resolve, reject) => {
            const tx: Buffer[] = [];
            stream
                .on('data', ({ value }: { value: Buffer }) => {                
                    tx.push(codec.decode(databaseSchema, value));
                })
                .on('error', error => {
                    reject(error);
                })
                .on('end', () => {
                    resolve(tx);
                });
            });
            
        decodedTransactions.sort((tx, tx_) => (tx.height < tx_.height) ? 1 : (tx.height === tx_.height) ? ((tx.nonce < tx_.nonce) ? 1 : -1) : -1 );

        return decodedTransactions;
    }

    private async postTransactions(transaction: object): Promise<void> {
    
        let senderAccount = cryptography.getAddressFromPublicKey(Buffer.from(transaction.senderPublicKey,'hex'));
        let txId = Buffer.from(transaction.id, 'hex');

        //fix tx before store it
        transaction.account = senderAccount.toString('hex');

        delete transaction.asset;
        delete transaction.signatures;
        delete transaction.senderPublicKey;

        const encodedTransactions = codec.encode(databaseSchema, transaction);  
        return this._db.put(Buffer.concat([DB_KEY_ACCOUNTS_TRANSACIONS, senderAccount, txId]), encodedTransactions);
    }

    private getTransactionCount(): number {
        return 0;
    }

    private setTransactionCount(transactions: number): {
         
        /*
        let _transactionCount = Buffer.alloc(4);
        try {
            _transactionCount = await _db.get(DB_KEY_TRANSACIONS_COUNT);
        } catch (err) {}
            
        let transactionCount = _transactionCount.readUInt32LE(0) + transactions;    
        _transactionCount.writeUInt32LE(transactionCount, 0);
        await _db.put(DB_KEY_TRANSACIONS_COUNT, _transactionCount);
        */
    }

}