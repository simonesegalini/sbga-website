import React from "react";
import { useCustomButtonStyle } from "./style";
import { useTheme } from "@mui/material/styles";
import { LoadingButton, LoadingButtonProps } from "@mui/lab";

const CustomButton = (props: LoadingButtonProps) => {
  const theme = useTheme();
  const styles = useCustomButtonStyle(theme);
  return (
    <LoadingButton
      {...props}
      size="small"
      variant="outlined"
      type="submit"
      style={{ ...styles.button, ...props.style }}
    />
  );
};

export default CustomButton;
