import { ThreeIdConnect, EthereumAuthProvider } from '@3id/connect';
import ThreeIdResolver from '@ceramicnetwork/3id-did-resolver';
import { IDX } from '@ceramicstudio/idx';
import type { CeramicApi } from '@ceramicnetwork/common';
import { DIDProvider, DID } from 'dids';
import KeyDidResolver from 'key-did-resolver';
import { AbstractConnector } from '@web3-react/abstract-connector';

export interface DidConnectType {
  threeId: ThreeIdConnect;
  ceramic: CeramicApi;
  idx?: IDX;
}

export async function getDidProvider(
  threeId: ThreeIdConnect,
  connector: AbstractConnector
): Promise<DIDProvider | undefined> {
  const ethProvider = await connector.getProvider();
  const address = await connector.getAccount();

  if (ethProvider && address) await threeId.connect(new EthereumAuthProvider(ethProvider, address));

  return threeId.getDidProvider();
}

export async function authenticateUserDid(
  didProvider: DIDProvider,
  ceramic: CeramicApi
): Promise<DID | undefined> {
  if (typeof window === 'undefined') return;

  const did = new DID({
    provider: didProvider,
    resolver: {
      ...KeyDidResolver.getResolver(),
      ...ThreeIdResolver.getResolver(ceramic),
    },
  });
  await did.authenticate();

  return did;
}
