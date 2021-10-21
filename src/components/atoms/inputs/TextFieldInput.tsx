import React from "react";
import TextField from '@mui/material/TextField';

interface TextFieldInputProps {
  text: string
}

const TextFieldInput = (prop: TextFieldInputProps) => {
  return (
    <TextField id="filled-basic" label={prop.text} variant="filled" />
  )
}

export default TextFieldInput;
