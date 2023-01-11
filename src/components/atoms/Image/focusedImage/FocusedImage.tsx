import React, { Key, useEffect, useRef } from "react";
import { FocusedImage } from "./FocusedImageClass";

const initiValue = 0.000000001;

interface FocusedImageProps {
  src: string;
  key?: Key;
  x?: number;
  y?: number;
  alt?: string;
  style?: React.CSSProperties;
  onLoadImage?: () => void;
  imagePosition?: "absolute" | "initial";
}

const FocusedImageComponent = (props: FocusedImageProps) => {
  const {
    x = initiValue,
    y = initiValue,
    style,
    alt,
    onLoadImage,
    src,
    ...otherProps
  } = props;

  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imageRef.current !== null) {
      new FocusedImage(imageRef.current, {
        focus: {
          x,
          y,
        },
      });
    }
  }, [x, y]);

  return (
    <img
      {...otherProps}
      src={src}
      ref={imageRef}
      style={style}
      onLoad={onLoadImage}
      alt={alt}
    />
  );
};

export default FocusedImageComponent;
