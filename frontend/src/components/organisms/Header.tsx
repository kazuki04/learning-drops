import React from "react";
import MainTitle from '../atoms/titles/MainTitle'
import LoginButton from "../atoms/buttons/auth/LoginButton"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';

const Header = () => {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, borderBottom: 1, borderColor: 'rgb(0 0 0 / 12%)' }} style={{backgroundColor: "white"}} elevation={0}>
      <CssBaseline />
      <Toolbar>
        <MainTitle />
        <LoginButton />
      </Toolbar>
    </AppBar>
  )
}

export default Header;
