import { Style } from "../../../globalTypes";
import { Theme } from "@mui/material";

export const useEmailStyle = (theme: Theme, isSmall: boolean): Style => {
  return {
    icon: {
      cursor: "pointer",
    },
    mailContent: {
      width: isSmall ? "80%" : "60%",
      minHeight: "40%",
      display: "flex",
      flexDirection: "column",
    },
    closeContainer: {
      display: "flex",
      justifyContent: "flex-end",
      cursor: "pointer",
    },
  };
};
