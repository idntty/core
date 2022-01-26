const AuthorityModuleSchema = {
    $id: 'authority/module',
    title: 'Authority module schema',
    type: 'object',
    properties: {
        name: {fieldNumber: 1, dataType: 'string'},
        description: {fieldNumber: 2, dataType: 'string'},            
        issuers: {fieldNumber: 3, type: 'array', items: {dataType: 'bytes'}}
    },
    default: {issuers: []}
};

const AuthorityAssetSchema = {
    $id: 'authority/asset',
    title: 'Authority transaction asset for authority module',
    type: 'object',
    required: ['name'],
    properties: {
        name: {fieldNumber: 1, dataType: 'string', maxLength: 32},
        description: {fieldNumber: 2, dataType: 'string', maxLength: 256}
    }
};


const DelegationAssetSchema = {
    $id: 'authority/delegation',
	title: 'Delegation transaction asset for authority module',
    type: 'object',
    required: ['recipientAddress'],
    properties: {
        recipientAddress: {fieldNumber: 1, dataType: 'bytes', maxLength: 32}        
    }
};


module.exports = {AuthorityModuleSchema, AuthorityAssetSchema, DelegationAssetSchema}