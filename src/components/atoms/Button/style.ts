import { Style } from "../../../globalTypes";
import { Theme } from "@mui/material";

export const useCustomButtonStyle = (theme: Theme): Style => {
  return {
    button: {
      textTransform: "none",
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.dark,
      borderRadius: 2,
      border: "2px solid #2c2c2c",
    },
  };
};
