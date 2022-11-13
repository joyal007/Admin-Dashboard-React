import React from 'react';
import Header from '../../components/Header';
import Box from '@mui/material/Box'
import Bar from '../../components/BarChart'
import {useTheme} from '@mui/material';
import { tokens } from '../../theme';


const BarChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  return (
    <Box m="20px">
      <Header title="Barchart" subtitle="Chart "/>
      <Box height="75vh" 
        mt="15px"
        borderRadius="10px"
        backgroundColor={colors.primary[400]}
        >
      <Bar/>
      </Box>
    </Box>
      
  )
}

export default BarChart