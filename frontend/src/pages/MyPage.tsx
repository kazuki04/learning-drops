import React from "react";
import Box from '@mui/material/Box';
import Header from "../components/layouts/Header";
import SideBar from "../components/layouts/Sidebar";

const MyPage = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <SideBar />
    </Box>
    )
} 

export default MyPage;
