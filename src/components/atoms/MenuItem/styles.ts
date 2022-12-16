import { Style } from "../../../globalTypes";
import { Theme } from "@mui/material";
import { ScreenSize } from "../../../hooks/useDimensions";

export const useMenuItemStyle = (
  theme: Theme,
  screenSize: ScreenSize
): Style => {
  const isSmall = screenSize === "sm";

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
      lineHeight: isSmall ? 1.1 : 1.3,
    },
    cursor: {
      cursor: "pointer",
    },
  };
};
