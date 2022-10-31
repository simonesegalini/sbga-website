import React from "react";
import "./style.css";
import { ICard } from "./types";
import { useCard } from "./useCard";
import CustomTypography from "../CustomTypography/customTypography";

const Card: React.FC<ICard> = (props) => {
  const {
    styles,
    title,
    overlayTransition,
    containerStyle,
    imgSrc,
    variantTitle,
    onCardClick,
  } = useCard(props);

  const OverlayComponent: React.FC = () => {
    return (
      <div className="overlay" style={styles.overlayText}>
        <div style={styles.overlayTitle}>
          <div style={styles.bcgSmall}>
            <CustomTypography
              fontWeight="bold"
              variant={variantTitle}
              style={styles.title}
            >
              {title}
            </CustomTypography>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className={overlayTransition ? "container" : "containerNT"}
      style={containerStyle}
      onClick={onCardClick}
    >
      <img
        src={imgSrc}
        alt={title}
        className={overlayTransition ? "image" : "imageNT"}
      />
      <OverlayComponent />
    </div>
  );
};

export default Card;
