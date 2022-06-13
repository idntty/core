import { BaseAsset, ApplyAssetContext, ValidateAssetContext } from 'lisk-sdk';

const { validateFeatureAssetSchema } = require('../schemas.ts');


export class validateFeatureAsset extends BaseAsset {
    
    public schema = validateFeatureAssetSchema;
    public name = 'validateFeatureAsset';
    public id = 11;

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
		let validatedFeatures = []
		asset.features.forEach((assetFeature) => {
			let isFetature = false;
			recipientAccount.identity.features.forEach((accountFeature, index) => {
				if (assetFeature.label === accountFeature.label && Buffer.compare(assetFeature.value, accountFeature.value) === 0 ) {
					isFetature = true;					
					validatedFeatures.push({ label:assetFeature.label, account:senderAddress, tx:transaction._id});
				}
			});	

			if (!isFetature) {
				throw new Error(
					`State modification error: Unable to validate a feature with label: ${assetFeature.label}`,
				);
			}

		});
		
		validatedFeatures.forEach((validatedFeature) => {
			recipientAccount.identity.verifications.forEach((verification) => {
				//Check for duplications
				if (validatedFeature.label === verification.label && Buffer.compare(senderAddress, verification.account) === 0  ) {
					throw new Error(
						`State modification error: This label: ${validatedFeature.label} has already validated with address: ${senderAddress.toString('hex')}`,
					);
				}
			});
		});
		
		recipientAccount.identity.verifications.push(...validatedFeatures);
		stateStore.account.set(recipientAccount.address, recipientAccount);

    }
}