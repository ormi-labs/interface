import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Box,
  Avatar,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { TopInfoPanelItem } from '../../components/TopInfoPanel/TopInfoPanelItem';
import { FormattedNumber } from '../../components/primitives/FormattedNumber';

import { Trans } from '@lingui/macro';

export const LoanHistorySummaryCard = () => {
  return (
    <>
      <Card>
        <CardContent>
          <Typography gutterBottom>
            <Trans>Loan History Summary</Trans>
          </Typography>

          <Card>
            <CardHeader
              avatar={<Avatar sx={{ height: 30, width: 30 }} src="/icons/tokens/dai.svg" />}
              title={
                <Typography component="span" variant="description">
                  Loan amount: 50k, Credit: 8k, Duration: 5 days | Borrowed
                </Typography>
              }
            />
          </Card>
          <Card>
            <CardHeader
              avatar={<Avatar sx={{ height: 30, width: 30 }} src="/icons/tokens/dai.svg" />}
              title={
                <Typography component="span" variant="description">
                  Loan amount: 2k, Credit: 0, Duration 10 days | Borrowed
                </Typography>
              }
            />
          </Card>
          <Card>
            <CardHeader
              avatar={<Avatar sx={{ height: 30, width: 30 }} src="/icons/tokens/gusd.svg" />}
              title={
                <Typography component="span" variant="description">
                  Loan amount: 10k, Credit: 2k, Duration 6 days | Borrowed
                </Typography>
              }
            />
          </Card>
          <Card>
            <CardHeader
              avatar={<Avatar sx={{ height: 30, width: 30 }} src="/icons/tokens/fei.svg" />}
              title={
                <Typography component="span" variant="description">
                  Loan amount: 5k, Credit: 700, Interest: 100, APY: 4.3% | Repaid
                </Typography>
              }
            />
          </Card>
          <Card>
            <CardHeader
              avatar={<Avatar sx={{ height: 30, width: 30 }} src="/icons/tokens/frax.svg" />}
              title={
                <Typography component="span" variant="description" color="orange">
                  Loan amount: 50k, Credit: 8k, Outstanding: 2 days | Redeemed
                </Typography>
              }
            />
          </Card>
          <Card>
            <CardHeader
              avatar={<Avatar sx={{ height: 30, width: 30 }} src="/icons/tokens/frax.svg" />}
              title={
                <Typography component="span" variant="description" color="#eb5b34">
                  Loan amount: 10k, Credit: 1k, Duration: 20 days | Past Due
                </Typography>
              }
            />
          </Card>
          <Card>
            <CardHeader
              avatar={<Avatar sx={{ height: 30, width: 30 }} src="/icons/tokens/rai.svg" />}
              title={
                <Typography component="span" variant="description">
                  Loan amount: 1k, Credit: 500, Duration 3 days | Borrowed
                </Typography>
              }
            />
          </Card>
          <Card>
            <CardHeader
              avatar={<Avatar sx={{ height: 30, width: 30 }} src="/icons/tokens/frax.svg" />}
              title={
                <Typography component="span" variant="description">
                  Loan amount: 7k, Credit: 2k, Duration 2 days | Borrowed
                </Typography>
              }
            />
          </Card>
          <Card>
            <CardHeader
              avatar={<Avatar sx={{ height: 30, width: 30 }} src="/icons/tokens/usdc.svg" />}
              title={
                <Typography component="span" variant="description">
                  Loan amount: 8k, Credit: 1k, Duration 1 day | Borrowed
                </Typography>
              }
            />
          </Card>
          <Card>
            <CardHeader
              avatar={<Avatar sx={{ height: 30, width: 30 }} src="/icons/tokens/usdc.svg" />}
              title={
                <Typography component="span" variant="description">
                  Loan amount: 100, Credit: 10, Duration 1 day | Borrowed
                </Typography>
              }
            />
          </Card>
        </CardContent>
      </Card>
    </>
  );
};
