import React from "react";
import Avatar from '@mui/material/Avatar';
import { useAuth0 } from "@auth0/auth0-react";

const AvatarIcon = () => {
  const { user } = useAuth0();
  const email_initial_letter = user?.email?.charAt(0)

  return (
      <Avatar>{email_initial_letter}</Avatar>
  )
}

export default AvatarIcon;
