import { Style } from "../../../globalTypes";

export const useNavigationBarStyle = (open: boolean): Style => {
  const navbarHeight = document.getElementById("navbar-header")?.offsetHeight;

  return {
    navbarHeaderContainer: {
      display: "flex",
      padding: 32,
      position: "fixed",
      justifyContent: "flex-end",
      zIndex: 10000,
      width: "100vw",
      height: "fit-content",
    },
    buttonContainer: {
      display: "flex",
      alignItems: "center",
    },
    navbar: {
      zIndex: 1002,
      backdropFilter: "blur(2px)",
      backgroundColor: "black",
      width: "100vw",
      position: "fixed",
      display: "flex",
      flexDirection: "column",
      marginTop: open ? (navbarHeight ? navbarHeight - 48 : 0) : 0,
      bottom: 0,
      maxHeight: "100%",
      justifyContent: "center",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      zIndex: 10,
      maxHeight: "100%",
    },
    logo: { position: "absolute", left: 32, width: 300 },
    mobileLogo: { display: "none" },
  };
};
