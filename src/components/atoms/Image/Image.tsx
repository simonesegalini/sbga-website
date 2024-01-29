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

const Base_P = 0.00000000000001;

const ImageWithLoader = (props: IImage) => {
  const { src, alt, x_position, y_position, imgContainerStyle } = props;
  const [loading, setLoading] = useState(true);

  const onLoadImage = useCallback(() => {
    if (!loading) {
      return;
    }
    setLoading(false);
  }, [loading]);

  const Image = useMemo(() => {
    return (
      <div className={"img"}>
        {!x_position && !y_position ? (
          <img
            src={"https://www.sbga.it" + src}
            alt={alt}
            style={{
              display: loading ? "none" : "block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            onLoad={onLoadImage}
          />
        ) : (
          //TODO: Remove
          <FocusedImage
            src={"https://www.sbga.it" + src}
            alt={alt}
            style={{ display: loading ? "none" : "block" }}
            x={x_position ? x_position : Base_P}
            y={y_position ? y_position : Base_P}
            onLoadImage={onLoadImage}
          />
        )}
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
