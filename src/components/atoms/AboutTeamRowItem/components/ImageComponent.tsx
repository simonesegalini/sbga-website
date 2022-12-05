import { useAboutItemStyle } from "../styles";
import { Image } from "../../../../schemas";
import ImageWithLoader from "../../Image/Image";

interface IImageComponentProps {
  image: Image;
  right?: boolean;
}
const ImageComponent = (props: IImageComponentProps) => {
  const { image, right = false } = props;
  const styles = useAboutItemStyle();

  return (
    <div
      style={{
        ...styles.imageContainer,
        justifyContent: right ? "flex-end" : undefined,
      }}
    >
      <ImageWithLoader
        src={image.image}
        alt={image.image_alt}
        x_position={image.x_position}
        y_position={image.y_position}
        imgContainerStyle={styles.image}
      />
    </div>
  );
};

export default ImageComponent;
