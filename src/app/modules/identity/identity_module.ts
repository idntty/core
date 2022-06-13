import { BaseModule} from 'lisk-sdk';

const { IdentityModuleSchema } = require('./schemas.ts');

import { setFeatureAsset } from "./assets/setFeature_asset";
import { removeFeatureAsset } from "./assets/removeFeature_asset";
import { validateFeatureAsset } from "./assets/validateFeature_asset";
import { invalidateFeatureAsset } from "./assets/invalidateFeature_asset";

export class IdentityModule extends BaseModule {
    public name = 'identity';
    public id = 1001;
    public accountSchema = IdentityModuleSchema;

    public transactionAssets = [new setFeatureAsset(), new removeFeatureAsset(), new validateFeatureAsset(), new invalidateFeatureAsset()];
}