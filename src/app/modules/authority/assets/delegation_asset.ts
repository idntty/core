import { BaseAsset, ApplyAssetContext, ValidateAssetContext } from 'lisk-sdk';
const { DelegationAssetSchema } = require('../schemas.ts');

export class DelegationAsset extends BaseAsset {
	
	public schema = DelegationAssetSchema;
	public name = 'delegationAsset';
	public id = 2;


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
			const recipientAddress = asset.recipientAddress;			
            const recipientAccount = await stateStore.account.get(recipientAddress);

            if (!recipientAccount) {
                throw new Error(
                    `Account does not exist for recipientAddress: ${asset.recipientAddress.toString('hex')}`,
                );
            }

			let isChanges = false;
			
            if (!recipientAccount.authority.issuers.includes(senderAddress.toString('hex'))){
                recipientAccount.authority.issuers.push(senderAddress.toString('hex'));
                isChanges = true;
            }

			if (!isChanges) {
				throw new Error('Nothing to change in recipient account');
			} else {			
				stateStore.account.set(recipientAccount.address, recipientAccount);
			}
		}
}
