import { MailOutlined } from '@mui/icons-material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ContentCopy from '@mui/icons-material/ContentCopy';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Button, IconButton, Typography } from '@mui/material';
import * as React from 'react';
import { useWeb3Context } from 'src/libs/hooks/useWeb3Context';

import { textCenterEllipsis } from '../../helpers/text-center-ellipsis';

export const ProfileSummaryCard = () => {
  const { currentAccount, currentDid } = useWeb3Context();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', gap: { xsm: 5 } }}>
        <Typography variant="h1">vfei.eth</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline' }}>
        <Typography variant="h4">{textCenterEllipsis(currentAccount, 8, 8)}</Typography>
        <IconButton>
          <ContentCopy fontSize="small" />
        </IconButton>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline' }}>
        <Typography variant="h4">{textCenterEllipsis(currentDid, 12, 8)}</Typography>
        <IconButton>
          <ContentCopy fontSize="small" />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: { xs: 3 },
          /* TODO: We want to limit the width to the DID string above. */
          width: 400,
        }}
      >
        <Button sx={{ backgroundColor: 'orange' }}>
          <EmojiEventsIcon fontSize="small" /> <Typography variant="h4">2</Typography>
        </Button>

        <Button variant="contained">
          <CalendarMonthIcon fontSize="small" />
          <Typography>1102 days</Typography>
        </Button>

        <Button variant="contained">
          <TwitterIcon fontSize="small" htmlColor="#1DA1F2" />
          0xfeiprotocol
        </Button>
        <Button variant="contained">
          <GitHubIcon fontSize="small" />
          victorfei
        </Button>
        <Button variant="contained">
          <MailOutlined fontSize="small" />
          Email Verified
        </Button>
      </Box>
    </Box>
  );
};
