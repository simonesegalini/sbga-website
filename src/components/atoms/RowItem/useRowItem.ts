import { useDimensions } from "../../../hooks/useDimensions";
import { useRowItemStyle } from "./styles";
import { useMemo } from "react";
import { Variant } from "@mui/material/styles/createTypography";
import { IRowItem } from "./rowItem";
import { getSubtitleFromTypes } from "../../../utils";

type Variants = {
  variantTitle: Variant;
  variantSubtitle: Variant;
};

const useRowItem = (props: IRowItem) => {
  const { title, types, background_color, img_header } = props.item;
  const { screenSize } = useDimensions();
  const isLarge = screenSize === "lg";
  const isMedium = screenSize === "md";
  const isSmall = screenSize === "sm" || screenSize === "xs";
  const styles = useRowItemStyle(props.boxed ? background_color : undefined);

  const variants = useMemo((): Variants => {
    return {
      variantTitle: isLarge ? "h4" : isMedium ? "h4" : isSmall ? "h5" : "h2",
      variantSubtitle: isMedium || isLarge ? "h6" : isSmall ? "h6" : "h5",
    };
  }, [isLarge, isMedium, isSmall]);

  const subtitle = useMemo(() => {
    return getSubtitleFromTypes(types);
  }, [types]);

  return {
    background_color,
    img_header,
    isSmall,
    subtitle,
    styles,
    title,
    variants,
  };
};

export default useRowItem;
