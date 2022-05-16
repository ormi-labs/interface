import { MainLayout } from 'src/layouts/MainLayout';
import { AssetsSummaryCard } from 'src/modules/profile/AssetsSummaryCard';
import { ProfileTopPanel } from 'src/modules/profile/ProfileTopPanel';
import { LoanHistorySummaryCard } from 'src/modules/profile/LoanHistorySummaryCard';
import { StakedAssetsList } from 'src/modules/profile/lists/StakedAssetsList';
import { Grid } from '@mui/material';

import { ContentContainer } from '../src/components/ContentContainer';

export default function Profile() {
  return (
    <>
      {<ProfileTopPanel />}
      <ContentContainer>
        <Grid container alignItems="flex-begin" justifyContent="space-between" spacing={5}>
          <Grid item xs={12} sm={6}>
            <AssetsSummaryCard />
          </Grid>
          <Grid item xs={12} sm={6}>
            <LoanHistorySummaryCard />
          </Grid>
          <Grid item xs={12} sm={6}>
            <StakedAssetsList />
          </Grid>
        </Grid>
      </ContentContainer>
    </>
  );
}

Profile.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
