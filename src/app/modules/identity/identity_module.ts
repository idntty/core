import { BaseModule} from 'lisk-sdk';

const { IdentityModuleSchema } = require('./schemas.ts');
import { IdentityAsset } from "./assets/identity_asset";
import { ValidationAsset } from "./assets/validation_asset";

export class IdentityModule extends BaseModule {

    public name = 'identity';
    public id = 1001;
    public accountSchema = IdentityModuleSchema;

    public transactionAssets = [new IdentityAsset(), new ValidationAsset()];

}