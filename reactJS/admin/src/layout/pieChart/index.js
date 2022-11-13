import React from 'react';
import Header from '../../components/Header';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';
import { tokens } from '../../theme';
import Pie from '../../components/PieChart';

const PieChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="PieChart" subtitle="chart"/>
      <Box mt="15px" height="70vh" backgroundColor={colors.primary[400]} borderRadius="10px">
        <Pie/>
    </Box>
    </Box>
  )
}

export default PieChart