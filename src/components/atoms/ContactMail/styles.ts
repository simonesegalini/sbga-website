import { Style } from "../../../globalTypes";
import { useTheme } from "@mui/material/styles";
import { useDimensions } from "../../../hooks/useDimensions";

export const useContactMailStyle = (): Style => {
  const theme = useTheme();
  const { screenSize } = useDimensions();
  const isSmall = screenSize === "sm" || screenSize === "xs";

  return {
    container: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
    typography: {
      color: theme.palette.primary.dark,
    },
    title: {
      fontSize: isSmall ? "1.5rem" : "2rem",
      lineHeight: 1,
      textTransform: "capitalize",
    },
    subtitle: {
      fontSize: isSmall ? "0.8rem" : "1rem",
      lineHeight: 1.1,
    },
    button: {
      padding: 8,
      paddingLeft: 16,
      paddingRight: 16,
      background: theme.palette.primary.dark,
      color: theme.palette.primary.light,
      fontSize: isSmall ? "0.8rem" : "1rem",
    },
  };
};
