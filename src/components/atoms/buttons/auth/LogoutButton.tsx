import React from "react";
import Button from '@mui/material/Button';
import { useAuth0 } from "@auth0/auth0-react";

const  LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button onClick={() => logout() } variant="outlined">Logout</Button> 
  )
}

export default LogoutButton;
