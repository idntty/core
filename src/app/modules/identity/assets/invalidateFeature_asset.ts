import { BaseAsset, ApplyAssetContext, ValidateAssetContext } from 'lisk-sdk';

const { invalidateFeatureAssetSchema } = require('../schemas.ts');


export class invalidateFeature extends BaseAsset {
    
    public schema = invalidateFeatureAssetSchema;
    public name = 'invalidateFeature';
    public id = 12;

    // Validate asset fields
    public validate({ asset }: ValidateAssetContext<{}>): void {
	
		let uniqueLabels = [];
		// Validate asset labels for features
		asset.features.forEach((feature) => {
			if (uniqueLabels.includes(feature.label)) {
				throw new Error(
					`Transaction validation error: Labels mast be unique`,
				);
			} else {
				uniqueLabels.push(feature.label);
			}			
		});
	
    }

    // Store asset data to account store
    public async apply({ asset, transaction, stateStore }: ApplyAssetContext<{}>): Promise<void> {		
		
		const senderAddress = transaction.senderAddress;
		const recipientAddress = asset.recipientAddress;
		const recipientAccount = await stateStore.account.get(recipientAddress);

		if (!recipientAccount) {
			throw new Error(
				`State modification error: Account does not exist for recipientAddress: ${asset.recipientAddress.toString('hex')}`,
			);
		}

		//Check features to validate		
		asset.features.forEach((assetFeature) => {
			let isFetature = true;
			recipientAccount.identity.verifications.forEach((verification, index) => {
				if (assetFeature.label === verification.label && Buffer.compare(senderAddress, verification.account) === 0 ) {
					recipientAccount.identity.verifications.splice(index,1);
					isFetature = false;
				}
			});

			if (isFetature) {
				throw new Error(
					`State modification error: Nothing to invalidate for:${senderAddress.toString('hex')} with label:${assetFeature.label}`,
				);
			}
		});
		
		stateStore.account.set(recipientAccount.address, recipientAccount);

    }
}