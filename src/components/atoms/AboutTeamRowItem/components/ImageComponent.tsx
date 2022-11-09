import { useAboutItemStyle } from "../styles";
import { Image } from "../../../../schemas";

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
      <img src={image.image} alt={image.image_alt} style={styles.image} />
    </div>
  );
};

export default ImageComponent;
