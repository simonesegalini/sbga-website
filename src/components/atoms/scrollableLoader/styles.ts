// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { SpringValue } from "react-spring";
import React from "react";

export const useScrollableLoaderStyle = (y: SpringValue<number[]>): React.CSSProperties => {
  return {
    position: "sticky",
    top: "0%",
    margin: "auto",
    display: "block",
    transform: y.to((y) => `translate3d(0,${y}px,0)`),
    WebkitTransform: y.to((y) => `translate3d(0,${y}px,0)`),
  };
};
