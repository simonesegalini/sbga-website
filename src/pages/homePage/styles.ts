import { Style } from "../../globalTypes";
import { useDimensions } from "../../hooks/useDimensions";
import { useMemo } from "react";
import { useTheme } from "@mui/material/styles";

export const useHomePageStyle = (): Style => {
  const theme = useTheme();
  const { screenSize } = useDimensions();
  const isSmall = screenSize === "sm" || screenSize === "xs";

  const fontSize = useMemo(() => {
    switch (screenSize) {
      case "lg":
        return "5em";
      case "xl":
        return "7em";
      default:
        return "4em";
    }
  }, [screenSize]);

  return {
    container: {
      height: "70vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    containerData: {
      height: isSmall ? "fit-content" : "100vh",
    },
    imgHome: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    text: {
      fontSize: fontSize.toString(),
      cursor: "pointer",
      fontWeight: "bold",
      lineHeight: 1.1,
    },
    divider: {
      backgroundColor: theme.palette.primary.contrastText,
      opacity: "0.5",
    },
    gridItem: { height: "70vh", cursor: "pointer" },
  };
};
