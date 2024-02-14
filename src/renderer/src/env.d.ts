/// <reference types="svelte" />
/// <reference types="vite/client" />

interface Window {
  api: {
    crashMain: () => void;
  };
  electron: {
    process: {
      versions: {
        electron: string;
        chrome: string;
        node: string;
        v8: string;
      };
    };
  };
}
