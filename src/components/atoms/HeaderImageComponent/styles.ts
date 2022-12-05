import { useMemo } from "react";
import { useDimensions } from "../../../hooks/useDimensions";
import { Style } from "../../../globalTypes";

export const useHeaderImageComponentStyle = (): Style => {
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
    },
    imgLogo: { position: "absolute", width: logoWidth },
  };
};
