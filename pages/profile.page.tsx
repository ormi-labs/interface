import Box from '@mui/material/Box';
import { MainLayout } from 'src/layouts/MainLayout';
import AssetsList from 'src/modules/markets/AssetsList';
import { ProfileTopPanel } from 'src/modules/profile/ProfileTopPanel';
import { AssetsSummaryCard } from 'src/modules/profile/AssetsSummaryCard';
import { ProfilePicAvator } from 'src/components/social/profile/ProfilePicAvator';

import { ContentContainer } from '../src/components/ContentContainer';

export default function Profile() {
  return (
    <>
      {<ProfileTopPanel />}
      <ContentContainer>
        <AssetsSummaryCard />
        <AssetsSummaryCard />
        <AssetsSummaryCard />
        {/* <AssetsList /> */}
      </ContentContainer>
    </>
  );
}

Profile.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
