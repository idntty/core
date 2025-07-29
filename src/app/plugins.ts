/* eslint-disable @typescript-eslint/no-empty-function */
import { DashboardPlugin } from '@klayr/dashboard-plugin';
import { Application } from 'klayr-sdk';

import { DigitalidentityPlugin } from './plugins/digitalidentity';
import { EventListenerPlugin } from './plugins/event_listener/event_listener_plugin';
import { SignerPlugin } from "./plugins/signer/signer_plugin";

export const registerPlugins = (app: Application): void => {
    console.log('!!!plugins');
        app.registerPlugin(new DashboardPlugin());

        app.registerPlugin(new DigitalidentityPlugin());
        app.registerPlugin(new EventListenerPlugin());
    app.registerPlugin(new SignerPlugin());
};
