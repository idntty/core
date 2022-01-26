import { BaseAsset, ApplyAssetContext, ValidateAssetContext } from 'lisk-sdk';
const { DelegationAssetSchema } = require('../schemas.ts');

export class UndelegationAsset extends BaseAsset {
	
	public schema = DelegationAssetSchema;
	public name = 'delegationAsset';
	public id = 3;


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
			
            if (recipientAccount.authority.issuers.includes(senderAddress.toString('hex'))){                
                const index = recipientAccount.authority.issuers.indexOf(senderAddress.toString('hex'));
                recipientAccount.authority.issuers.splice(index, 1);
                isChanges = true;
            }

			if (!isChanges) {
				throw new Error('Nothing to change in recipient account');
			} else {			
				stateStore.account.set(recipientAccount.address, recipientAccount);
			}
		}
}
