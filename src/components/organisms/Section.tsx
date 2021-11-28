import React from "react";
import { Box } from "@mui/material";
import SectionHeader from "../molecules/header/SectionHeader";
import SectionUtils from "../molecules/SectionUtils";

const Section = () => {
  return (
    <Box sx={{ height: '100vh', width: 1 }}>
      <SectionHeader />
      <SectionUtils />
    </Box>
  )
}

export default Section;
