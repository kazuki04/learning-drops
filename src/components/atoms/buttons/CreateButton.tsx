import React from "react";
import Button from '@mui/material/Button';

interface CreateButtonProps {
  doRequest?: () => void
  button_word?: string
}

const CreateButton = (prop: CreateButtonProps) => {
  return (
    <Button onClick={prop.doRequest}>Create {prop.button_word}</Button>
  )
};

export default CreateButton;
