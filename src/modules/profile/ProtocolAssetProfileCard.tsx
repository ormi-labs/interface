import { Card, CardHeader, CardContent, Typography, Box, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ReactNode } from 'react';

interface ProtocolAssetProfileProps {
  icon?: ReactNode;
  title: ReactNode;
  value: string;
}

export const ProtocolAssetProfileCard: React.FC<ProtocolAssetProfileProps> = ({
  icon,
  title,
  value,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: { xs: 'calc(50% - 12px)', xsm: 'unset' },
      }}
    >
      <Card>
        <CardHeader
          avatar={icon}
          title={title}
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
        />
        <CardContent>
          <Typography variant="h3">{value}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
