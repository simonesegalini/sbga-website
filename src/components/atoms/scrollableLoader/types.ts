import { Dimensions } from "../../../hooks/useContainerDimensions/types";

export interface IScrollableLoader {
  dimensions: Dimensions;
  images: HTMLImageElement[];
  numFrames: number;
  scrollHeight: number;
  scrollUp?: (frameIndex: number) => boolean;
  scrollDown?: (frameIndex: number, numFrames: number) => boolean;
  scrollFinished?: boolean;
  setScrollFinished?: () => void;
}
