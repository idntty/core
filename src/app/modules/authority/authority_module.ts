import {
    BaseModule,
} from 'lisk-sdk';

const { AuthorityModuleSchema } = require('./schemas.ts');
import { AuthorityAsset } from "./assets/authority_asset";
import { DelegationAsset } from "./assets/delegation_asset";
import { UndelegationAsset } from "./assets/undelegation_asset";

export class AuthorityModule extends BaseModule {

    public name = 'authority';
    public id = 1002;
    public accountSchema = AuthorityModuleSchema;

    public transactionAssets = [new AuthorityAsset(), new DelegationAsset(), new UndelegationAsset()];

}