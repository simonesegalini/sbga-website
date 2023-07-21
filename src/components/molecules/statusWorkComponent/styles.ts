import { useTheme } from "@mui/material/styles";
import { Style } from "../../../globalTypes";
import { useDimensions } from "../../../hooks/useDimensions";

export const useStatusWorkComponentStyle = (): Style => {
  const { screenSize } = useDimensions();
  const isSmall = screenSize === "sm" || screenSize === "xs";
  const theme = useTheme();
  return {
    txt: {
      color: theme.palette.primary.dark,
      lineHeight: 1.4,
      fontSize: isSmall ? "1.1rem" : "1.3rem",
    },
  };
};
