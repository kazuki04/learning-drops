import React from "react";
import TextField from '@mui/material/TextField';

interface TextFieldInputProps {
  text: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

const TextFieldInput = (prop: TextFieldInputProps) => {
  return (
    <TextField id="filled-basic" label={prop.text} onChange={prop.onChange} variant="filled" />
  )
}

export default TextFieldInput;
