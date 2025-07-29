/* eslint-disable @typescript-eslint/no-empty-function */
import { Application } from 'klayr-sdk';
import { BadgeModule } from './modules/badge/module';
import { IdentityModule } from './modules/identity/module';
import { NotaryModule } from "./modules/notary/module";

export const registerModules = (app: Application): void => {
    console.log('!!!Modules');
    app.registerModule(new IdentityModule());
    app.registerModule(new BadgeModule());
    app.registerModule(new NotaryModule());
};
