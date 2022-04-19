import { Trans } from '@lingui/macro';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import * as React from 'react';
import { ProfilePicAvator } from 'src/components/social/profile/ProfilePicAvator';

import CreditIcon from '../../../public/icons/creditScore/credit-icon.svg';
import EmptyHeartIcon from '../../../public/icons/markets/empty-heart-icon.svg';
import { CreditScoreNumber } from '../../components/CreditScoreNumber';
import HALTooltip from '../../components/HALTooltip';
import { HealthFactorNumber } from '../../components/HealthFactorNumber';
import { TopInfoPanel } from '../../components/TopInfoPanel/TopInfoPanel';
import { TopInfoPanelItem } from '../../components/TopInfoPanel/TopInfoPanelItem';
import { useAppDataContext } from '../../hooks/app-data-provider/useAppDataProvider';
import { ProfileSummaryCard } from './ProfileSummaryCard';
import { ProfileFollowBar } from './ProfileFollowBar';
import { ProfileInteractionBar } from './ProfileInteractionBar';

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
