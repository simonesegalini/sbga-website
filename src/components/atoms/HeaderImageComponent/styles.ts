import { useMemo } from "react";
import { useDimensions } from "../../../hooks/useDimensions";
import { Style } from "../../../globalTypes";

export const useHeaderImageComponentStyle = (showLogo: boolean): Style => {
  const { screenSize } = useDimensions();
  const isSmall = screenSize === "sm" || screenSize === "xs";
  const isLargeXl = screenSize === "lg" || screenSize === "xl";

  const getFontSize = () => {
    switch (screenSize) {
      case "xs":
        return "2.5em";
      case "sm":
        return "4em";
      case "xl":
        return "8em";
      default:
        return "6em";
    }
  };

  const getFontSizeSubtitle = () => {
    switch (screenSize) {
      case "xs":
      case "sm":
        return "1.5em";
      case "md":
        return "2em";
      case "lg":
      case "xl":
        return "2.5em";
      default:
        return "1.5em";
    }
  };

  const logoWidth = useMemo(() => {
    if (isSmall) {
      return 200;
    }
    return 390;
  }, [isSmall]);

  return {
    container: {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    imgBcg: {
      width: "100%",
      height: "100%",
    },
    imgLogo: { position: "absolute", width: logoWidth, cursor: "pointer" },
    containerTitle: {
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: isLargeXl ? 40 : 24,
      backgroundColor: !showLogo ? "rgba(0, 0, 0, 0.25)" : "transparent",
    },
    title: {
      fontSize: getFontSize(),
      textAlign: "center",
      lineHeight: 1,
    },
    subtitle: {
      fontSize: getFontSizeSubtitle(),
    },
  };
};
