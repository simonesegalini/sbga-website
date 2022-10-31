import { useCallback, useMemo } from "react";
import { useTheme } from "@mui/material/styles";
import { ICard } from "./types";
import { Variant } from "@mui/material/styles/createTypography";
import { useGlobal } from "../../../state/global/useGlobal";
import { useDimensions } from "../../../hooks/useDimensions";
import { useCardStyle } from "./styles";

export const useCard = (props: ICard) => {
  const {
    containerStyle,
    id,
    imgSrc,
    year,
    featured = false,
    overlayTransition = true,
    onItemClick,
  } = props;

  const theme = useTheme();
  const { isSmall } = useDimensions();
  const styles = useCardStyle(theme, isSmall);
  const { language } = useGlobal();

  const onCardClick = useCallback(() => {
    onItemClick && onItemClick(id);
  }, [id, onItemClick]);

  const variantYear: Variant = useMemo(() => {
    return isSmall ? "body1" : "h6";
  }, [isSmall]);

  const variantTitle: Variant = useMemo(() => {
    return isSmall ? "h4" : "h3";
  }, [isSmall]);

  const title = useMemo(() => {
    const property = "title_" + language;
    return props[property];
  }, [props, language]);

  return {
    containerStyle,
    imgSrc,
    title,
    year,
    featured,
    overlayTransition: overlayTransition && !isSmall,
    styles,
    variantYear,
    variantTitle,
    onCardClick,
  };
};
