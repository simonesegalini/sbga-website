import logo from "../../../assets/imgs/logo.png";
import ScrollHelper from "../ScrollHelper/ScrollHelper";
import React from "react";
import { useHeaderImageComponentStyle } from "./styles";
import { Image } from "../../../schemas";
import ImageWithLoader from "../Image/Image";

interface IHeaderImageComponent {
  image: Image;
  showLogo?: boolean;
}

const HeaderImageComponent = (props: IHeaderImageComponent) => {
  const { image, showLogo = true } = props;
  const styles = useHeaderImageComponentStyle();
  return (
    <div style={styles.container}>
      <ImageWithLoader
        src={image.image}
        alt={image.image_alt}
        imgContainerStyle={styles.imgBcg}
        x_position={image.x_position}
        y_position={image.y_position}
      />
      {showLogo && <img alt="logo" src={logo} style={styles.imgLogo} />}
      <ScrollHelper />
    </div>
  );
};

export default HeaderImageComponent;
