import { Request, Response, NextFunction } from 'express';
import { isHexString } from '@liskhq/lisk-validator';
import { BaseChannel, PluginCodec } from 'lisk-framework';

export const getAccount = (channel: BaseChannel, codec: PluginCodec) => async (
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<void> => {
	const accountAddress = req.params.address;

	if (!isHexString(accountAddress)) {
		res.status(400).send({
			errors: [{ message: 'The Address parameter should be a hex string.' }],
		});
		return;
	}

	try {
		const account: Buffer = await channel.invoke('app:getAccount', {
			address: accountAddress,
		});
		res.status(200).send({ data: codec.decodeAccount(account), meta: {} });
	} catch (err) {
		if ((err as Error).message.startsWith('Specified key accounts:address')) {
			res.status(404).send({
				errors: [{ message: `Account with address '${accountAddress}' was not found` }],
			});
		} else {
			next(err);
		}
	}
};

export const getAccountTransactions = (channel: BaseChannel, codec: PluginCodec) => async (
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<void> => {

    const accountAddress = req.params.address;
    if (!isHexString(accountAddress)) {
		res.status(400).send({
			errors: [{ message: 'The Address parameter should be a hex string.' }],
		});
		return;
    }

    try {
        const accountTransactios: Object[] = await channel.invoke('idnttytxhistory:getAccountTransactions', {
	    address: accountAddress,
	});
        res.status(200).send({ data: accountTransactios, meta: {} });
    } catch (err) {
	if ((err as Error).message.startsWith('Specified key accounts:address')) {
	    res.status(404).send({
		errors: [{ message: `Account with address '${accountAddress}' was not found` }],
	    });
	} else {
	    next(err);
	}
    }
};