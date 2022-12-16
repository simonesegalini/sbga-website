import { Style } from "../../globalTypes";
import { useMemo } from "react";
import { useDimensions } from "../../hooks/useDimensions";

export const useMailPageStyle = (): Style => {
  const { screenSize } = useDimensions();
  const isSmall = screenSize === "sm" || screenSize === "xs";

  const { matches: isLandscape } = window.matchMedia(
    "(orientation: landscape)"
  );

  const margin = useMemo(() => {
    if (isLandscape && isSmall) {
      return 60;
    }
    return 0;
  }, [isSmall, isLandscape]);

  return {
    contactText: {
      fontSize: isSmall ? "2.6em" : "4.2em",
      marginTop: 32,
    },
    mailText: {
      fontSize: isSmall ? "0.8em" : "1.2em",
      marginTop: -8,
      marginBottom: 16,
    },
    formContainer: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    },
    logo: { position: "absolute" },
    componentContainer: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: margin,
      marginBottom: margin,
    },
  };
};
