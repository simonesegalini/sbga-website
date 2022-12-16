import { useMemo } from "react";
import { useDimensions } from "../../../hooks/useDimensions";
import { Style } from "../../../globalTypes";

export const useHeaderImageComponentStyle = (): Style => {
  const { screenSize } = useDimensions();
  const isSmall = screenSize === "sm" || screenSize === "xs";

  const getFontSize = () => {
    switch (screenSize) {
      case "xs":
        return "4em";
      case "sm":
        return "4em";
      case "xl":
        return "10em";
      default:
        return "6em";
    }
  };

  const getFontSizeSubtitle = () => {
    switch (screenSize) {
      case "xs":
        return "2em";
      case "sm":
        return "2em";
      case "md":
        return "3em";
      case "lg":
        return "3em";
      case "xl":
        return "3em";
      default:
        return "2em";
    }
  };

  const logoWidth = useMemo(() => {
    if (isSmall) {
      return 200;
    }
    return 300;
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
    imgLogo: { position: "absolute", width: logoWidth },
    containerTitle: {
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: 24,
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
