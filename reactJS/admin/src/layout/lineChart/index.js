import React from 'react';
import Header from '../../components/Header';
import Line from '../../components/LineChart';
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material';
import { tokens } from '../../theme';

const LineChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="LineChart" subtitle="chart"/>
      <Box mt='15px' borderRadius="10px" height="70vh" backgroundColor={colors.primary[400]}>
        <Line isDashboard={false}/>
      </Box>
    </Box>
  )
}

export default LineChart