import { useCallback, useMemo } from "react";
import { ICard } from "./types";
import { Variant } from "@mui/material/styles/createTypography";
import { useDimensions } from "../../../hooks/useDimensions";
import { useCardStyle } from "./styles";

type Variants = {
  variantTitle: Variant;
};

export const useCard = (props: ICard) => {
  const {
    bcg_color,
    containerStyle,
    id,
    title,
    image,
    year,
    overlayTransition = true,
    onItemClick,
    CustomOverlayComponent,
  } = props;
  const { screenSize } = useDimensions();
  const isSmall = screenSize === "sm" || screenSize === "xs";

  const styles = useCardStyle(bcg_color);

  const onCardClick = useCallback(() => {
    onItemClick && onItemClick(id);
  }, [id, onItemClick]);

  const variants: Variants = useMemo(() => {
    return {
      variantTitle: "h4",
    };
  }, []);

  return {
    bcg_color,
    containerStyle,
    CustomOverlayComponent,
    image,
    title,
    year,
    overlayTransition: overlayTransition && !isSmall,
    styles,
    variants,
    onCardClick,
  };
};
