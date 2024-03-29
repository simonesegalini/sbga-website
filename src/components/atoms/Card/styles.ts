import { Style } from "../../../globalTypes";
import { useTheme } from "@mui/material/styles";
import { useDimensions } from "../../../hooks/useDimensions";

export const useCardStyle = (bcg_color?: string): Style => {
  const theme = useTheme();
  const { screenSize } = useDimensions();
  const isSmall = screenSize === "sm" || screenSize === "xs";
  const isMedium = screenSize === "md";
  return {
    overlayText: {
      height: "100%",
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
      width: isSmall ? "85%" : "80%",
      flex: 1,
      display: "flex",
      alignItems: "flex-end",
      //overflow: "hidden",
      padding: isSmall ? 24 : 32,
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
      fontSize: isMedium ? "2.2rem" : "2.8rem",
      letterSpacing: "0.05em",
    },
    cardContainer: {
      backgroundColor: bcg_color ?? `#${bcg_color}`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    imageContainer: {
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    img: {
      padding: bcg_color ? 40 : undefined,
      paddingLeft: isSmall && bcg_color ? 48 : bcg_color ? 48 : undefined,
      paddingRight: isSmall && bcg_color ? 48 : bcg_color ? 48 : undefined,
      height: bcg_color ? (isSmall ? "80%" : "70%") : "100%",
      width: "100%",
      objectFit: "cover",
    },
  };
};
