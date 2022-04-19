import { Box, Button, Typography } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import * as React from 'react';

export const ProfileFollowBar = () => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xsm: 3 } }}>
      <Button>
        <Typography color="white">
          Following
          <Box component="span" sx={{ marginLeft: '.5rem', fontWeight: 'bold' }}>
            12K
          </Box>
        </Typography>
      </Button>
      <Button>
        <Typography color="white">
          Followers
          <Box component="span" sx={{ marginLeft: '.5rem', fontWeight: 'bold' }}>
            135
          </Box>
        </Typography>
      </Button>
      <Button>
        <Typography color="white">
          TVF
          <Box component="span" sx={{ marginLeft: '.5rem', fontWeight: 'bold' }}>
            $250,145,566
          </Box>
          <Button>
            <HelpIcon fontSize="small" />
          </Button>
        </Typography>
      </Button>
    </Box>
  );
};
