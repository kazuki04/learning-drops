import React, { useState, useEffect } from 'react';
import { getRequest } from '../../api/api_base'
import { Request } from "../../api/types"
import { SectionState } from '../../types/section/types';
import { useAuth0 } from "@auth0/auth0-react";
import auth_config from "../../../auth_config.json"
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Hidden } from '@mui/material';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import AddButton from '../atoms/icons/AddButton'
import HomeIcon from '../atoms/icons/HomeIcon';
import SectionModal from "../molecules/modal/SectionModal"

const drawerWidth = 300;

const SideBar = () => {
  const [open, setOpen]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const [sections, setSections]: [SectionState[], React.Dispatch<React.SetStateAction<any>>] = useState<SectionState[]>([])
  const { user, getAccessTokenSilently } = useAuth0();

  const getAccessToken = () => {
    try {
      const accessToken = getAccessTokenSilently({
        audience: auth_config.audience,
      });
      return accessToken;
    } catch (e) {
      console.log(e.message);
    }
  }

  const getSections = () => {
    if (user != undefined && user.sub != undefined) {
      let accessToken = getAccessToken()
      let request: Request = { request_url: "/sections", accessToken: accessToken, params: { user_id: user.sub } }
      let response = getRequest(request)
      response.then((response) => {
        if (response != undefined) {
          setSections(response.data)
        }
      }).catch((e) => {
        console.log(e.message)
      })
    }
  }

  useEffect(() => {
    getSections()
    return () => {
      setSections([])
    }
  }, [])

  const drawer = (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Box sx={{ overflow: 'auto' }}>
        <List>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"test"} />
          </ListItemButton>
          <ListItemButton onClick={handleOpen}>
            <ListItemIcon>
              <AddButton />
            </ListItemIcon>
            <ListItemText primary="add section" />
          </ListItemButton>
          <SectionModal open={open} setOpen={setOpen} sections={sections} setSections={setSections} />
          {sections.map((section) => (
            <ListItem button key={section.title}>
              < ListItemIcon >
                <FolderOpenIcon />
              </ListItemIcon>
              <ListItemText primary={section.title} />
              <ListItemText />
            </ListItem>
          ))}
        </List>
      </Box >
    </Drawer >
  )

  return (
    // hidden drawer if the display for mobile
    <Hidden smDown implementation="css">
      {drawer}
    </Hidden>
  );
}

export default SideBar;
