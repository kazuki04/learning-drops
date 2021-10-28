import React from "react";
import MainTitle from '../../atoms/titles/MainTitle';
import LoginButton from "../../atoms/buttons/auth/LoginButton";
import AccountMenu from "../AccountMenu";
import { AppBar, Toolbar, CssBaseline } from '@mui/material';
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, borderBottom: 1, borderColor: 'rgb(0 0 0 / 12%)' }} style={{backgroundColor: "white"}} elevation={0}>
      <CssBaseline />
      <Toolbar sx={{justifyContent: "space-between"}}>
        <MainTitle />
          {!isAuthenticated && <LoginButton />}
          {isAuthenticated && <AccountMenu />}
      </Toolbar>
    </AppBar>
  )
}

export default Header;
