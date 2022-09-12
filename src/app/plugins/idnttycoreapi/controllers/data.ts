import { Request, Response, NextFunction } from 'express';
import { BaseChannel, PluginCodec } from 'lisk-framework';
import { cryptography, codec as codecFunctions} from 'lisk-sdk';


function _isValidated(auth: string, validate: string): object {    
    let credential = auth.substring(7).split(":");
    const authType = auth.substring(0, 6);
    const authPubkey = credential[0];
    const authSignature = credential[1];                                    

    const validation = {
        pubKey: authPubkey,
        result: cryptography.verifyData(Buffer.from(validate, "hex"), Buffer.from(authSignature, "hex"), Buffer.from(authPubkey, "hex"))
    }

    return validation;
};

export const getPrivateData = (channel: BaseChannel) => async (
	_req: Request,
	res: Response,
	next: NextFunction,
): Promise<void> => {
	try {        
        if ("authorization" in _req.headers && "networkidentifier" in _req.headers && "lastblockid" in _req.headers) {
        
            const auth = _req.get("authorization");
            const authValidateString = _req.get("networkidentifier").concat(_req.get("lastblockid"));
            const validation = _isValidated(auth, authValidateString);
            
            if (validation.result) {
                
                let _address = cryptography.getAddressFromPublicKey(Buffer.from(validation.pubKey, "hex")).toString('hex'); 
                let userPrivateData = await channel.invoke('idnttyprivatedata:getUserPrivateData', { account:_address });
                res.status(200).send({ data: userPrivateData, meta: {} });
            } else {
                res.status(200).send({ data: false, meta: {} });
            }
            
        } else {
            res.status(200).send({ data: false, meta: {} });
        }
		
	} catch (err) {        
		next(err);
	}
};

export const postPrivateData = (channel: BaseChannel) => async (
	_req: Request,
	res: Response,
	next: NextFunction,
): Promise<void> => {
	try {

        if ("authorization" in _req.headers && "networkidentifier" in _req.headers && "lastblockid" in _req.headers) {

            const auth = _req.get("authorization");
            const authValidateString = _req.get("networkidentifier").concat(_req.get("lastblockid"));
            const validation = _isValidated(auth, authValidateString);

            if (validation.result) {
                
                let _address = cryptography.getAddressFromPublicKey(Buffer.from(validation.pubKey, "hex")).toString('hex');                            
                let result = await channel.invoke('idnttyprivatedata:postUserPrivateData', {
                    account: _address,
                    data: _req.body
                });                                     

                res.status(200).send({ data: result, meta: {} });

            } else {
                res.status(200).send({ data: false, meta: {} });
            }
                                  
        } else {
            res.status(200).send({ data: false, meta: {} });
        }		
	} catch (err) {
        console.log("postPrivateData err:",err);
		next(err);
	}
};

/*
export const deletePrivateData = (channel: BaseChannel) => async (
	_req: Request,
	res: Response,
	next: NextFunction,
): Promise<void> => {
	try {

        if ("authorization" in _req.headers && "networkidentifier" in _req.headers && "lastblockid" in _req.headers) {
            const auth = _req.get("authorization");
            const authValidateString = _req.get("networkidentifier").concat(_req.get("lastblockid"));

            if (_isValidated(auth, authValidateString)) {
                
                let _address = cryptography.getAddressFromPublicKey(Buffer.from(authPubkey, "hex")).toString('hex');            
                let result = await channel.invoke('idnttyprivatedata:deleteUserPrivateData', {
                    account: _address,
                    data: {
                        account: _address,
                        data: _req.body
                    }
                });

                res.status(200).send({ data: result, meta: {} });

            } else {
                res.status(200).send({ data: false, meta: {} });
            }
                                  
        } else {
            res.status(200).send({ data: false, meta: {} });
        }

		res.status(200).send({ data: "postPrivateData", meta: {} });
	} catch (err) {
        console.log("postPrivateData err:",err);
		next(err);
	}
};
*/

export const getSharedData = (channel: BaseChannel) => async (
	_req: Request,
	res: Response,
	next: NextFunction,
): Promise<void> => {
	try {        
        const shredId = _req.params.id.split(':');        
        let userSharedData = await channel.invoke('idnttyprivatedata:getUserSharedData', { account:shredId[0], publickey:shredId[1] });
        res.status(200).send({ data: userSharedData, meta: {} });
	} catch (err) {        
		next(err);
	}
};

export const getSharedDataKeys = (channel: BaseChannel) => async (
	_req: Request,
	res: Response,
	next: NextFunction,
): Promise<void> => {
	try {
        if ("authorization" in _req.headers && "networkidentifier" in _req.headers && "lastblockid" in _req.headers) {
            const auth = _req.get("authorization");
            const authValidateString = _req.get("networkidentifier").concat(_req.get("lastblockid"));
            const validation = _isValidated(auth, authValidateString);
            
            if (validation.result) {                                
                let _address = cryptography.getAddressFromPublicKey(Buffer.from(validation.pubKey, "hex")).toString('hex');                           
                let result = await channel.invoke('idnttyprivatedata:getUserSharedDataKeys', {
                    account: _address
                });
                res.status(200).send({ data: result, meta: {} });

            } else {
                res.status(200).send({ data: false, meta: {} });
            }
                                  
        } else {
            res.status(200).send({ data: false, meta: {} });
        }
	} catch (err) {
        console.log("postPrivateData err:",err);
		next(err);
	}
};

export const postSharedData = (channel: BaseChannel) => async (
	_req: Request,
	res: Response,
	next: NextFunction,
): Promise<void> => {
	try {

        if ("authorization" in _req.headers && "networkidentifier" in _req.headers && "lastblockid" in _req.headers) {
            const auth = _req.get("authorization");
            const authValidateString = _req.get("networkidentifier").concat(_req.get("lastblockid"));
            const validation = _isValidated(auth, authValidateString);
                        
            if (validation.result) {
                
                let _address = cryptography.getAddressFromPublicKey(Buffer.from(validation.pubKey, "hex")).toString('hex'); 
                let result = await channel.invoke('idnttyprivatedata:postUserSharedData', {
                    account: _address,
                    publickey: _req.body.publickey,
                    data: _req.body.shared                   
                });                                     

                res.status(200).send({ data: result, meta: {} });

            } else {
                res.status(200).send({ data: false, meta: {} });
            }
                                  
        } else {
            res.status(200).send({ data: false, meta: {} });
        }
		
	} catch (err) {
        console.log("postPrivateData err:",err);
		next(err);
	}
};
