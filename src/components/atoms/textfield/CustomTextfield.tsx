import { TextField, TextFieldProps } from "@mui/material";
import React from "react";
import { useCustomTypographyStyle } from "./styles";
import { useTheme } from "@mui/material/styles";
import "./style.css";

const CustomTextfield = (props: TextFieldProps) => {
  const theme = useTheme();
  const styles = useCustomTypographyStyle(theme);
  return (
    <TextField
      fullWidth
      variant="standard"
      InputLabelProps={{ style: styles.inputLabel }} // font size of input label
      inputProps={{ style: styles.inputProps }} // font size of input text
      {...props}
    />
  );
};

export default CustomTextfield;
