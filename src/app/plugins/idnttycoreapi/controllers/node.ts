import { Request, Response, NextFunction } from 'express';
import { BaseChannel, PluginCodec } from 'lisk-framework';
import { isNumberString } from '@liskhq/lisk-validator';

export const getNodeInfo = (channel: BaseChannel) => async (
	_req: Request,
	res: Response,
	next: NextFunction,
): Promise<void> => {
	try {
		const nodeStatusAndInfo = await channel.invoke('app:getNodeInfo');
		res.status(200).send({ data: nodeStatusAndInfo, meta: {} });
	} catch (err) {
		next(err);
	}
};

export const getTransactions = (channel: BaseChannel, codec: PluginCodec) => async (
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<void> => {
	const { limit, offset } = req.query;

	if (limit && !isNumberString(limit)) {
		res.status(400).send({
			errors: [{ message: 'The limit query parameter should be a number.' }],
		});
		return;
	}
	const limitNumber = Number(limit) || 10;

	if (offset && !isNumberString(offset)) {
		res.status(400).send({
			errors: [{ message: 'The offset query parameter should be a number.' }],
		});
		return;
	}
	const offsetNumber = Number(offset) || 0;

	let transactionsInPool;

	try {
		transactionsInPool = await channel.invoke<ReadonlyArray<Buffer>>('app:getTransactionsFromPool');
	} catch (err) {
		next(err);
		return;
	}
	const totalTransactionsInPool = transactionsInPool.length;

	transactionsInPool = transactionsInPool.slice(
		offsetNumber || 0,
		Math.min(limitNumber + offsetNumber, transactionsInPool.length),
	);

	const decodedTransactions = [];
	for (const transaction of transactionsInPool) {
		decodedTransactions.push(codec.decodeTransaction(transaction));
	}

	// 200 - Response
	res.status(200).json({
		data: decodedTransactions,
		meta: { limit: limitNumber, offset: offsetNumber, total: totalTransactionsInPool },
	});
};

export const getTransactionsCount = (channel: BaseChannel) => async (
    _req: Request,
    res: Response,
    next: NextFunction,
): Promise<void> => {
    try {		
	let _transactionsCount = await channel.invoke<Buffer>('idnttyapi:getTransactionCount',);
	res.status(200).send({ data: {transactionscount: _transactionsCount }, meta: {} });
    } catch (err) {
	next(err);
    }
};


export const getTransactionsTop = (channel: BaseChannel, codec: PluginCodec) => async (
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<void> => {
    const { limit, offset } = req.query;

    if (limit && !isNumberString(limit)) {
	res.status(400).send({
	    errors: [{ message: 'The limit query parameter should be a number.' }],
	});
	return;
    }
    const limitNumber = Number(limit) || 10;

    if (offset && !isNumberString(offset)) {
	res.status(400).send({
	    errors: [{ message: 'The offset query parameter should be a number.' }],
	});
	return;
    }
    const offsetNumber = Number(offset) || 0;

    let encodedBlock = await channel.invoke<Buffer>('app:getLastBlock');
    let transactions = codec.decodeBlock(encodedBlock).payload;


    let blockLimit = 10000;
    while (transactions.length < limitNumber + offsetNumber) {
        encodedBlock = await channel.invoke<Buffer>('app:getBlockByID', {id: codec.decodeBlock(encodedBlock).header.previousBlockID,});

	
	let currentBlock = codec.decodeBlock(encodedBlock);

	currentBlock.payload.forEach(transaction => {
	    transaction['blockHeight'] = currentBlock.header.height;
	    transactions.push(transaction);
	});

        blockLimit = blockLimit - 1;
        if (blockLimit < 0 || currentBlock.header.height == 0) {
            break;
        }
      }

    // 200 - Response
    res.status(200).json({
	data: transactions.slice(offsetNumber),
	meta: { limit: limitNumber, offset: offsetNumber, total: transactions.length },
    });


};