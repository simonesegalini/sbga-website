import { Style } from "../../../globalTypes";
import { Theme } from "@mui/material";
import { ScreenSize } from "../../../hooks/useDimensions";

export const useMenuItemStyle = (
  theme: Theme,
  screenSize: ScreenSize
): Style => {
  const getFontSize = () => {
    switch (screenSize) {
      case "lg":
        return "5em";
      case "xl":
        return "7em";
      default:
        return "4em";
    }
  };

  return {
    typography: {
      fontSize: getFontSize(),
      color: theme.palette.primary.contrastText,
      fontWeight: "bold",
    },
    cursor: {
      cursor: "pointer",
    },
  };
};
