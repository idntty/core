import { Plugins } from 'klayr-sdk';
import Fastify from 'fastify';
import fastifyCors from '@fastify/cors';

import * as auth from './auth';

const server = Fastify({ logger: true });
server.register(fastifyCors, {
    origin: true,
    credentials: true,
});

/* eslint-disable class-methods-use-this */
/* eslint-disable  @typescript-eslint/no-empty-function */
export class SignerPlugin extends Plugins.BasePlugin {
    public get nodeModulePath(): string {
        return __filename;
    }

    public async load(): Promise<void> {
        server.get('/register', auth.register());
        server.post('/register/verify', auth.registerVerify());

        server.get('/login', auth.login());
        server.post('/login/verify', auth.loginVerify());

        server.listen({ port: 8001 });
    }

    public async unload(): Promise<void> {}
}
