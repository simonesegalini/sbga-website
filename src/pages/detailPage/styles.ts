import { Style } from "../../globalTypes";
import { useDimensions } from "../../hooks/useDimensions";
import { useTheme } from "@mui/material/styles";

export const useDetailPageStyle = (): Style => {
  const { screenSize } = useDimensions();
  const isSmall = screenSize === "sm" || screenSize === "xs";
  const theme = useTheme();
  return {
    body: {
      backgroundColor: "whitesmoke",
    },
    gridContainer: {
      paddingTop: isSmall ? 0 : 80,
      paddingLeft: isSmall ? 0 : 80,
      paddingBottom: isSmall ? 60 : 80,
    },
    contentContainer: {
      padding: isSmall ? 24 : 0,
      paddingTop: isSmall ? 40 : 0,
      paddingBottom: isSmall ? 40 : 0,
      paddingRight: isSmall ? 24 : 64,
    },
    contentTxt: {
      marginTop: 24,
      color: theme.palette.primary.dark,
      lineHeight: 1.1,
      fontSize: isSmall ? "1rem" : "1.2rem",
    },
    img: {
      height: "auto",
      width: "100%",
    },
  };
};
