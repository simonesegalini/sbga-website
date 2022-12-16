import { Style } from "../../../globalTypes";
import { useTheme } from "@mui/material/styles";

export const useContactMailStyle = (): Style => {
  const theme = useTheme();

  return {
    container: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
    typography: {
      color: theme.palette.primary.dark,
    },
    title: { fontSize: "2rem", lineHeight: 1, textTransform: "capitalize" },
    subtitle: { fontSize: "1rem", lineHeight: 1.1 },
    button: {
      padding: 8,
      paddingLeft: 16,
      paddingRight: 16,
      background: theme.palette.primary.dark,
      color: theme.palette.primary.light,
    },
  };
};
