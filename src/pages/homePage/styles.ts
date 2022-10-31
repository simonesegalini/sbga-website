import { Style } from "../../globalTypes";
import { useDimensions } from "../../hooks/useDimensions";
import { useMemo } from "react";

export const useHomePageStyle = (): Style => {
  const { isSmall } = useDimensions();

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
      objectFit: "cover",
    },
    imgLogo: { position: "absolute", width: logoWidth },
    containerData: {
      height: isSmall ? "fit-content" : "100vh",
    },
    imgHome: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  };
};
