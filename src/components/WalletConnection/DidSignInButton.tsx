import { Trans } from '@lingui/macro';
import { Button } from '@mui/material';
import { useWalletModalContext } from 'src/hooks/useWalletModal';
import { WalletModal } from './WalletModal';

export const DidSignInButton = () => {
  const { setWalletModalOpen } = useWalletModalContext();

  return (
    <>
      <Button variant="gradient" onClick={() => setWalletModalOpen(true)}>
        <Trans>Sign In With DID</Trans>
      </Button>
      <WalletModal />
    </>
  );
};
