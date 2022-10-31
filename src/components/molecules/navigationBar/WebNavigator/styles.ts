import { Style } from "../../../../globalTypes";
import { ScreenSize } from "../../../../hooks/useDimensions";
import { Theme } from "@mui/material";

export const useWebNavigatorStyle = (
  theme: Theme,
  screenSize: ScreenSize
): Style => {
  return {
    container: {
      flex: 1,
      width: "100vw",
      padding: 48,
      paddingLeft: 80,
      paddingRight: 80,
      display: "flex",
    },
    leftContainer: {
      flex: 1,
      display: "flex",
      alignItems: "flex-end",
      marginBottom: screenSize === "xl" ? 60 : 32,
    },
    address: {
      fontSize: screenSize === "xl" ? "1.8em" : "1.2em",
      color: theme.palette.primary.contrastText,
    },
    socialBtnContainer: {
      marginLeft: -8,
    },
    rightContainer: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  };
};
