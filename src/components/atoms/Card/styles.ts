import { Style } from "../../../globalTypes";
import { Theme } from "@mui/material";

export const useCardStyle = (theme: Theme, isSmall: boolean): Style => {
  return {
    overlayText: {
      opacity: isSmall ? 1 : undefined,
    },
    overlayHeader: {
      width: "100%",
      height: "80px",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    overlayTitle: {
      width: isSmall ? "85%" : "70%",
      flex: 1,
      display: "flex",
      alignItems: "flex-end",
      overflow: "hidden",
    },
    bcgSmall: {
      padding: 0,
      paddingTop: isSmall ? 4 : 0,
      paddingLeft: isSmall ? 8 : 0,
      paddingRight: isSmall ? 8 : 0,
      borderRadius: isSmall ? 4 : 0,
    },
    bigText: {
      paddingBottom: 26,
    },
    yearContainer: {
      display: "flex",
      alignItems: "center",
    },
    year: {
      marginRight: 8,
      color: theme.palette.primary.contrastText,
    },
    bullet: {
      paddingBottom: 5,
      color: theme.palette.primary.contrastText,
    },
    title: {
      color: theme.palette.primary.contrastText,
      letterSpacing: "0.05em",
    },
  };
};
