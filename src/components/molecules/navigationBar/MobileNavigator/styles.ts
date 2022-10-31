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
    },
    divider: {
      backgroundColor: theme.palette.primary.contrastText,
      opacity: "0.5",
      marginTop: 24,
      marginBottom: 24,
    },
    bottomContainer: {
      width: "100%",
      height: "100%",
      paddingTop: 16,
      paddingBottom: 16,
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
    },
    logoContainer: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
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
