import WalletConnectProvider from '@walletconnect/web3-provider';
import { ThreeIdConnect, EthereumAuthProvider } from '@3id/connect';
import ThreeIdResolver from '@ceramicnetwork/3id-did-resolver';
import Authereum from 'authereum';
import { IDX } from '@ceramicstudio/idx';
import type { CeramicApi } from '@ceramicnetwork/common';
import { DIDProvider, DID } from 'dids';
import { createCeramic } from './useCeramic';
import Fortmatic from 'fortmatic';
import Web3Modal from 'web3modal';
import KeyDidResolver from 'key-did-resolver';
import { AbstractConnector } from '@web3-react/abstract-connector';

declare global {
  interface Window {
    did?: DID;
    idx?: IDX;
    threeId?: ThreeIdConnect;
    ceramic?: CeramicApi;
    web3Modal?: Web3Modal;
  }
}

export async function getProvider(): Promise<DIDProvider | undefined> {
  if (typeof window === 'undefined') return;
  if (!window.threeId) window.threeId = new ThreeIdConnect();

  if (!window.web3Modal) {
    window.web3Modal = new Web3Modal({
      network: 'mainnet',
      cacheProvider: true,
      providerOptions: {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            infuraId: 'e87f83fb85bf4aa09bdf6605ebe144b7',
          },
        },
        fortmatic: {
          package: Fortmatic,
          options: {
            key: 'pk_live_EC842EEAC7F08995',
          },
        },
        authereum: {
          package: Authereum,
          options: {},
        },
      },
    });
  }

  console.log('%c before ethProvider', 'background: red');
  const ethProvider = await window.web3Modal.connect();
  const addresses = await ethProvider.enable();
  await window.threeId.connect(new EthereumAuthProvider(ethProvider, addresses[0]));
  console.log('%c finish waiting return', 'background: red');
  return window.threeId.getDidProvider();
}

export async function getProviderCustom(
  connector: AbstractConnector
): Promise<DIDProvider | undefined> {
  if (typeof window === 'undefined' || typeof connector === 'undefined') return;
  if (!window.threeId) window.threeId = new ThreeIdConnect();
  console.log('%c before ethProvider', 'background: red');
  const ethProvider = await connector.getProvider();
  const address = await connector.getAccount();

  if (ethProvider && address)
    await window.threeId.connect(new EthereumAuthProvider(ethProvider, address));

  console.log('%c finish waiting return', 'background: red');
  return window.threeId.getDidProvider();
}

export async function authenticateUser(): Promise<IDX | undefined> {
  if (typeof window === 'undefined') return;
  const [ceramic, provider] = await Promise.all([createCeramic(), getProvider()]);
  const did = new DID({
    provider,
    resolver: {
      ...KeyDidResolver.getResolver(),
      ...ThreeIdResolver.getResolver(ceramic),
    },
  });
  await did.authenticate();
  window.did = did;
  ceramic.did = did;
  window.ceramic = ceramic;
  return new IDX({ autopin: true, ceramic });
}

export async function authenticateUser2(connector: AbstractConnector): Promise<IDX | undefined> {
  if (typeof window === 'undefined') return;
  const [ceramic, provider] = await Promise.all([createCeramic(), getProviderCustom(connector)]);
  const did = new DID({
    provider,
    resolver: {
      ...KeyDidResolver.getResolver(),
      ...ThreeIdResolver.getResolver(ceramic),
    },
  });
  await did.authenticate();
  window.did = did;
  ceramic.did = did;
  window.ceramic = ceramic;
  return new IDX({ autopin: true, ceramic });
}
