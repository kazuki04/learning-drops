import React from "react";
import Button from '@mui/material/Button';

interface CreateButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const CreateButton = (prop: CreateButtonProps) => {
  return (
    <Button onClick={prop.onClick}>Create</Button>
  )
};

export default CreateButton;
