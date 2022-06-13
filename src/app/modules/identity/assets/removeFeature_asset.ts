import { BaseAsset, ApplyAssetContext, ValidateAssetContext } from 'lisk-sdk';
const { removeFeatureAssetSchema } = require('../schemas.ts');

export class removeFeatureAsset extends BaseAsset {
	
	public schema = removeFeatureAssetSchema;
	public name = 'removeFeatureAsset';
	public id = 2;

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
    	const senderAccount = await stateStore.account.get(senderAddress);

		asset.features.forEach((assetFeature) => {
			let isFetature = false;
			senderAccount.identity.features.forEach((accountFeature, index) => {
				if (assetFeature.label === accountFeature.label) {
					senderAccount.identity.features.splice(index,1);
					isFetature = true;
				}
			});
			
			if (!isFetature) {
				throw new Error(
					`State modification error: Unable to delete a feature that does not exist`,
				);
			}

			senderAccount.identity.verifications.forEach((verification, index) => {
				if (assetFeature.label === verification.label) {
					senderAccount.identity.verifications.splice(index,1);
				}
			});

		});

		stateStore.account.set(senderAccount.address, senderAccount);
	}
}
