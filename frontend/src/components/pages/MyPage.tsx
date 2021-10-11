import React from "react";
import Box from '@mui/material/Box';

import Header from "../layouts/Header";
import SideBar from "../layouts/Sidebar";



const Mypage = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <SideBar />
    </Box>
    )
} 


export default Mypage;
