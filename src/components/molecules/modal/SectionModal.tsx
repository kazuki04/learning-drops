import React, { useState } from 'react';
import { Box, Modal, Stack, Typography } from '@mui/material';
import TextFieldInput from '../../atoms/inputs/TextFieldInput';
import CreateButton from '../../atoms/buttons/CreateButton';
import { postRequest } from '../../../api/api_base'
import { useAuth0 } from "@auth0/auth0-react";
import { Request } from "../../../api/api_base"
import auth_config from "../../../../auth_config.json"

interface SectionModalProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface Section {
  title: string
  user_id: string
}

const SectionModal = (prop: SectionModalProps) => {
  const handleClose = () => prop.setOpen(false);
  const [section_title, setSectionTitle]:[string, React.Dispatch<React.SetStateAction<string>>] = useState("")
  const { user, getAccessTokenSilently } = useAuth0();
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSectionTitle(e.target.value)
  }

  const getAccessToken = () => {
    try{
      const accessToken = getAccessTokenSilently({
        audience: auth_config.audience,
      });
      return accessToken;
    } catch(e) {
      console.log(e.message);
    }
  }

  const postSection = () => {
    if (user != undefined && user.sub != undefined) {
      let accessToken = getAccessToken()
      let payload: Section = {title: section_title, user_id: user.sub}
      let request: Request = {request_url: "/section",  payload: payload, accessToken: accessToken}
      postRequest(request)
    }
  }

  return (
    <Modal
      open={prop.open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Stack spacing={3} direction="row">
          <TextFieldInput text={"section title"} onChange={handleChange}/>
          <CreateButton 
            doRequest={postSection}
          />
        </Stack>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Enter the Section Title.
        </Typography>
      </Box>
    </Modal>
  );
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default SectionModal;
