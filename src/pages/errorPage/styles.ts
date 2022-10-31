import { Style } from "../../globalTypes";
import { useDimensions } from "../../hooks/useDimensions";

export const useErrorPageStyle = (): Style => {
  const { isSmall } = useDimensions();

  return {
    container: {
      height: "100vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    logoContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginBottom: 24,
    },
    logo: {
      width: isSmall ? 200 : 300,
    },
  };
};
