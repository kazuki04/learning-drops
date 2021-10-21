import React from "react";
import TextField from '@mui/material/TextField';

interface TextFieldInputProps {
  text: string
}

const TextFieldInput = (prop: TextFieldInputProps) => {
  return (
    <TextField id="standard-basic" label={prop.text} variant="standard" />
  )
}

export default TextFieldInput;
