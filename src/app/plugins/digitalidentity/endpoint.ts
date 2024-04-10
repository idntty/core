import { BasePluginEndpoint } from 'lisk-sdk';

export class Endpoint extends BasePluginEndpoint {
	public async test(): Promise<object> {
		return { test: 'done' };
	}

	public init() {
		console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! EEEEEEEEEEEE ');
	}
}