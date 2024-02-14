import './assets/style.css';
import App from './App.svelte';

import { init as rendererInit } from '@sentry/electron/renderer';
import { browserTracingIntegration, init, replayIntegration } from '@sentry/svelte';

rendererInit(
  {
    dsn: import.meta.env.VITE_SENTRY_DSN,
    integrations: [browserTracingIntegration(), replayIntegration()],
    tracesSampleRate: 1.0,
    replaysSessionSampleRate: 1.0,
    replaysOnErrorSampleRate: 1.0,
  },
  init as any,
);

const app = new App({
  target: document.getElementById('app'),
});

export default app;
