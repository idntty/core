import { BasePlugin, PluginInfo, cryptography} from 'lisk-sdk';
import type { BaseChannel, EventsDefinition, ActionsDefinition, SchemaWithDefault } from 'lisk-sdk';

import { KVStore } from '@liskhq/lisk-db';
import { setupDataBase, postTransaction, getTransactions, postFiles, getFiles } from './datastorage';
import * as fs from 'fs';

import { Server } from 'http';
import type { BaseChannel } from 'lisk-framework';
import * as express from 'express';
import type { Express } from 'express';
import * as cors from 'cors';
import * as rateLimit from 'express-rate-limit';

import * as controllers from './controllers';
import * as middlewares from './middlewares';
import { configSchema, databaseTransactionsFilesSchema } from './schemas';
import { HTTPPluginConfig } from './types';


export class IdnttyApiPlugin extends BasePlugin {
    
    public name = 'idnttyapi';
    public configSchema = configSchema;

    private _server!: Server;
    private _app!: Express;
    private _channel!: BaseChannel;
    
    private _db: KVStore;
    private _fileStorage: Object;
    

    public static get alias(): string {
	    return 'idnttyapi';
    }
    
    public static get info(): PluginInfo {
        return {
            author: 'idntty team',
            version: '0.1.0',
            name: 'idnttyapi',
        };
    }

    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    public get defaults(): SchemaWithDefault {
	    return configSchema;
    }

    public get events(): EventsDefinition {
        return [
            // 'block:created',
            // 'block:missed'
        ];
    }

    public get actions(): ActionsDefinition {
        return {
            getAccountTransactions: async (_address: string ) => {                
                const accountTransactions = await getTransactions(this._db, _address);                
                return accountTransactions;
            },
            postFilesbyTransaction: async (_package: databaseTransactionsFilesSchema  ) => {
                _package.account = cryptography.getAddressFromPublicKey(Buffer.from(_package.senderPublicKey, 'hex')).toString('hex');
                delete _package.senderPublicKey;                
                await postFiles(this._db, _package);
            },
            getFilesbyTransaction: async (_package: databaseTransactionsFilesSchema  ) => {                 
                _package.account = cryptography.getAddressFromPublicKey(Buffer.from(_package.senderPublicKey, 'hex')).toString('hex');
                delete _package.senderPublicKey;
                const transactionFiles = await getFiles(this._db, _package);                
                return transactionFiles;
            },
        };
    }

    public async load(channel: BaseChannel): Promise<void> {
	    this._app = express();
	    this._channel = channel;

	    this._channel.once('app:ready', async () => {
            this._db = await setupDataBase(this.options.dataPath, this.options.databaseName);
            this._registerMiddlewares(this.options);
            this._registerControllers();
            this._registerAfterMiddlewares(this.options);
            this._registerFileStorageApi(this.options);
            this._server = this._app.listen(this.options.port, this.options.host);            
        });


        this._channel.subscribe('app:block:new', (data) => {
            const decodedBlock = this.codec.decodeBlock(data.block);            

            for (let payloadId in decodedBlock.payload) {

                let blockTransaction = decodedBlock.payload[payloadId];                
                                                
                blockTransaction.height = decodedBlock.header.height;                
                blockTransaction.senderAccount = cryptography.getAddressFromPublicKey(Buffer.from(blockTransaction.senderPublicKey,'hex')).toString('hex');
                
                delete blockTransaction.asset;
                delete blockTransaction.signatures;
                delete blockTransaction.senderPublicKey;
                
                postTransaction(this._db, blockTransaction);                
                
            }
            

        });
    }

    public async unload(): Promise<void> {}

    private _registerMiddlewares(options: HTTPPluginConfig): void {
        // Register middlewares
        this._app.use(cors(options.cors));
        this._app.use(express.json());
        this._app.use(rateLimit(options.limits));
        this._app.use(middlewares.whiteListMiddleware(options));
    }

    private _registerAfterMiddlewares(_options: HTTPPluginConfig): void {
        this._app.use(middlewares.errorMiddleware());
    }

    private _registerControllers(): void {
        this._app.get('/api/accounts/:address', controllers.accounts.getAccount(this._channel, this.codec),);
        this._app.get('/api/account/transactions/:address', controllers.accounts.getAccountTransactions(this._channel, this.codec),);

        this._app.get('/api/transactions/:id', controllers.transactions.getTransaction(this._channel, this.codec),);
        this._app.post('/api/transactions', controllers.transactions.postTransaction(this._channel, this.codec),);
        
        this._app.get('/api/blocks/:id', controllers.blocks.getBlockById(this._channel, this.codec));
        this._app.get('/api/blocks', controllers.blocks.getBlockByHeight(this._channel, this.codec));
        
        this._app.get('/api/node/info', controllers.node.getNodeInfo(this._channel));
        this._app.get('/api/node/transactions', controllers.node.getTransactions(this._channel, this.codec),);

        this._app.get('/api/node/info/transactions', controllers.node.getTransactionsCount(this._channel),);
        this._app.get('/api/node/info/transactions/last/', controllers.node.getTransactionsTop(this._channel, this.codec),);
        
        this._app.get('/api/peers', controllers.peers.getPeers(this._channel));
        this._app.get('/api/delegates', controllers.delegates.getDelegates(this._channel, this.codec));
        this._app.get('/api/forgers', controllers.forgers.getForgers(this._channel, this.codec));
        this._app.get('/api/forging/info', controllers.forging.getForgingStatus(this._channel));
        this._app.patch('/api/forging', controllers.forging.updateForging(this._channel));
    }

    private _registerFileStorageApi(_options: HTTPPluginConfig): void {

        if (_options.filestorage.enabled) {
            
            // Setup file storage
            const localStorage = this.options.dataPath + '/' + _options.filestorage.storage.settings.bucketName;
            _options.filestorage.localStorage = localStorage;
            if (!fs.existsSync(localStorage)) {                
                fs.mkdirSync(localStorage, { recursive: true });                
            }
   
            this._app.post('/api/files', controllers.files.uploadFiles(this._channel, this.codec, _options.filestorage));
            this._app.get('/api/files/:packageid/:filekey', controllers.files.downloadFiles(this._channel, this.codec, this._fileStorage));
        }

    }

}