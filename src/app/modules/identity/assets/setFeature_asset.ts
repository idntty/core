import { BaseAsset, ApplyAssetContext, ValidateAssetContext } from 'lisk-sdk';
const { setFeatureAssetSchema } = require('../schemas.ts');

export class setFeature extends BaseAsset {
	
	public schema = setFeatureAssetSchema;
	public name = 'setFeature';
	public id = 1;

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
			let uniqueFetature = true;

			//Update features
			senderAccount.identity.features.forEach((accountFeature, index) => {
				if (assetFeature.label === accountFeature.label && Buffer.compare(assetFeature.value, accountFeature.value) === 0 ) {
					throw new Error(
						`State modification error: The new value must be different from the existing`,
					);
				}
				if (assetFeature.label === accountFeature.label) {
					uniqueFetature = false;
					senderAccount.identity.features[index] = assetFeature;
				}
			});	

			//Set new features
			if (uniqueFetature) {
				senderAccount.identity.features.push(assetFeature);
			} else { //Delete validatetd features for updated
				senderAccount.identity.verifications.forEach((verification, index) => {					
					if (assetFeature.label === verification.label) {
						senderAccount.identity.verifications.splice(index,1);
					}
				});
			}
		});

		stateStore.account.set(senderAccount.address, senderAccount);
	}
}
