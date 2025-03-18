/* eslint-disable class-methods-use-this */

import { Modules, StateMachine, cryptography } from 'klayr-sdk';

import { AccountStore } from '../stores/account';

import { validateFeatureSchema } from '../schema';

interface Params {
    recipientAddress: string;
    features: {
        label: string;
        value: string;
    }[];
}

export class ValidateFeatureCommand extends Modules.BaseCommand {
    public schema = validateFeatureSchema;

    public async verify(
        _context: StateMachine.CommandVerifyContext<Params>,
    ): Promise<StateMachine.VerificationResult> {
        const { params, transaction } = _context;

        if (transaction.fee < 499000000) {
            return {
                status: StateMachine.VerifyStatus.FAIL,
                error: new Error('Fee is too low. Min fee for validateFeature is 499000000'),
            };
        }

        const uniqueLabels: string[] = [];
        params.features.forEach(feature => {
            if (uniqueLabels.includes(feature.label)) {
                throw new Error('Transaction validation error: Labels mast be unique');
            } else {
                uniqueLabels.push(feature.label);
            }
        });

        return { status: StateMachine.VerifyStatus.OK };
    }

    public async execute(_context: StateMachine.CommandExecuteContext<Params>): Promise<void> {
        const { senderAddress, id } = _context.transaction;
        const { recipientAddress, features } = _context.params;
        const accountSubstore = this.stores.get(AccountStore);

        cryptography.address.validateKlayr32Address(recipientAddress);

        const recipientAccount = await accountSubstore.get(
            _context,
            cryptography.address.getAddressFromKlayr32Address(recipientAddress),
        );

        if (!recipientAccount) {
            throw new Error(
                `State modification error: Account does not exist for recipientAddress: ${recipientAddress}`,
            );
        }

        const validatedFeatures: { label: string; account: string; tx: string }[] = [];
        for (const feature of features) {
            let doesFeatureExist = false;
            for (const recipientFeature of recipientAccount.features) {
                if (
                    feature.label === recipientFeature.label &&
                    feature.value === recipientFeature.value
                ) {
                    doesFeatureExist = true;
                    validatedFeatures.push({
                        label: feature.label,
                        account: senderAddress.toString('hex'),
                        tx: id.toString('hex'),
                    });
                }
            }
            if (!doesFeatureExist) {
                throw new Error(
                    `State modification error: Unable to validate a feature with label: ${feature.label}`,
                );
            }
        }

        validatedFeatures.forEach(validatedFeature => {
            recipientAccount.verifications.forEach(verification => {
                if (
                    validatedFeature.label === verification.label &&
                    senderAddress.toString('hex') === verification.account
                ) {
                    throw new Error(
                        `State modification error: Feature with label: ${validatedFeature.label} already verified`,
                    );
                }
            });
        });

        accountSubstore.set(
            _context,
            cryptography.address.getAddressFromKlayr32Address(recipientAddress),
            {
                ...recipientAccount,
                verifications: [...recipientAccount.verifications, ...validatedFeatures],
            },
        );
    }
}
