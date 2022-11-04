import { Style } from "../../../globalTypes";
import { useTheme } from "@mui/material/styles";
import { useDimensions } from "../../../hooks/useDimensions";

export const useFooterStyle = (): Style => {
  const theme = useTheme();
  const { screenSize, isSmall } = useDimensions();
  return {
    container: {
      flex: 1,
      width: "100vw",
      display: "flex",
      padding: isSmall ? 32 : 66,
      bottom: 0,
    },
    leftContainer: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
    },
    rightContainer: {
      flex: 1,
      display: "flex",
      justifyContent: isSmall ? "center" : "flex-end",
      alignItems: "center",
    },
    containerLogo: {
      display: isSmall ? "flex" : "block",
      justifyContent: isSmall ? "center" : undefined,
    },
    address: {
      fontSize: screenSize === "xl" ? "1.8em" : "1.2em",
      color: theme.palette.primary.contrastText,
      fontWeight: "lighter",
      textAlign: isSmall ? "center" : undefined,
    },
  };
};
