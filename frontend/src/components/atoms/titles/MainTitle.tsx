import React from "react";
import Typography from '@mui/material/Typography';
import { COLORS } from "../color/Theme"

const Title = () => {
  return(
    <Typography variant="h5" noWrap component="div" sx={{ p: 2, color: COLORS.primary_color }}>
      Learning Drops
    </Typography>
  )
}

export default Title;
