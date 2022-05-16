import { valueToBigNumber } from '@aave/math-utils';
import { Trans } from '@lingui/macro';
import { useTheme } from '@mui/material';
import { useState } from 'react';

import { ListColumn } from '../../../components/lists/ListColumn';
import { ListHeaderTitle } from '../../../components/lists/ListHeaderTitle';
import { ListHeaderWrapper } from '../../../components/lists/ListHeaderWrapper';
import { ListWrapper } from '../../../components/lists/ListWrapper';
import { useAppDataContext } from '../../../hooks/app-data-provider/useAppDataProvider';
import { useProtocolDataContext } from '../../../hooks/useProtocolDataContext';
import { StakedAssetsListItem } from './StakedAssetsListItem';
import type { StakedAssetInfoData } from './StakedAssetsListItem';

// import { fetchIconSymbolAndName } from 'src/ui-config/reservePatches';

// import { StakedAssetsListItem } from '../../../components/lists/BorrowAssetsListItem';
// import { BorrowAssetsItem } from './types';
export const StakedAssetsList = () => {
  const { currentNetworkConfig } = useProtocolDataContext();
  const { user, reserves, marketReferencePriceInUsd, loading } = useAppDataContext();
  const theme = useTheme();

  const { baseAssetSymbol } = currentNetworkConfig;

  const maxBorrowAmount = valueToBigNumber(user?.totalBorrowsMarketReferenceCurrency || '0').plus(
    user?.availableBorrowsMarketReferenceCurrency || '0'
  );
  const collateralUsagePercent = maxBorrowAmount.eq(0)
    ? '0'
    : valueToBigNumber(user?.totalBorrowsMarketReferenceCurrency || '0')
        .div(maxBorrowAmount)
        .toFixed();

  const header = [
    {
      title: <Trans>Pool</Trans>,
      sortKey: 'pool',
    },
    {
      title: <Trans>Balance</Trans>,
      sortKey: 'balance',
    },
    {
      title: <Trans>Unlock Time</Trans>,
      sortKey: 'unlockTime',
    },
    {
      title: <Trans>USD Value</Trans>,
      sortKey: 'usdValue',
    },
  ];

  const stakedAssetsReserves: Array<StakedAssetInfoData> = [
    { symbol: 'cvx', name: 'Curve', balance: 10000, unlockTime: '10/08/2023', usdValue: 20000 },
    { symbol: 'cvx', name: 'Curve', balance: 20000, unlockTime: '07/01/2022', usdValue: 40000 },
    { symbol: 'cvx', name: 'Curve', balance: 30000, unlockTime: '07/01/2022', usdValue: 40000 },
    { symbol: 'cvx', name: 'Curve', balance: 40000, unlockTime: '07/01/2022', usdValue: 80000 },
    { symbol: 'cvx', name: 'Curve', balance: 50000, unlockTime: '07/01/2022', usdValue: 100000 },
    { symbol: 'cvx', name: 'Curve', balance: 60000, unlockTime: '07/01/2022', usdValue: 120000 },
  ];

  return (
    <>
      <ListWrapper title={<Trans>Protocol Stake Summary </Trans>} withTopMargin>
        <>
          <ListHeaderWrapper px={6}>
            {header.map((col) => (
              <ListColumn
                isRow={col.sortKey === 'pool'}
                maxWidth={col.sortKey === 'pool' ? 280 : undefined}
                key={col.sortKey}
              >
                <ListHeaderTitle sortKey={col.sortKey}>{col.title}</ListHeaderTitle>
              </ListColumn>
            ))}
            <ListColumn maxWidth={95} minWidth={95} />
          </ListHeaderWrapper>

          {stakedAssetsReserves.map((item, index) => (
            <StakedAssetsListItem {...item} key={index} />
          ))}
        </>
      </ListWrapper>
    </>
  );
};
