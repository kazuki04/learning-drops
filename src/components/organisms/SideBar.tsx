import React from 'react';
import {useState} from "react"
import {Box, Drawer, Toolbar, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import AddButton from  '../atoms/buttons/AddButton'
import SectionModal from "../molecules/modal/SectionModal"

const drawerWidth = 240;

let section = ["test1", "test2"]

const SideBar = () => {
  const [open, setOpen]:[boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);

  return (
    <Drawer
    variant="permanent"
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
    }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          <ListItemButton onClick={handleOpen}>
            <ListItemIcon>
              <AddButton/>
            </ListItemIcon>
            <ListItemText primary="add section" />
          </ListItemButton>
          <SectionModal open={open} setOpen={setOpen} />
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <FolderOpenIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default SideBar;
