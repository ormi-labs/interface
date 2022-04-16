import KeyDidResolver from 'key-did-resolver';
import ThreeIdResolver from '@ceramicnetwork/3id-did-resolver';
import { AbstractConnector } from '@web3-react/abstract-connector';
import { DID, DIDProvider } from 'dids';
import { EthereumAuthProvider, ThreeIdConnect } from '@3id/connect';
import type { CeramicApi } from '@ceramicnetwork/common';

// Store threeId as global in window, because recreating it every time page loads
// can be inefficeint.
declare global {
  interface Window {
    threeId?: ThreeIdConnect;
  }
}

export const initThreeId = async (): Promise<ThreeIdConnect> => {
  if (window.threeId === undefined) {
    const threeId = new ThreeIdConnect();
    window.threeId = threeId;
  }

  return Promise.resolve(window.threeId as ThreeIdConnect);
};

export const getDidProvider = async (
  threeId: ThreeIdConnect,
  connector: AbstractConnector
): Promise<DIDProvider | undefined> => {
  const ethProvider = await connector.getProvider();
  const address = await connector.getAccount();

  if (ethProvider !== undefined && address !== null)
    await threeId.connect(new EthereumAuthProvider(ethProvider, address));

  return threeId.getDidProvider();
};

export const authenticateUserDid = async (
  didProvider: DIDProvider,
  ceramic: CeramicApi
): Promise<DID | undefined> => {
  if (window === undefined) return;

  const did = new DID({
    provider: didProvider,
    resolver: {
      ...KeyDidResolver.getResolver(),
      ...ThreeIdResolver.getResolver(ceramic),
    },
  });
  await did.authenticate();

  return did;
};
