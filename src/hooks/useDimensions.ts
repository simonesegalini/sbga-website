import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";

export type ScreenSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface Window {
  width: number;
  height: number;
}

export interface Dimensions {
  window: Window;
  screenSize: ScreenSize;
}

const getWindowDimensions = (): Window => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const useWindowDimensions = (): Window => {
  const [windowDimensions, setWindowDimensions] =
    useState<Window>(getWindowDimensions);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

const useScreenSize = (): ScreenSize => {
  const theme = useTheme();
  const screenSmSize = useMediaQuery(theme.breakpoints.up("sm"));
  const screenMdSize = useMediaQuery(theme.breakpoints.up("md"));
  const screenLSize = useMediaQuery(theme.breakpoints.up("lg"));
  const screenXlSize = useMediaQuery(theme.breakpoints.up("xl"));
  return screenXlSize
    ? "xl"
    : screenLSize
    ? "lg"
    : screenMdSize
    ? "md"
    : screenSmSize
    ? "sm"
    : "xs";
};

export const useDimensions = (): Dimensions => {
  return {
    screenSize: useScreenSize(),
    window: useWindowDimensions(),
  };
};
