/* eslint-disable @typescript-eslint/no-empty-function */
import { Application } from 'lisk-sdk';
import { AuthorityModule } from "./modules/authority/authority_module";
import { IdentityModule } from "./modules/identity/identity_module";
import { SignatureModule } from "./modules/signature/signature_module";

// @ts-expect-error Unused variable error happens here until at least one module is registered
export const registerModules = (app: Application): void => {
    app.registerModule(IdentityModule);
    app.registerModule(AuthorityModule);
    app.registerModule(SignatureModule);
};
