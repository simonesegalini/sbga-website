import React from "react";
import "./style.css";
import { ICard } from "./types";
import { useCard } from "./useCard";
import CustomTypography from "../CustomTypography/customTypography";
import ImageWithLoader from "../Image/Image";

const Card: React.FC<ICard> = (props) => {
  const {
    bcg_color,
    CustomOverlayComponent,
    styles,
    title,
    overlayTransition,
    containerStyle,
    image,
    variants,
    onCardClick,
  } = useCard(props);

  const OverlayComponent: React.FC = () => {
    return (
      <>
        {CustomOverlayComponent ? (
          <CustomOverlayComponent />
        ) : (
          <div className="overlay" style={styles.overlayText}>
            <div style={styles.overlayTitle}>
              <div style={styles.bcgSmall}>
                <CustomTypography
                  fontWeight="bold"
                  variant={variants.variantTitle}
                  style={styles.title}
                >
                  {title}
                </CustomTypography>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <div
      className={overlayTransition ? "container" : "containerNT"}
      style={{ ...styles.cardContainer, ...containerStyle }}
      onClick={onCardClick}
    >
      <div
        className={overlayTransition ? "containerImage" : "containerImageNT"}
        style={{
          ...styles.imageContainer,
          backgroundColor: bcg_color,
        }}
      >
        {bcg_color ? (
          <img
            src={"http://93.42.250.155:8000" + image.image}
            alt={image.image_alt}
            style={styles.img}
          />
        ) : (
          <ImageWithLoader
            src={image.image}
            alt={image.image_alt}
            imgContainerStyle={styles.img}
          />
        )}
      </div>
      <OverlayComponent />
    </div>
  );
};

export default Card;
