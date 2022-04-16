import { BaseAsset, ApplyAssetContext, ValidateAssetContext } from 'lisk-sdk';

const { isBytes } = require('@liskhq/lisk-validator');
const { ValidationAssetSchema, IdentityAssetSchema } = require('../schemas.ts');


export class InValidationAsset extends BaseAsset {
    
    public schema = ValidationAssetSchema;
    public name = 'invalidationAsset';
    public id = 3;

    // Validate asset fields
    public validate({ asset }: ValidateAssetContext<{}>): void {
	
        for (let assetKey in asset) {		
            if (!Object.keys(this.schema.properties).includes(assetKey)) {
            	throw new Error('Asset key "{assetKey}" is not valid for this transaction');
            } else if (assetKey == 'identity') {				
				for (let identityId in asset.identity) {
					if (!Object.keys(IdentityAssetSchema.properties).includes(asset.identity[identityId])) {
						throw new Error('Asset key "{asset.identity[identityId]}" is not valid for invalidation');
					}
				}
			}
        }
	
    }

    // Store asset data to account store
    public async apply({ asset, transaction, stateStore }: ApplyAssetContext<{}>): Promise<void> {
		
		const senderAddress = transaction.senderAddress;
		const recipientAddress = asset.recipientAddress;
		const recipientAccount = await stateStore.account.get(recipientAddress);

		if (!recipientAccount) {
			throw new Error(
				`Account does not exist for recipientAddress: ${asset.recipientAddress.toString('hex')}`,
			);
		}

		let isChanges = false;

		//remove element if some changes on validated data
		for (let identityId in asset.identity) {			
			for( let element = 0; element < recipientAccount.identity.validators.length; element++){ 
				if ( recipientAccount.identity.validators[element].includes(asset.identity[identityId]) && recipientAccount.identity.validators[element].includes(senderAddress.toString('hex')) ) { 
					recipientAccount.identity.validators.splice(element, 1); 
					isChanges = true;
				}			
			}
		}

		if (!isChanges) {
			throw new Error('Nothing to change in recipient account');
		} else {
			stateStore.account.set(recipientAccount.address, recipientAccount);
		}
    }
}