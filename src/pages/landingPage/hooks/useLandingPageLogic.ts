import { useCallback, useMemo, useRef, useState } from "react";
import useContainerDimensions from "../../../hooks/useContainerDimensions/useContainerDimensions";
import { useGlobal } from "../../../state/global/useGlobal";
import { IUseLandingPage } from "../types";
import { useLandingPageStyle } from "../styles";
import _ from "lodash";
import { useTheme } from "@mui/material/styles";

const useChangeThemeColor = () => {
  const showModel = localStorage.getItem("animation_view_sbga") !== "true";
  if (document.querySelector("meta[name='theme-color']") && showModel) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    document.querySelector("meta[name='theme-color']").content = "#D5D8DA";
  }
};
export const useLandingPageLogic = (): IUseLandingPage => {
  const { landingPageImages, setFinishedScrolling, setHideLandingPage } =
    useGlobal();
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollFinished, setScrollFinishedState] = useState(false);
  const dimensions = useContainerDimensions(containerRef);
  const theme = useTheme();
  const styles = useLandingPageStyle(theme);
  useChangeThemeColor();

  const showModel = useMemo(() => {
    return localStorage.getItem("animation_view_sbga") !== "true";
  }, []);

  const onContainerClick = useCallback(() => {
    if (!scrollFinished) {
      return;
    }
    setHideLandingPage();
  }, [scrollFinished, setHideLandingPage]);

  const scrollUp = useCallback((frameIndex: number): boolean => {
    return !_.inRange(frameIndex, 0, 5);
  }, []);

  const scrollDown = useCallback(
    (frameIndex: number, numFrames: number): boolean => {
      return !_.inRange(frameIndex, numFrames - 5, numFrames);
    },
    []
  );

  const setScrollFinished = useCallback(() => {
    if (scrollFinished) {
      return;
    }
    setScrollFinishedState(true);
    setFinishedScrolling();
  }, [scrollFinished, setFinishedScrolling]);

  return {
    containerRef,
    dimensions,
    images: landingPageImages,
    scrollFinished,
    styles,
    onContainerClick,
    showModel,
    scrollUp,
    scrollDown,
    setScrollFinished,
  };
};
