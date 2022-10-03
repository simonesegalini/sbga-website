import { Style } from "../../../globalTypes";
import { Theme } from "@mui/material";

export const useScrollHelperStyle = (theme: Theme): Style => {
  return {
    lineContainer: {
      position: "fixed",
      width: "100%",
      height: 24,
      display: "flex",
      bottom: 180,
      justifyContent: "center",
      zIndex: "1",
    },
    svg: {
      width: "40px",
      height: "35px",
      fill: "none",
      opacity: 0.8,
    },
    path: {
      strokeWidth: 1,
      stroke: theme.palette.primary.contrastText,
    },
  };
};
