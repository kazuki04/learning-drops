import React from "react";
import Box from '@mui/material/Box';
import SideBar from "../components/organisms/SideBar";
import Section from "../components/organisms/Section";

const Home = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <SideBar />
      <Section />
    </Box>
    )
}

export default Home;
