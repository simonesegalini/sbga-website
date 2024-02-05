import { Style } from "../../../../globalTypes";
import { Theme } from "@mui/material";

export const useMobileNavigatorStyle = (theme: Theme): Style => {
  return {
    container: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      overflowY: "auto",
      marginTop: 16,
      marginBottom: 16,
      justifyContent: "flex-end",
    },
    buttonContainer: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      //marginTop: 24,
      //marginBottom: 24,
      overflow: "hidden",
    },
    divider: {
      backgroundColor: theme.palette.primary.contrastText,
      opacity: "0.5",
    },
    bottomContainer: {
      width: "100%",
      height: "fit-content",
      marginTop: 24,
      marginBottom: 32,
      display: "flex",
      flexDirection: "column",
    },
    socialBtnContainer: {
      flex: 1,
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 8,
      marginBottom: 32,
    },
    infoContainer: {
      flex: 1,
      width: "100%",
      display: "flex",
      marginTop: 8,
      marginBottom: 16,
    },
    addressContainer: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    address: {
      color: theme.palette.primary.contrastText,
      paddingLeft: 24,
    },
    logoContainer: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
    },
    logo: {
      maxWidth: "160px",
      width: "auto",
      height: "auto",
      paddingLeft: 8,
      paddingRight: 8,
    },
  };
};
