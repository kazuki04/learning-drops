import React from "react";
import { Box, Divider, Hidden, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SectionTitle from "../../atoms/titles/SectionTitle";
import { useAuth0 } from "@auth0/auth0-react";

const SectionHeader = () => {
  const { getAccessTokenSilently } = useAuth0();
  let accessToken = getAccessTokenSilently()

  return (
    <Box sx={{ width: 1 }}>
      <Toolbar variant="dense">
        <SectionTitle section_title="test" />
        <Hidden
          smUp implementation="css"
        >
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Divider />
    </Box>
  )
}

export default SectionHeader;
