import { Request, Response, NextFunction } from 'express';

export class ErrorWithStatus extends Error {
	public statusCode: number;
	public constructor(message: string, statusCode: number) {
		super(message);
		this.statusCode = statusCode;
	}
}

interface ErrorWithDetails extends Error {
	errors: Error[];
}

export const errorMiddleware = () => (
	err: Error | Error[] | ErrorWithDetails,
	_req: Request,
	res: Response,
	_next: NextFunction,
): void => {
	let errors;
	let responseCode = 500;

	if (Array.isArray(err)) {
		errors = err;
	} else if ((err as ErrorWithDetails).errors) {
		errors = (err as ErrorWithDetails).errors;
	} else {
		errors = [err];
	}

	for (const error of errors) {
		// Include message property in response
		Object.defineProperty(error, 'message', { enumerable: true });
	}

	if (err instanceof ErrorWithStatus) {
		const { statusCode, ...message } = err;
		errors = message;
		responseCode = statusCode;
	}

	res.status(responseCode).send({ errors });
};