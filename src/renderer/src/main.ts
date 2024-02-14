import './assets/style.css';
import App from './App.svelte';

import { init as rendererInit } from '@sentry/electron/renderer';
import { browserTracingIntegration, init } from '@sentry/svelte';

rendererInit(
  {
    dsn: import.meta.env.VITE_SENTRY_DSN,
    integrations: [browserTracingIntegration()],
    tracesSampleRate: 1.0,
    debug: true,
    beforeSend: (event) => {
      console.log('beforeSend in renderer', event);
      return event;
    },
    beforeSendTransaction: (transaction) => {
      console.log('beforeSendTransaction in renderer', transaction);
      return transaction;
    },
  },
  init as any,
);

const app = new App({
  target: document.getElementById('app'),
});

export default app;
