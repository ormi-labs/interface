import type { CeramicApi } from '@ceramicnetwork/common';
import Ceramic from '@ceramicnetwork/http-client';

// Store ceramic as global in window, because re-creating it every time page loads
// can be inefficeint.
declare global {
  interface Window {
    ceramic?: CeramicApi;
  }
}

export const initCeramic = async (): Promise<CeramicApi> => {
  if (window.ceramic === undefined) {
    const ceramic = new Ceramic('https://ceramic-clay.3boxlabs.com');
    window.ceramic = ceramic;
  }

  return Promise.resolve(window.ceramic as CeramicApi);
};
