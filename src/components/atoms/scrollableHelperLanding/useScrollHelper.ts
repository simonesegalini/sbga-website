import { useTheme } from "@mui/material/styles";
import { useScrollHelperStyle } from "./styles";
import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ScrollHelperProps } from "./types";
import { useGlobal } from "../../../state/global/useGlobal";
import { useDimensions } from "../../../hooks/useDimensions";
import { useHideShowOnScroll } from "../../../hooks/useHideShowOnScroll";

export const icons = {
  arrowPath:
    "M11.2,18.6l-4.2-5L6.5,14l5,6l5-6L16,13.6l-4.2,5V4h-0.7C11.2,4,11.2,18.6,11.2,18.6z",
  tapPath:
    "M3.14,19.19a11.31,11.31,0,1,1,20-7.19,11.26,11.26,0,0,1-2.58,7.19m-1.85-4.28A7.46,7.46,0,1,0,5,14.91",
};
export const animate = { opacity: 0.4 };
export const transition = {
  ease: "easeInOut",
  duration: 2,
  repeat: Infinity,
};

const useScrollHelper = (props: ScrollHelperProps) => {
  const { up, down, scrollFinished, setScrollFinished } = props;
  const { isDataLoaded } = useGlobal();
  const theme = useTheme();
  const { screenSize } = useDimensions();
  const isSmall = screenSize === "sm" || screenSize === "xs";
  const styles = useScrollHelperStyle(theme, up, down);
  const { t } = useTranslation();
  const { isVisible } = useHideShowOnScroll(
    "scrollable-loader-container",
    1500,
    "wheel"
  );

  useEffect(() => {
    if (!down && !scrollFinished && setScrollFinished) {
      setScrollFinished();
    }
  }, [down, scrollFinished, setScrollFinished]);

  const className = useMemo(() => {
    return !isVisible
      ? "icon-scroll-hidden"
      : isSmall
      ? "icon-scroll-small"
      : "icon-scroll";
  }, [isVisible, isSmall]);

  return {
    className,
    isVisible,
    showIcon: scrollFinished && isDataLoaded,
    styles,
    t,
  };
};

export default useScrollHelper;
