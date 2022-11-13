import React from 'react'
import Header from '../../components/Header';
import Geo from '../../components/GeographyChart'
import Box from '@mui/material/Box';
import {useTheme} from '@mui/material';
import { tokens } from '../../theme';


function Geography() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title ="Geography Chart" subtitle="chart" />
      <Box mt="15px"  borderRadius="10px" height="75vh" backgroundColor={colors.primary[400]}>
        <Geo/>
      </Box>
    </Box>
  )
}

export default Geography