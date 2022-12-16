import { Style } from "../../../globalTypes";
import { Theme } from "@mui/material";

export const useCustomTypographyStyle = (theme: Theme): Style => {
  return {
    inputLabel: { color: theme.palette.primary.light },
    inputProps: {
      color: theme.palette.primary.light,
    },
  };
};
