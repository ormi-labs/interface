import { valueToBigNumber } from '@aave/math-utils';
import { Trans } from '@lingui/macro';
import { Typography, Box, Button, useTheme } from '@mui/material';
import { TypographyProps } from '@mui/material/Typography';
import BigNumber from 'bignumber.js';

import { FormattedNumber } from './primitives/FormattedNumber';

interface CreditScoreNumberProps extends TypographyProps {
  value: string;
  onInfoClick?: () => void;
}

export const CreditScoreNumber = ({ value, onInfoClick, ...rest }: CreditScoreNumberProps) => {
  const { palette } = useTheme();

  const formattedCreditScore = Number(valueToBigNumber(value).toFixed(2, BigNumber.ROUND_DOWN));
  let CreditScoreColor = '';
  if (formattedCreditScore >= 3) {
    CreditScoreColor = palette.success.main;
  } else if (formattedCreditScore < 1.1) {
    CreditScoreColor = palette.error.main;
  } else {
    CreditScoreColor = palette.warning.main;
  }

  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: { xs: 'flex-start', xsm: 'center' },
        flexDirection: { xs: 'column', xsm: 'row' },
      }}
    >
      {value === '-1' ? (
        <Typography variant="secondary14" color={palette.success.main}>
          ∞
        </Typography>
      ) : (
        <FormattedNumber
          value={formattedCreditScore}
          sx={{ color: CreditScoreColor, ...rest.sx }}
          visibleDecimals={2}
          compact
          {...rest}
        />
      )}

      {onInfoClick && (
        <Button
          onClick={onInfoClick}
          variant="surface"
          size="small"
          sx={{ minWidth: 'unset', ml: { xs: 0, xsm: 2 } }}
        >
          <Trans>Score details</Trans>
        </Button>
      )}
    </Box>
  );
};
