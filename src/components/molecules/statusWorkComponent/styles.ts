import { useTheme } from "@mui/material/styles";
import { Style } from "../../../globalTypes";

export const useStatusWorkComponentStyle = (): Style => {
  const theme = useTheme();
  return {
    txt: {
      color: theme.palette.primary.dark,
      lineHeight: 1.2,
      fontSize: "1rem",
    },
  };
};
