import React, { useLayoutEffect, useState } from "react";
import { Dimensions, MovementTimer } from "./types";

const RESET_TIMEOUT = 100;

const useContainerDimensions = (
  containerRef: React.RefObject<HTMLElement>
): Dimensions => {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: undefined,
    height: undefined,
  });

  let movementTimer: MovementTimer = null;

  const set = () => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      });
    }
  };

  useLayoutEffect(() => {
    set();
  }, []);

  window.addEventListener("resize", () => {
    movementTimer && clearInterval(movementTimer);
    movementTimer = setTimeout(set, RESET_TIMEOUT);
  });

  return dimensions;
};

export default useContainerDimensions;
