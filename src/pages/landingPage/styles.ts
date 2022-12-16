import { Style } from "../../globalTypes";
import { Theme } from "@mui/material";
import { useDimensions } from "../../hooks/useDimensions";

export const useLandingPageStyle = (theme: Theme): Style => {
  const { screenSize } = useDimensions();
  const isSmall = screenSize === "sm" || screenSize === "xs";

  return {
    container: {
      width: "100%",
      height: "100vh",
      backgroundColor: "lightgray",
    },
    logoContainer: {
      position: "fixed",
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      paddingTop: 16,
      paddingRight: 16,
      zIndex: "1000",
    },
    logo: {
      height: isSmall ? "48px" : "66px",
    },
    containerLoader: {
      height: "100vh",
      width: "100%",
      backgroundColor: theme.palette.background.default,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    logoLoader: {
      height: isSmall ? "64px" : "96px",
    },
    linearProgress: {
      width: "100vw",
      height: isSmall ? "2px" : undefined,
      backgroundColor: theme.palette.secondary.dark,
    },
    logoLoaderContainer: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
  };
};
