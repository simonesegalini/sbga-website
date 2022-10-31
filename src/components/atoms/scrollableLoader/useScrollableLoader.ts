import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSpring } from "react-spring";
import { IScrollableLoader } from "./types";

const useScrollableLoader = (props: IScrollableLoader) => {
  const {
    scrollHeight,
    images,
    numFrames,
    dimensions,
    scrollFinished,
    setScrollFinished,
    scrollUp,
    scrollDown,
  } = props;
  const { width, height } = dimensions;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [frameIndex, setFrameIndex] = useState(0);

  const firstFrame = images[0];

  const [{ y }, set] = useSpring(() => ({
    y: [0],
    config: {
      mass: 1,
      tension: 200,
      friction: 150,
      precision: 0.00001,
      velocity: 0,
      clamp: true,
    },
  }));

  const up: boolean = useMemo(() => {
    if (!scrollUp) {
      return true;
    }
    return scrollUp(frameIndex);
  }, [frameIndex, scrollUp]);

  const down: boolean = useMemo(() => {
    if (!scrollDown) {
      return true;
    }

    return scrollDown(frameIndex, numFrames);
  }, [frameIndex, numFrames, scrollDown]);

  const renderCanvas = useCallback((width: number, height: number) => {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        context.canvas.width = width;
        context.canvas.height = height;
      }
    }
  }, []);

  const handleScroll = useCallback(() => {
    const scrollFraction = window.scrollY / (scrollHeight - window.innerHeight);
    const index = Math.min(
      numFrames - 1,
      Math.ceil(scrollFraction * numFrames)
    );

    if (index <= 0 || index > numFrames) {
      return;
    }
    set.start({ y: [-window.pageYOffset] });
    setFrameIndex(index);
  }, [numFrames, scrollHeight, set]);

  useEffect(() => {
    if (!width || !height) {
      return;
    }
    renderCanvas(width, height);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [width, height, renderCanvas, handleScroll]);

  useEffect(() => {
    if (!canvasRef.current || images.length < 1) {
      return;
    }

    const context = canvasRef.current.getContext("2d");
    let requestId: number;

    const render = () => {
      if (firstFrame && width && height) {
        const scale = Math.max(
          width / firstFrame.width,
          height / firstFrame.height
        );
        const x = width / 2 - (firstFrame.width / 2) * scale;
        const y = height / 2 - (firstFrame.height / 2) * scale;
        context?.drawImage(
          images[frameIndex],
          x,
          y,
          firstFrame.width * scale,
          firstFrame.height * scale
        );
        requestId = requestAnimationFrame(render);
      }
    };

    render();

    return () => cancelAnimationFrame(requestId);
  }, [frameIndex, images, firstFrame, height, width]);

  return {
    canvasRef,
    down,
    up,
    scrollFinished,
    scrollHeight,
    y,
    setScrollFinished,
  };
};

export default useScrollableLoader;
