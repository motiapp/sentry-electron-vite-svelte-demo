import { sentryVitePlugin } from '@sentry/vite-plugin';
import { defineConfig, externalizeDepsPlugin, loadEnv } from 'electron-vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default ({ mode }) => {
  const { MAIN_VITE_SENTRY_ORG, MAIN_VITE_SENTRY_PROJECT, MAIN_VITE_SENTRY_AUTH_TOKEN } = loadEnv(
    mode,
    process.cwd(),
  );

  return defineConfig({
    main: {
      build: {
        sourcemap: true,
      },
      plugins: [
        externalizeDepsPlugin(),
        sentryVitePlugin({
          org: MAIN_VITE_SENTRY_ORG,
          project: MAIN_VITE_SENTRY_PROJECT,
          debug: true,
          authToken: MAIN_VITE_SENTRY_AUTH_TOKEN,
        }),
      ],
    },
    preload: {
      build: {
        sourcemap: true,
      },
      plugins: [
        externalizeDepsPlugin(),
        sentryVitePlugin({
          org: MAIN_VITE_SENTRY_ORG,
          project: MAIN_VITE_SENTRY_PROJECT,
          debug: true,
          authToken: MAIN_VITE_SENTRY_AUTH_TOKEN,
        }),
      ],
    },
    renderer: {
      build: {
        sourcemap: true,
      },
      plugins: [
        svelte(),
        sentryVitePlugin({
          org: MAIN_VITE_SENTRY_ORG,
          project: MAIN_VITE_SENTRY_PROJECT,
          debug: true,
          authToken: MAIN_VITE_SENTRY_AUTH_TOKEN,
        }),
      ],
    },
  });
};
