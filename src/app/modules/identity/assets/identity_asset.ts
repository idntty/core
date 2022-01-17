import { BaseAsset, ApplyAssetContext, ValidateAssetContext } from 'lisk-sdk';
const { IdentityAssetSchema } = require('../schemas.ts');

export class IdentityAsset extends BaseAsset {
	
	public schema = IdentityAssetSchema;
	public name = 'identityAsset';
	public id = 1;

  	// Validate asset fields
  	public validate({ asset }: ValidateAssetContext<{}>): void {		

		for (let assetKey in asset) {
			if (!Object.keys(this.schema.properties).includes(assetKey)) {
				throw new Error('Asset key "{assetKey}" is not valid for this transaction');
			}
		}
  	}

  	// Store asset data to account store
  	public async apply({ asset, transaction, stateStore }: ApplyAssetContext<{}>): Promise<void> {
				
		const senderAddress = transaction.senderAddress;
    	const senderAccount = await stateStore.account.get(senderAddress);

		let isChanges = false;
		
		for (let assetKey in asset) {	
			if (asset[assetKey].length > 0 && senderAccount.identity[assetKey] != asset[assetKey]){
				senderAccount.identity[assetKey] = asset[assetKey];
				isChanges = true;

				//remove element if some changes on validated data
				for( let element = 0; element < senderAccount.identity.validators.length; element++){ 
					if ( senderAccount.identity.validators[element].includes(assetKey)) { 
						senderAccount.identity.validators.splice(element, 1); 
					}			
				}
			}
		}

		if (!isChanges) {
			throw new Error('Nothing to change in sender account');
		} else {
			stateStore.account.set(senderAccount.address, senderAccount);
		}
	}
}
