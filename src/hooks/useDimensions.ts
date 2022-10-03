import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useEffect, useMemo, useState } from "react";

const NAVBAR_HEIGHT_WEB = 120;
const NAVBAR_HEIGHT_MOBILE = 80;

export type ScreenSize = "sm" | "md" | "lg" | "xl";

export interface Window {
  width: number;
  height: number;
}

export interface Dimensions {
  window: Window;
  screenSize: ScreenSize;
  navbarHeight: number;
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

const useNavbarHeight = (open: boolean): number => {
  const window = useWindowDimensions();
  return open ? window.height : NAVBAR_HEIGHT_WEB;
};

const useScreenSize = (): ScreenSize => {
  const theme = useTheme();
  const screenMdSize = useMediaQuery(theme.breakpoints.up("md"));
  const screenLSize = useMediaQuery(theme.breakpoints.up("lg"));
  const screenXlSize = useMediaQuery(theme.breakpoints.up("xl"));
  return screenXlSize ? "xl" : screenLSize ? "lg" : screenMdSize ? "md" : "sm";
};

export const useDimensions = (open?: boolean): Dimensions => {
  return {
    screenSize: useScreenSize(),
    window: useWindowDimensions(),
    navbarHeight:
      useScreenSize() === "sm" ? NAVBAR_HEIGHT_MOBILE : NAVBAR_HEIGHT_WEB,
  };
};
