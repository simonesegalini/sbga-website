import logo from "../../../assets/imgs/logo.png";
import ScrollHelper from "../ScrollHelper/ScrollHelper";
import React from "react";
import { useHeaderImageComponentStyle } from "./styles";
import { Image } from "../../../schemas";

interface IHeaderImageComponent {
  image: Image;
  showLogo?: boolean;
}

const HeaderImageComponent = (props: IHeaderImageComponent) => {
  const { image, showLogo = true } = props;
  const styles = useHeaderImageComponentStyle();
  return (
    <div style={styles.container}>
      <img src={image.image} alt={image.image_alt} style={styles.imgBcg} />
      {showLogo && <img alt="logo" src={logo} style={styles.imgLogo} />}
      <ScrollHelper />
    </div>
  );
};

export default HeaderImageComponent;
