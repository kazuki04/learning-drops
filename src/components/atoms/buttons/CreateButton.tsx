import React from "react";
import Button from '@mui/material/Button';

interface CreateButtonProps {
  doRequest?: () => void
}

const CreateButton = (prop: CreateButtonProps) => {
  return (
    <Button onClick={prop.doRequest}>Create</Button>
  )
};

export default CreateButton;
