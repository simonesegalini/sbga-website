import { Style } from "../../globalTypes";
import { useTheme } from "@mui/material/styles";
import { useDimensions } from "../../hooks/useDimensions";

export const useContactPageStyle = (): Style => {
  const theme = useTheme();
  const { screenSize } = useDimensions();
  const isSmall = screenSize === "sm" || screenSize === "xs";

  return {
    mapContainer: {
      height: "70vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 88,
      paddingLeft: isSmall ? 24 : 0,
      paddingRight: isSmall ? 24 : 0,
      paddingBottom: isSmall ? 24 : 0,
    },
    gridContainer: {
      backgroundColor: theme.palette.background.paper,
      paddingTop: isSmall ? undefined : 24,
      paddingBottom: isSmall ? undefined : 24,
    },
    gridItem: {
      paddingLeft: 24,
      paddingRight: 24,
      paddingTop: 24,
      display: isSmall ? undefined : "flex",
      justifyContent: isSmall ? undefined : "center",
    },
    contactMail: {
      marginTop: isSmall ? 0 : 24,
      minWidth: isSmall ? undefined : "50%",
      maxWidth: isSmall ? undefined : "50%",
    },
    paddingBottomValue: {
      paddingBottom: isSmall ? 40 : 56,
    },
  };
};
