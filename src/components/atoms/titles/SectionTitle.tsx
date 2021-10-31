import React from "react";
import Typography from '@mui/material/Typography';

interface SectionTitleProps {
  section_title: string
}

const SectionTitle = (prop: SectionTitleProps) => {
  return (
    <Typography variant="h5" component="h6">
      {prop.section_title}
    </Typography>
  )
}

export default SectionTitle;
