import { Style } from "../../../globalTypes";
import { useTheme } from "@mui/material/styles";
import { useDimensions } from "../../../hooks/useDimensions";

export const useAboutItemStyle = (): Style => {
  const theme = useTheme();
  const { screenSize } = useDimensions();
  const isSmall = screenSize === "sm" || screenSize === "xs";

  return {
    container: {
      marginTop: 32,
      height: isSmall ? "fit-content" : "70vh",
      display: "flex",
      flexDirection: isSmall ? "column" : undefined,
      alignItems: "flex-end",
    },
    imageContainer: {
      flex: isSmall ? undefined : 2.5,
      width: isSmall ? "100%" : undefined,
      height: isSmall ? "40vh" : "100%",
      display: "flex",
      alignItems: "flex-end",
    },
    image: { width: "100%", height: "92%", objectFit: "cover" },
    textContainer: {
      margin: isSmall ? 24 : 8,
      marginBottom: isSmall ? 0 : undefined,
      flex: 1.5,
      height: "92%",
      display: "flex",
      justifyContent: isSmall ? undefined : "center",
    },
    text: {
      color: theme.palette.primary.dark,
      display: "flex",
      justifyContent: "center",
      width: isSmall ? undefined : "60%",
      lineHeight: 1.4,
      fontSize: isSmall ? "1.1rem" : "1.3rem",
    },
  };
};
