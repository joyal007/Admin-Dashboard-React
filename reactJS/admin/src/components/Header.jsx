import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import React from "react";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Typography color={colors.grey[100]} fontWeight="bold" variant="h2">
        {title}
      </Typography>
      <Typography color={colors.greenAccent[500]} variant="h5">
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
