import { Style } from "../../../globalTypes";
import { Theme } from "@mui/material";
import { useDimensions } from "../../../hooks/useDimensions";

export const useDetailPageButtonStyle = (theme: Theme): Style => {
  const { screenSize } = useDimensions();
  const isSmall = screenSize === "sm" || screenSize === "xs";
  return {
    button: {
      color: theme.palette.primary.dark,
      cursor: "pointer",
      width: "fit-content",
    },
    txt: {
      color: theme.palette.primary.dark,
      fontSize: isSmall ? "0.7rem" : "0.9rem",
    },
    txtTitle: {
      color: theme.palette.primary.dark,
      fontSize: isSmall ? "1.2rem" : "1.4rem",
    },
    txtType: {
      color: theme.palette.secondary.dark,
      fontSize: isSmall ? "1.2rem" : "1.4rem",
    },
  };
};
