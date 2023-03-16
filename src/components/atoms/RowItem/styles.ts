import { Style } from "../../../globalTypes";
import { useDimensions } from "../../../hooks/useDimensions";

export const useRowItemStyle = (color_bcg: string | undefined): Style => {
  const { screenSize } = useDimensions();
  const isSmall = screenSize === "sm" || screenSize === "xs";
  return {
    containerGrid: {
      height: "70vh",
      backgroundColor: color_bcg ?? color_bcg,
    },
    container: {
      flex: 1,
      height: "70vh",
      backgroundColor: color_bcg ?? color_bcg,
    },
    overlayContainer: {
      display: "flex",
      height: "100%",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: isSmall ? 48 : 40,
      paddingLeft: isSmall && color_bcg ? 48 : isSmall ? 48 : 40,
      paddingRight: isSmall && color_bcg ? 48 : isSmall ? 48 : 40,
      width: "100%",
      position: "absolute",
      top: 0,
      opacity: 1,
      transition: ".5s ease",
      cursor: "pointer",
      alignItems: "flex-end",
    },
    ctr: {
      backgroundColor: "rgba(0, 0, 0, 0.25)",
      padding: 8,
      width: "fit-content",
    },
    typoContainer: {
      display: "flex",
      justifyContent: "flex-end",
    },
  };
};
