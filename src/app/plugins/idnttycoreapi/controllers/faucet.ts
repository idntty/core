import { Request, Response, NextFunction } from 'express';
import { BaseChannel, PluginCodec } from 'lisk-framework';


export const authorize = (channel: BaseChannel) => async (
	_req: Request,
	res: Response,
	next: NextFunction,
): Promise<void> => {
    let ayth = await channel.invoke('idnttyfaucet:authorize', _req.body);
    res.status(200).send({ data: ayth, meta: {} });
};

export const fundByEmail = (channel: BaseChannel) => async (
	_req: Request,
	res: Response,
	next: NextFunction,
): Promise<void> => {
    let ayth = await channel.invoke('idnttyfaucet:fundByEmail', _req.body);
    res.status(200).send({ data: ayth, meta: {} });
};

export const fundByAccount = (channel: BaseChannel) => async (
	_req: Request,
	res: Response,
	next: NextFunction,
): Promise<void> => {
	const auth = _req.get("authorization");
	const credential = auth.substring(7).split(":");
    const authType = auth.substring(0, 6);
   
	const faucetValidation = {
		authType: auth.substring(0, 6),
		authPubkey: credential[0],
		authSignature: credential[1],
		validateString: _req.get("networkidentifier").concat(_req.get("lastblockid")),
		account: _req.body.account
	}

    let ayth = await channel.invoke('idnttyfaucet:fundByAccount', faucetValidation);
    res.status(200).send({ data: ayth, meta: {} });

};
