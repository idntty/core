import { BaseAsset, ApplyAssetContext, ValidateAssetContext } from 'lisk-sdk';

const { isBytes } = require('@liskhq/lisk-validator');
const { ValidationAssetSchema } = require('../schemas.ts');


export class ValidationAsset extends BaseAsset {
    
    public schema = ValidationAssetSchema;
    public name = 'validationAsset';
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

		let isValidation = false;
		
		if (recipientAccount.identity){
			for (let identityKey in asset.identity) {

			if (asset.identity[identityKey].length > 0 ){
				isValidation = true;
		
				if (Object.keys(recipientAccount.identity).includes(identityKey) && Buffer.compare(recipientAccount.identity[identityKey], asset.identity[identityKey]) != 0){
					throw new Error(`Validation data missmatch on identity "${identityKey}"`);
				} else {
					console.log(senderAddress.toString('hex') + ':' + transaction._id.toString('hex') + ':' + identityKey);
					recipientAccount.identity.validators.push(senderAddress.toString('hex') + ':' + transaction._id.toString('hex') + ':' + identityKey);
				}
			}
			}
		}

		console.log(recipientAccount.identity.validators);
		if (!isValidation) {
			throw new Error('Nothing to validate in recipient account');
		} else {
			stateStore.account.set(recipientAccount.address, recipientAccount);
		}
    }
}