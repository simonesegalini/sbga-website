import React from "react";
import { animated } from "react-spring";
import { useScrollableLoaderStyle } from "./styles";
import ScrollHelper from "../scrollableHelperLanding/ScrollHelper";
import { IScrollableLoader } from "./types";
import useScrollableLoader from "./useScrollableLoader";

const ScrollableLoader: React.FC<IScrollableLoader> = (props) => {
  const {
    canvasRef,
    down,
    up,
    scrollFinished,
    scrollHeight,
    y,
    setScrollFinished,
  } = useScrollableLoader(props);
  return (
    <animated.div style={{ height: scrollHeight, width: "100vw" }}>
      <canvas
        id="scrollable-loader-container"
        ref={canvasRef}
        style={useScrollableLoaderStyle(y)}
      />
      <ScrollHelper
        up={up}
        down={down}
        scrollFinished={scrollFinished}
        setScrollFinished={setScrollFinished}
      />
    </animated.div>
  );
};

export default ScrollableLoader;
