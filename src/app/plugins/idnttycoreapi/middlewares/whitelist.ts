import * as ip from 'ip';
import { Request, Response, NextFunction } from 'express';
import { ErrorWithStatus } from './errors';

const defualtOption = { whiteList: [] };

const checkIpInList = (list: ReadonlyArray<string>, addr: string): boolean => {
	let entry;
	for (const value of list) {
		entry = value;
		if (ip.isV4Format(entry)) {
			// IPv4 host entry
			entry += '/32';
		}
		try {
			entry = ip.cidrSubnet(entry);
			if (entry.contains(addr)) {
				return true;
			}
		} catch (err) {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
			console.error('CheckIpInList:', err.toString());
		}
	}
	return false;
};

export const whiteListMiddleware = ({
	whiteList,
}: { whiteList: ReadonlyArray<string> } = defualtOption) => (
	req: Request,
	_res: Response,
	next: NextFunction,
): void => {
	if (whiteList.length === 0 || checkIpInList(whiteList, req.ip)) {
		next();
		return;
	}

	next(new ErrorWithStatus('Access Denied', 401));
};