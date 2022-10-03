import { Style } from "../../../globalTypes";
import { useDimensions } from "../../../hooks/useDimensions";

export const useNavigationBarStyle = (): Style => {
  const { window, navbarHeight } = useDimensions();

  return {
    navbarHeaderContainer: {
      display: "flex",
      background: "tra",
      padding: 32,
      position: "fixed",
      justifyContent: "flex-end",
      zIndex: 5,
      width: "100vw",
      height: navbarHeight,
    },
    buttonContainer: {
      display: "flex",
      alignItems: "center",
    },
    navbar: {
      zIndex: 2,
      backgroundColor: "black",
      height: "90vh",
      width: "100vw",
      position: "fixed",
      top: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      height: window.height - navbarHeight,
      width: "100%",
      zIndex: 10,
    },
    logo: { height: "100%", marginLeft: 24 },
    mobileLogo: { height: "100%", marginLeft: 4, opacity: 0 },
  };
};
