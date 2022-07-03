import { BaseModule} from 'lisk-sdk';

const { IdentityModuleSchema } = require('./schemas.ts');

import { setFeature } from "./assets/setFeature_asset";
import { removeFeature } from "./assets/removeFeature_asset";
import { validateFeature } from "./assets/validateFeature_asset";
import { invalidateFeature } from "./assets/invalidateFeature_asset";

export class IdentityModule extends BaseModule {
    public name = 'identity';
    public id = 1001;
    public accountSchema = IdentityModuleSchema;

    public transactionAssets = [new setFeature(), new removeFeature(), new validateFeature(), new invalidateFeature()];
}