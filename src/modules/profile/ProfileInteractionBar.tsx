import { Box, Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import * as React from 'react';

export const ProfileInteractionBar = () => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xsm: 3 } }}>
      <Button variant="contained" sx={{ borderRadius: 10 }}>
        <MoreHorizIcon fontSize="small" />
      </Button>

      <Button variant="contained" sx={{ borderRadius: 10 }}>
        <EmailOutlinedIcon fontSize="small" />
      </Button>

      <Button variant="contained" sx={{ color: 'orange' }}>
        <AddIcon fontSize="small" />
        <Typography>Follow</Typography>
      </Button>
    </Box>
  );
};
