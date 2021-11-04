import React, {useState} from 'react';
import {Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Hidden} from '@mui/material';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import AddButton from  '../atoms/icons/AddButton'
import HomeIcon from '../atoms/icons/HomeIcon';
import SectionModal from "../molecules/modal/SectionModal"

const drawerWidth = 300;

let section = ["test1", "test2"]

const SideBar = () => {
  const [open, setOpen]:[boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);

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
  )

  return (
    // hidden drawer if the display for mobile
    <Hidden smDown implementation="css">
      {drawer}
    </Hidden>
  );
}

export default SideBar;
