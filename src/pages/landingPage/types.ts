import { Dimensions } from "../../hooks/useContainerDimensions/types";
import React from "react";
import { Style } from "../../globalTypes";

export interface IUseLandingPage {
  containerRef: React.RefObject<HTMLDivElement>;
  dimensions: Dimensions;
  images: HTMLImageElement[];
  scrollFinished: boolean;
  styles: Style;
  onContainerClick: () => void;
  showModel: boolean;
  scrollUp: (frameIndex: number) => boolean;
  scrollDown: (frameIndex: number, numFrames: number) => boolean;
  setScrollFinished: () => void;
}
