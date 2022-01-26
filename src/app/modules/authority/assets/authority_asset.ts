import { BaseAsset, ApplyAssetContext, ValidateAssetContext } from 'lisk-sdk';
const { AuthorityAssetSchema } = require('../schemas.ts');

export class AuthorityAsset extends BaseAsset {
	
	public schema = AuthorityAssetSchema;
	public name = 'authorityAsset';
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
				if (senderAccount.authority[assetKey] != asset[assetKey]){				
					senderAccount.authority[assetKey] = asset[assetKey];
					isChanges = true;
				}
			}

			if (!isChanges) {
				throw new Error('Nothing to change in sender account');
			} else {			
				stateStore.account.set(senderAccount.address, senderAccount);
			}
		}
}
