const configSchema = {
	$id: '#/plugins/idntty-api/config',
	type: 'object',
	properties: {
		port: {
			type: 'integer',
			minimum: 1,
			maximum: 65535,
		},
		host: {
			type: 'string',
			format: 'ip',
		},
		whiteList: {
			type: 'array',
			items: {
				type: 'string',
			},
		},
		databaseName: {
			type: 'string',
		},        
		cors: {
			type: 'object',
			properties: {
				origin: {
					anyOf: [{ type: 'string' }, { type: 'boolean' }],
				},
				methods: {
					type: 'array',
				},
			},
			required: ['origin'],
		},
		filestorage: {
			type: 'object',
			required: ['enabled', 'maxTotalFileSize', 'database', 'storage'],
			properties: {
				enabled: {
					type: 'boolean',
				},
				maxTotalFileSize: {
					type: 'integer',
				},
				fee: {
					type: 'integer',
				},
				database: {
					type: 'object',
					required: ['model'],
					properties: {
						model: {
							type: 'string',
							enum: ["local", "redis"]
						},
						url: {
							type: 'string',
						}				
					}
				},
				storage: {
					type: 'object',
					required: ['model'],
					properties: {
						model: {
							type: 'string',
							enum: ["local", "s3"]
						},
						settings: {
							type: 'object',
							required: ['bucketName'],
							description: 'bucketName can be local path like: //this.options.dataPath/$bucketName',
							properties: {
								bucketName: {
									type: 'string',									
								},
								accessKeyId: {
									type: 'string',
								},
								secretAccessKey: {
									type: 'string',
								},				
							}
						}				
					}
				},
			},			
		},
		limits: {
			type: 'object',
			properties: {
				max: {
					type: 'integer',
				},
				delayMs: {
					type: 'integer',
				},
				delayAfter: {
					type: 'integer',
				},
				windowMs: {
					type: 'integer',
				},
				headersTimeout: {
					type: 'integer',
					minimum: 1,
					maximum: 40000,
				},
				serverSetTimeout: {
					type: 'integer',
					minimum: 1,
					maximum: 120000,
				},
			},
			required: ['max', 'delayMs', 'delayAfter', 'windowMs', 'headersTimeout', 'serverSetTimeout'],
		},
	},
	required: ['port', 'whiteList', 'cors', 'filestorage', 'limits'],
	default: {
		port: 4000,
		host: '127.0.0.1',
		whiteList: ['127.0.0.1'],
        databaseName: 'idnttyapi',
		cors: {
			origin: '*',
			methods: ['GET', 'POST', 'PUT'],
		},
		filestorage:{
			enabled: false,
			maxTotalFileSize: 10*1024*1024, //Bytes
			fee:1,
			database: {
				model: 'local',
			},
			storage: {
				model: 'local',
				settings: {
					bucketName:'filestorage/plugins/idnttyapi/',
				}
			}
		},
		limits: {
			max: 0,
			delayMs: 0,
			delayAfter: 0,
			windowMs: 60000,
			headersTimeout: 5000,
			serverSetTimeout: 20000,
		},
	},
};

const databaseAccountTransactionsSchema = {
    $id: '#/plugins/idntty-api/databaseAccountTransactionsSchema',    
    type: 'object',
    required: ['senderAccount', 'id', 'moduleID', 'assetID'],
    properties: {
        senderAccount: {fieldNumber: 1, dataType: 'string'},
        id: {fieldNumber: 2, dataType: 'string'},
        moduleID: {fieldNumber: 3, dataType: 'uint32'},
        assetID: {fieldNumber: 4, dataType: 'uint32'},
        nonce: {fieldNumber: 5, dataType: 'string'},
        fee: {fieldNumber: 6, dataType: 'string'}, 
		height: {fieldNumber: 7, dataType: 'uint32'}, 
    }
};

const databaseTransactionsFilesSchema = {
    $id: '#/plugins/idntty-api/databaseTransactionsFilesSchema',    
    type: 'object',
    required: ['account', 'id'],
    properties: {
        account: { fieldNumber: 1, dataType: 'string' },
        id: { fieldNumber: 2, dataType: 'string' },
        objects: {
			fieldNumber: 3, 
			type: 'array',
			items: {
				type: 'object',
				properties: { 
					key: {fieldNumber: 1, dataType: 'string'},
					name: {fieldNumber: 2, dataType: 'string'}
				}
			}
		},       
    }
};

module.exports = {configSchema, databaseAccountTransactionsSchema, databaseTransactionsFilesSchema}