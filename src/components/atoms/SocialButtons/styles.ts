import { ScreenSize } from "../../../hooks/useDimensions";
import { Style } from "../../../globalTypes";

export const useSocialButtonsStyle = (screenSize: ScreenSize): Style => {
  const getIconSize = () => {
    switch (screenSize) {
      case "sm":
        return { width: 40, height: 40 };
      case "lg":
        return { width: 50, height: 50 };
      case "xl":
        return { width: 50, height: 50 };
      default:
        return { width: 40, height: 40 };
    }
  };

  return {
    icon: {
      color: "white",
      ...getIconSize(),
      cursor: "pointer",
    },
  };
};
