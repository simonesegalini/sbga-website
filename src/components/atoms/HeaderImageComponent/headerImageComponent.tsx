import ScrollHelper from "../ScrollHelper/ScrollHelper";
import React from "react";
import { useHeaderImageComponentStyle } from "./styles";
import { Image } from "../../../schemas";
import ImageWithLoader from "../Image/Image";
import CustomTypography from "../CustomTypography/customTypography";
import { useGlobal } from "../../../state/global/useGlobal";

interface IHeaderImageComponent {
  image: Image;
  showLogo?: boolean;
  title?: string;
  subtitle?: string;
}

const HeaderImageComponent = (props: IHeaderImageComponent) => {
  const { image, showLogo = true, title, subtitle } = props;
  const styles = useHeaderImageComponentStyle(!(showLogo || title || subtitle));
  const { data } = useGlobal();
  const { settings } = data!;
  const { logo } = settings;

  return (
    <div style={styles.container}>
      <ImageWithLoader
        src={image.image}
        alt={image.image_alt}
        imgContainerStyle={styles.imgBcg}
        x_position={image.x_position}
        y_position={image.y_position}
      />
      {showLogo && (
        <img alt={logo.image_alt} src={logo.image} style={styles.imgLogo} />
      )}
      <div style={styles.containerTitle}>
        {title && (
          <CustomTypography style={styles.title} fontWeight={"bold"}>
            {title}
          </CustomTypography>
        )}
        {subtitle && (
          <CustomTypography style={styles.subtitle} fontWeight={"light"}>
            {subtitle}
          </CustomTypography>
        )}
      </div>
      <ScrollHelper />
    </div>
  );
};

export default HeaderImageComponent;
