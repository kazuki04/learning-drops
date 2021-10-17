import React from "react";
import Box from '@mui/material/Box';
import Header from "../components/organisms/Header";
import SideBar from "../components/organisms/SideBar";

const MyPage = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <SideBar />
    </Box>
    )
} 

export default MyPage;
