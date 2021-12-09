import React from "react";
import Box from '@mui/material/Box';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

function MakeHomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const HomeIcon = () => {
  return (
    <MakeHomeIcon />
  )
}


export default HomeIcon;
