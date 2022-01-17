/*
./bin/run config:create

./bin/run genesis-block:create --output config/default --accounts 10 --validators-hash-onion-distance=10 --validators-passphrase-encryption-iterations=1000 --validators-hash-onion-count=1000
tmp=$(mktemp)
jq '.forging.delegates = input' config/default/config.json config/default/forging_info.json > "$tmp" && mv "$tmp" config/default/config.json
jq '.forging += input' config/default/config.json config/default/password.json > "$tmp" && mv "$tmp" config/default/config.json

./bin/run node:info

*/


const IdentityModuleSchema = {
    $id: 'identity/module',
    title: 'Identity module account schema',
    type: 'object',
    required: [],
    properties: {
        seed: {fieldNumber: 1, dataType: 'bytes'},
        general: {fieldNumber: 2, dataType: 'bytes'},
        nationality: {fieldNumber: 3, dataType: 'bytes'},
        signature: {fieldNumber: 4, dataType: 'bytes'},
        biometrics: {fieldNumber: 5, dataType: 'bytes'},
        validators: {fieldNumber: 6, type: 'array', items: {dataType: 'string'}}
    },
    default: {validators: []}
};


const IdentityAssetSchema = {
    $id: 'identity/asset',
    title: 'Privatedata transaction asset for identity module',
    type: 'object',
    required: [],
    properties: {
        seed: {fieldNumber: 1, dataType: 'bytes', maxLength: 32},
        general: {fieldNumber: 2, dataType: 'bytes', maxLength: 32},
        nationality: {fieldNumber: 3, dataType: 'bytes', maxLength: 32},
        signature: {fieldNumber: 4, dataType: 'bytes', maxLength: 32},
        biometrics: {fieldNumber: 5, dataType: 'bytes', maxLength: 32}
    }
};

const ValidationAssetSchema = {
    $id: 'identity/validation',
	title: 'Validation transaction asset for identity module',
    type: 'object',
    required: ['recipientAddress'],
    properties: {
        recipientAddress: {fieldNumber: 1, dataType: 'bytes', minLength: 20, maxLength: 20},
        identity: {
            fieldNumber: 2,
            type: 'object',
            properties: { 
                general: {fieldNumber: 1, dataType: 'bytes', maxLength: 32},
                nationality: {fieldNumber: 2, dataType: 'bytes', maxLength: 32},
                signature: {fieldNumber: 3, dataType: 'bytes', maxLength: 32},
                biometrics: {fieldNumber: 4, dataType: 'bytes', maxLength: 32}
            }
        }
    }
};

module.exports = {IdentityModuleSchema, IdentityAssetSchema, ValidationAssetSchema}