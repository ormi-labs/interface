import { Card, CardContent, Typography, Box, Avatar, useMediaQuery, useTheme } from '@mui/material';
import { TopInfoPanelItem } from '../../components/TopInfoPanel/TopInfoPanelItem';
import { FormattedNumber } from '../../components/primitives/FormattedNumber';

import { ProtocolAssetProfileCard } from 'src/modules/profile/ProtocolAssetProfileCard';

import { Trans } from '@lingui/macro';

export const AssetsSummaryCard = () => {
  const theme = useTheme();
  const downToSM = useMediaQuery(theme.breakpoints.down('sm'));
  const valueTypographyVariant = downToSM ? 'main16' : 'main21';
  const symbolsVariant = downToSM ? 'secondary16' : 'secondary21';

  return (
    <>
      <Card>
        <CardContent>
          <Typography gutterBottom>
            <Trans>Total Assets Summary</Trans>
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItmes: 'center',
              gap: { xs: 3, xsm: 8 },
              flexWrap: 'wrap',
              width: '100%',
            }}
          >
            <TopInfoPanelItem
              icon={<Avatar src="/icons/networks/ethereum.svg" />}
              title={<Trans>on Ethereum</Trans>}
            >
              <FormattedNumber
                value={20000}
                symbol="USD"
                variant={valueTypographyVariant}
                visibleDecimals={2}
                compact
                symbolsColor="#A5A8B6"
                symbolsVariant={symbolsVariant}
              />
            </TopInfoPanelItem>
            <TopInfoPanelItem
              icon={<Avatar src="/icons/networks/polygon.svg" />}
              title={<Trans>on Polygon</Trans>}
            >
              <FormattedNumber
                value={30000}
                symbol="USD"
                variant={valueTypographyVariant}
                visibleDecimals={2}
                compact
                symbolsColor="#A5A8B6"
                symbolsVariant={symbolsVariant}
              />
            </TopInfoPanelItem>
            <TopInfoPanelItem
              icon={<Avatar src="/icons/networks/avalanche.svg" />}
              title={<Trans>on Avalanche</Trans>}
            >
              <FormattedNumber
                value={15000}
                symbol="USD"
                variant={valueTypographyVariant}
                visibleDecimals={2}
                compact
                symbolsColor="#A5A8B6"
                symbolsVariant={symbolsVariant}
              />
            </TopInfoPanelItem>
            <TopInfoPanelItem
              icon={<Avatar src="/icons/networks/arbitrum.svg" />}
              title={<Trans>on Arbitrum</Trans>}
            >
              <FormattedNumber
                value={5000}
                symbol="USD"
                variant={valueTypographyVariant}
                visibleDecimals={2}
                compact
                symbolsColor="#A5A8B6"
                symbolsVariant={symbolsVariant}
              />
            </TopInfoPanelItem>
            <TopInfoPanelItem
              icon={<Avatar src="/icons/networks/harmony.svg" />}
              title={<Trans>on Harmony</Trans>}
            >
              <FormattedNumber
                value={6000}
                symbol="USD"
                variant={valueTypographyVariant}
                visibleDecimals={2}
                compact
                symbolsColor="#A5A8B6"
                symbolsVariant={symbolsVariant}
              />
            </TopInfoPanelItem>

            <Box sx={{ width: '100%' }} />
            <ProtocolAssetProfileCard
              icon={<Avatar src="/icons/profile/wallet.svg" />}
              title={<Trans>Wallet</Trans>}
              value="$15K"
            />
            <ProtocolAssetProfileCard
              icon={<Avatar src="/icons/profile/frax.png" />}
              title={<Trans>Frax</Trans>}
              value="$25K"
            />
            <ProtocolAssetProfileCard
              icon={<Avatar src="/icons/profile/fei.png" />}
              title={<Trans>Fei</Trans>}
              value="$15K"
            />
            <ProtocolAssetProfileCard
              icon={<Avatar src="/icons/profile/curve.png" />}
              title={<Trans>Curve</Trans>}
              value="$11K"
            />
            <ProtocolAssetProfileCard
              icon={<Avatar src="/icons/profile/convex.png" />}
              title={<Trans>Convex</Trans>}
              value="$5K"
            />
            <ProtocolAssetProfileCard
              icon={<Avatar src="/icons/profile/bancor.png" />}
              title={<Trans>Bancor</Trans>}
              value="$3K"
            />
          </Box>

          <Box sx={{ textAlign: 'center', margin: 10 }}>
            <Typography variant={'caption'}>
              Protocols with small deposits are not displayed (1%).
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};
