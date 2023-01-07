import { Style } from "../../../globalTypes";
import { useDimensions } from "../../../hooks/useDimensions";
import { useTheme } from "@mui/material/styles";

export const usePersonStyle = (): Style => {
  const theme = useTheme();
  const { screenSize } = useDimensions();
  const isSmall = screenSize === "sm" || screenSize === "xs";
  const isMediumLarge = screenSize === "lg" || screenSize === "md";

  return {
    detailContainer: {
      width: "100%",
      height: "100%",
      backgroundColor: theme.palette.background.paper,
      cursor: "pointer",
    },
    gridItem: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: isSmall ? "80vh" : "60vh",
      maxHeight: isSmall ? "80vh" : "60vh",
      position: "relative",
    },
    imgContainer: {
      display: "flex",
      justifyContent: "center",
      height: "100%",
      width: isSmall ? "100%" : "80%",
    },
    img: { height: "100%", width: "100%" },
    descriptionContainer: {
      display: "flex",
      justifyContent: "center",
    },
    descriptionGrid: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      width: isSmall ? "100%" : "80%",
    },
    descriptionGridContainer: {
      width: isSmall ? "100%" : "80%",
    },
    txt: {
      color: theme.palette.primary.dark,
      fontSize: isMediumLarge ? "1rem" : isSmall ? "1.2rem" : "1.5rem",
      lineHeight: 1.2,
    },
    txtRole: {
      color: theme.palette.primary.dark,
      fontSize: isMediumLarge ? "0.8rem" : isSmall ? "1rem" : "1rem",
      lineHeight: 1.2,
    },
    txtBio: {
      color: theme.palette.primary.dark,
      lineHeight: 1.2,
      fontSize: isMediumLarge ? "0.7rem" : isSmall ? "1.1rem" : "1rem",
    },
  };
};