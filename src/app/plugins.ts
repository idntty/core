/* eslint-disable @typescript-eslint/no-empty-function */
import { Application } from 'lisk-sdk';

import { IdnttyCoreApiPlugin } from "./plugins/idnttycoreapi";
import { IdnttyTransactionHistoryPlugin } from "./plugins/idnttytxhistory";
//import { IdnttyPrivateDataPlugin } from "./plugins/idnttyprivatedata";
//import { IdnttyFaucetPlugin } from "./plugins/idnttyfaucet";


// @ts-expect-error Unused variable error happens here until at least one module is registered
export const registerPlugins = (app: Application): void => {
    app.registerPlugin(IdnttyCoreApiPlugin);
    app.registerPlugin(IdnttyTransactionHistoryPlugin);
    
    //app.registerPlugin(IdnttyPrivateDataPlugin);
    //app.registerPlugin(IdnttyFaucetPlugin);
};
