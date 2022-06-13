export interface HTTPPluginConfig {
	readonly port: number;
	readonly host: string;
	readonly whiteList: ReadonlyArray<string>;
	readonly cors: {
		readonly origin: string;
		readonly methods: string[];
	};
	readonly limits: {
		readonly max: number;
		readonly delayMs: number;
		readonly delayAfter: number;
		readonly windowMs: number;
		readonly headersTimeout: number;
		readonly serverSetTimeout: number;
	};
}