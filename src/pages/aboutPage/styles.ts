import { Style } from "../../globalTypes";
import { useTheme } from "@mui/material/styles";
import { useDimensions } from "../../hooks/useDimensions";

export const useAboutPageStyle = (): Style => {
  const theme = useTheme();
  const { screenSize } = useDimensions();
  const isSmall = screenSize === "sm" || screenSize === "xs";

  return {
    container: {
      backgroundColor: theme.palette.background.paper,
    },
    bottomContainer: {
      height: "100vh",
      width: "100%",
      paddingTop: 80,
      paddingBottom: 80,
    },
    overlayContainer: {
      position: "absolute",
      display: "flex",
      height: "100%",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
    },
    text: { fontSize: isSmall ? undefined : "8rem" },
  };
};
