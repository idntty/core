const configSchema = {
	$id: '#/plugins/idnttytxhistory/config',
	type: 'object',
	properties: {
        enable: {
			type: 'boolean'
		},
		databaseName: {
			type: 'string',			
		},
	},
	required: ['enable', 'databaseName'],
	default: {
        enable: false,		
		databaseName: 'txhistory.db',
	},
};

const databaseSchema = {
    $id: '#/plugins/idnttytxhistory/txdatabase',    
    type: 'object',
    required: ['account', 'id', 'moduleID', 'assetID'],
    properties: {
        account: {fieldNumber: 1, dataType: 'string'},
        id: {fieldNumber: 2, dataType: 'string'},
        moduleID: {fieldNumber: 3, dataType: 'uint32'},
        assetID: {fieldNumber: 4, dataType: 'uint32'},
        nonce: {fieldNumber: 5, dataType: 'string'},
        fee: {fieldNumber: 6, dataType: 'string'}, 
		height: {fieldNumber: 7, dataType: 'uint32'}, 
    }
};


module.exports = {configSchema, databaseSchema}