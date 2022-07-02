const pluginPackage = require('./package.json');
import { configSchema } from './schemas';
import { HTTPPluginConfig } from './types';

const { BasePlugin, BaseChannel, EventsDefinition, ActionsDefinition, SchemaWithDefault } = require("lisk-sdk");

import { Server } from 'http';
import type { Express } from 'express';

import * as express from 'express';
import * as cors from 'cors';
import * as rateLimit from 'express-rate-limit';


import * as middlewares from './middlewares';
import * as controllers from './controllers';

/*
private _server!: Server;
private _app!: Express;
private _channel!: BaseChannel;
*/

export class IdnttyCoreApiPlugin extends BasePlugin {    
    
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
        return {};
    }

    public async load(channel: BaseChannel): Promise<void> {        

        if (this.options.enabled) {
            this._app = express();
	        this._channel = channel;

            this._channel.once('app:ready', async () => {                
                this._registerMiddlewares(this.options);                                
                this._registerControllers();
                
                if (this._userPrivateDataPlugin) { this._registerUserPrivateDataControllers(); }
                if (this._IdnttyTransactionHistoryPlugin) { this._registerTransactionHistoryControllers(); }
                
                this._registerAfterMiddlewares(this.options);
                this._server = this._app.listen(this.options.port, this.options.host);
            });


            this._channel.once('idnttyprivatedata:loading:finished', async () => {                
                this._userPrivateDataPlugin = true;
            });

            this._channel.once('idnttytxhistory:loading:finished', async () => {
                this._IdnttyTransactionHistoryPlugin = true;
            });
                    
        }
    }

    public async unload(): Promise<void> {}

    // Register middlewares
    private _registerMiddlewares(options: HTTPPluginConfig): void {        
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

        this._app.get('/api/transactions/:id', controllers.transactions.getTransaction(this._channel, this.codec),);
        this._app.post('/api/transactions', controllers.transactions.postTransaction(this._channel, this.codec),);

        this._app.get('/api/blocks/:id', controllers.blocks.getBlockById(this._channel, this.codec));
        this._app.get('/api/blocks', controllers.blocks.getBlockByHeight(this._channel, this.codec));

        this._app.get('/api/node/info', controllers.node.getNodeInfo(this._channel));
    }

    private _userPrivateDataPlugin = false;
    private _IdnttyTransactionHistoryPlugin = false;

    private _registerUserPrivateDataControllers(): void {      
        this._app.get('/api/data/account', controllers.data.getPrivateData(this._channel, this.codec));
        this._app.post('/api/data/account', controllers.data.postPrivateData(this._channel, this.codec));
        this._app.delete('/api/data/account', controllers.data.deletePrivateData(this._channel, this.codec));
    }

    private _registerTransactionHistoryControllers(): void {      
        this._app.get('/api/account/transactions/:address', controllers.accounts.getAccountTransactions(this._channel, this.codec),);
    }

}