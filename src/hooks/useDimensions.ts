import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";

export type ScreenSize = "sm" | "md" | "lg" | "xl";

export interface Window {
  width: number;
  height: number;
}

export interface Dimensions {
  window: Window;
  isSmall: boolean;
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
  const screenMdSize = useMediaQuery(theme.breakpoints.up("md"));
  const screenLSize = useMediaQuery(theme.breakpoints.up("lg"));
  const screenXlSize = useMediaQuery(theme.breakpoints.up("xl"));
  return screenXlSize ? "xl" : screenLSize ? "lg" : screenMdSize ? "md" : "sm";
};

export const useDimensions = (): Dimensions => {
  return {
    isSmall: useScreenSize() === "sm",
    screenSize: useScreenSize(),
    window: useWindowDimensions(),
  };
};
