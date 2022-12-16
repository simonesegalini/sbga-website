import { Item } from "../../../schemas";
import { useDimensions } from "../../../hooks/useDimensions";
import { useRowItemStyle } from "./styles";
import { useMemo } from "react";
import { Variant } from "@mui/material/styles/createTypography";

type Variants = {
  variantTitle: Variant;
  variantSubtitle: Variant;
};

const useRowItem = (props: Item) => {
  const { title, subtitle, color_bcg, img_header } = props;
  const { screenSize } = useDimensions();
  const isSmall = screenSize === "sm" || screenSize === "xs";
  const styles = useRowItemStyle(color_bcg);

  const variants = useMemo((): Variants => {
    return {
      variantTitle: isSmall ? "h4" : "h2",
      variantSubtitle: isSmall ? "h5" : "h4",
    };
  }, [isSmall]);

  return {
    color_bcg,
    img_header,
    isSmall,
    subtitle,
    styles,
    title,
    variants,
  };
};

export default useRowItem;
