# sentry-electron-vite-svelte-demo

An Electron application demo with Svelte, TypeScript, Vite and Sentry

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Project Setup

Clone repo and create an **.env** file copied from **.env-example** using your own Sentry auth token, DSN, org and project name.

This demo was tested on a Mac M1 Max on Mac OS 14.2.1 running Node 20.11.0 in development and production mode. Sentry will not send data from the renderer with this current setup.

Sentry init is called in:

- `src/renderer/src/main.ts`
- `src/main/index.ts`
- `src/preload/index.ts`

### Install

```bash
$ npm install
```

### Development

```bash
$ npm run dev
```

### Build

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```
