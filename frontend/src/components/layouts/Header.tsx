import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import SearchInput from "./SearchInput"

const Header = () => {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <CssBaseline />
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ p: 2 }}>
            Learning Drops
          </Typography>
        </Toolbar>
      </AppBar>
  )
}

export default Header;
