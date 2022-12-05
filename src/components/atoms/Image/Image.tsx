import { CSSProperties, useCallback, useMemo, useState } from "react";
import FocusedImage from "./focusedImage/FocusedImage";
import { LoadingSkeleton } from "../LoadingSkeleton/LoadingSkeleton";
import "./style.css";

interface IImage {
  src: string;
  alt?: string;
  x_position?: number;
  y_position?: number;
  imgContainerStyle?: CSSProperties;
}

const ImageWithLoader = (props: IImage) => {
  const { src, alt, x_position = 0, y_position = 0, imgContainerStyle } = props;
  const [loading, setLoading] = useState(true);

  const onLoadImage = useCallback(() => {
    setLoading(false);
  }, []);

  const Image = useMemo(() => {
    return (
      <div className={"img"}>
        <FocusedImage
          src={src}
          alt={alt}
          style={{ display: loading ? "none" : "block" }}
          x={x_position}
          y={y_position}
          onLoadImage={onLoadImage}
        />
      </div>
    );
  }, [alt, loading, onLoadImage, src, x_position, y_position]);

  return (
    <div style={{ ...imgContainerStyle }}>
      {loading && <LoadingSkeleton width="100%" height="100%" />}
      {Image}
    </div>
  );
};

export default ImageWithLoader;
