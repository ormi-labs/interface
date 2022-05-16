import { Trans } from '@lingui/macro';
import { Box, Button, Typography } from '@mui/material';

import { IncentivesCard } from '../../../components/incentives/IncentivesCard';
import { ListColumn } from '../../../components/lists/ListColumn';
import { ListItem } from '../../../components/lists/ListItem';
import { FormattedNumber } from '../../../components/primitives/FormattedNumber';
import { TokenIcon } from '../../../components/primitives/TokenIcon';

export type StakedAssetInfoData = {
  symbol: string;
  name: string;
  balance: number;
  unlockTime: string;
  usdValue: number;
};

export const StakedAssetsListItem = ({ ...stakedAsset }: StakedAssetInfoData) => {
  return (
    <ListItem px={6} minHeight={76} sx={{ cursor: 'pointer' }} button>
      <ListColumn isRow maxWidth={280}>
        <TokenIcon symbol={stakedAsset.symbol} fontSize="large" />
        <Box sx={{ pl: 3.5, overflow: 'hidden' }}>
          <Typography variant="h4" noWrap>
            {stakedAsset.name}
          </Typography>
          <Typography variant="subheader2" color="text.muted" noWrap>
            {stakedAsset.symbol}
          </Typography>
        </Box>
      </ListColumn>

      <ListColumn>
        <FormattedNumber
          compact
          value={stakedAsset.balance}
          variant="main16"
          symbolsVariant="secondary16"
          symbol="USD"
        />
      </ListColumn>

      <ListColumn>
        <IncentivesCard
          value={stakedAsset.unlockTime}
          symbol={stakedAsset.symbol}
          variant="main16"
          symbolsVariant="secondary16"
        />
      </ListColumn>

      <ListColumn>
        <FormattedNumber
          compact
          value={stakedAsset.usdValue}
          variant="main16"
          symbolsVariant="secondary16"
          symbol="USD"
        />
      </ListColumn>

      <ListColumn maxWidth={95} minWidth={95} align="right">
        <Button variant="outlined">
          <Trans>Details</Trans>
        </Button>
      </ListColumn>
    </ListItem>
  );
};
