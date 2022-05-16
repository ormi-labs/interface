import { Trans } from '@lingui/macro';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import * as React from 'react';
import { HealthFactorNumber } from 'src/components/HealthFactorNumber';
import { FormattedNumber } from 'src/components/primitives/FormattedNumber';
import { ProfilePicAvator } from 'src/components/social/profile/ProfilePicAvator';
import { TopInfoPanel } from 'src/components/TopInfoPanel/TopInfoPanel';
import { TopInfoPanelItem } from 'src/components/TopInfoPanel/TopInfoPanelItem';

import CreditIcon from '../../../public/icons/creditScore/credit-icon.svg';
import EmptyHeartIcon from '../../../public/icons/markets/empty-heart-icon.svg';
import { CreditScoreNumber } from '../../components/CreditScoreNumber';
import HALTooltip from '../../components/HALTooltip';
import { useAppDataContext } from '../../hooks/app-data-provider/useAppDataProvider';
import { ProfileFollowBar } from './ProfileFollowBar';
import { ProfileInteractionBar } from './ProfileInteractionBar';
import { ProfileSummaryCard } from './ProfileSummaryCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

export const ProfileTopPanel = () => {
  const theme = useTheme();
  const downToSM = useMediaQuery(theme.breakpoints.down('sm'));

  const valueTypographyVariant = downToSM ? 'main16' : 'main21';

  const { user, loading } = useAppDataContext();

  return (
    <>
      <TopInfoPanel>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: { xs: 10 },
          }}
        >
          <ProfilePicAvator />
          <ProfileSummaryCard />
          <Box
            sx={{ display: 'flex', alignItems: 'center', gap: { xs: 3, xsm: 8 }, flexWrap: 'wrap' }}
          >
            <TopInfoPanelItem
              icon={<CreditIcon />}
              title={
                <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
                  <Trans>Credit Score</Trans>
                </Box>
              }
              loading={loading}
            >
              {/*TODO(vicfei): user.creditScore needs to be plumbed through. Currently, value is hard coded. */}
              <CreditScoreNumber
                value={/* user?.creditScore || '0' */ '2'}
                variant={valueTypographyVariant}
              />
            </TopInfoPanelItem>

            <TopInfoPanelItem
              icon={<EmptyHeartIcon />}
              title={
                <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
                  <Trans>Health factor</Trans>
                  <HALTooltip />
                </Box>
              }
              loading={loading}
            >
              <HealthFactorNumber
                value={user?.healthFactor || '-1'}
                variant={valueTypographyVariant}
              />
            </TopInfoPanelItem>

            <TopInfoPanelItem
              icon={<AccountBalanceIcon color="green" />}
              title={
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    width: '8rem',
                    flexWrap: 'wrap',
                  }}
                >
                  <Trans>Max Collateralized Borrowing Limit</Trans>
                </Box>
              }
              loading={loading}
            >
              <FormattedNumber
                value={40000}
                symbol="USD"
                variant={valueTypographyVariant}
                visibleDecimals={2}
                compact
                symbolsColor="#A5A8B6"
              />
            </TopInfoPanelItem>

            <TopInfoPanelItem
              icon={<AccountBalanceIcon />}
              title={
                <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
                  <Trans>Max Credit Limit</Trans>
                </Box>
              }
              loading={loading}
            >
              <FormattedNumber
                value={10000}
                symbol="USD"
                variant={valueTypographyVariant}
                visibleDecimals={2}
                compact
                symbolsColor="#A5A8B6"
              />
            </TopInfoPanelItem>

            <TopInfoPanelItem
              icon={<AccountBalanceIcon />}
              title={
                <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
                  <Trans>Total Borrowing Limit</Trans>
                </Box>
              }
              loading={loading}
            >
              <FormattedNumber
                value={50000}
                symbol="USD"
                variant={valueTypographyVariant}
                visibleDecimals={2}
                compact
                symbolsColor="#A5A8B6"
              />
            </TopInfoPanelItem>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <ProfileFollowBar />
          <ProfileInteractionBar />
        </Box>
      </TopInfoPanel>
    </>
  );
};
