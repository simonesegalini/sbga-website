import { Style } from "../../../globalTypes";
import { Theme } from "@mui/material";
import { useDimensions } from "../../../hooks/useDimensions";

export const useScrollHelperStyle = (
  theme: Theme,
  up = true,
  down = true
): Style => {
  const { screenSize } = useDimensions();
  const isSmall = screenSize === "sm" || screenSize === "xs";

  return {
    lineContainer: {
      position: "fixed",
      width: "100%",
      display: "flex",
      bottom: isSmall ? 100 : 200,
      justifyContent: "center",
      zIndex: "1000",
    },
    svgUp: {
      transform: "rotate(180deg)",
      opacity: up ? 1 : 0.3,
      marginRight: -5,
      width: "35px",
      height: "35px",
    },
    svg: {
      opacity: down ? 1 : 0.3,
      marginLeft: -5,
      width: "35px",
      height: "35px",
    },
    svgTap: {
      width: "40px",
      height: "33px",
      fill: "none",
      strokeWidth: 0.6,
      stroke: theme.palette.primary.light,
    },
    tapMotionDiv: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    text: {
      color: theme.palette.primary.light,
    },
    path: {
      strokeWidth: 0.2,
      fill: theme.palette.primary.light,
    },
    cursor: {
      cursor: "pointer",
    },
  };
};
