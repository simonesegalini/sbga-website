import { Style } from "../../../globalTypes";
import { Theme } from "@mui/material";
import { ScreenSize } from "../../../hooks/useDimensions";

export const useMenuItemStyle = (
  theme: Theme,
  screenSize: ScreenSize
): Style => {
  const isExtraSmall = screenSize === "xs";
  const isSmall = screenSize === "sm";

  const getFontSize = () => {
    switch (screenSize) {
      case "xs":
        return "2.6em";
      case "sm":
        return "2.8em";
      case "lg":
        return "4em";
      case "xl":
        return "4em";
      default:
        return "3em";
    }
  };

  return {
    typography: {
      fontSize: getFontSize(),
      color: theme.palette.primary.contrastText,
      fontWeight: "bold",
      lineHeight: isExtraSmall ? 0.9 : isSmall ? 1 : 1.3,
    },
    cursor: {
      cursor: "pointer",
    },
  };
};
