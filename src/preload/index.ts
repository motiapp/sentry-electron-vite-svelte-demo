import { contextBridge, ipcRenderer } from 'electron';
import { electronAPI } from '@electron-toolkit/preload';
import * as Sentry from '@sentry/electron';

require('@sentry/electron/preload');

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
});

// Custom APIs for renderer
const api = {
  crashMain: () => {
    ipcRenderer.invoke('crash-main');
  },
};

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    console.log('contextIsolated is enabled');

    contextBridge.exposeInMainWorld('electron', electronAPI);
    contextBridge.exposeInMainWorld('api', api);
  } catch (error) {
    console.error(error);
  }
} else {
  console.log('contextIsolated is disabled');
  // @ts-ignore (define in dts)
  window.electron = electronAPI;
  // @ts-ignore (define in dts)
  window.api = api;
}
