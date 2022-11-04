import { Item } from "../../../schemas";
import React, { useMemo } from "react";
import { Grid } from "@mui/material";
import CustomTypography from "../CustomTypography/customTypography";
import Card from "../Card/card.atom";
import useRowItem from "./useRowItem";

const RowItem = (props: Item) => {
  const { color_bcg, img_header, isSmall, variants, title, subtitle, styles } =
    useRowItem(props);

  const RowOverlayComponent = () => {
    return (
      <div style={styles.overlayContainer}>
        <div style={styles.typoContainer}>
          <CustomTypography
            variant={variants.variantTitle}
            fontWeight="bold"
            align="right"
          >
            {title}
          </CustomTypography>
        </div>
        <div style={styles.typoContainer}>
          <CustomTypography
            variant={variants.variantSubtitle}
            fontWeight="light"
            align="right"
          >
            {subtitle}
          </CustomTypography>
        </div>
      </div>
    );
  };

  const CardComponent = useMemo(() => {
    return (
      <Card
        id={img_header.id}
        image={img_header}
        title={title}
        bcg_color={color_bcg}
        CustomOverlayComponent={RowOverlayComponent}
      />
    );
  }, [RowOverlayComponent, color_bcg, img_header, title]);

  const SmallItem = useMemo(() => {
    return (
      <Grid item xs={12} style={styles.containerGrid}>
        {CardComponent}
      </Grid>
    );
  }, [CardComponent, styles.containerGrid]);

  const NormalItem = useMemo(() => {
    return <div style={styles.container}>{CardComponent}</div>;
  }, [CardComponent, styles.container]);

  const Item = useMemo(() => {
    if (isSmall) {
      return SmallItem;
    }
    return NormalItem;
  }, [NormalItem, SmallItem, isSmall]);

  return <>{Item}</>;
};

export default RowItem;
