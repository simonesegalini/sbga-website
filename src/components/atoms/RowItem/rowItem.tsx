import { Item } from "../../../schemas";
import React, { useCallback, useMemo } from "react";
import { Grid } from "@mui/material";
import CustomTypography from "../CustomTypography/customTypography";
import Card from "../Card/card.atom";
import useRowItem from "./useRowItem";
import { getBasePathFromType } from "../../../utils";
import { Paths } from "../../../navigation/types";
import { useNavigation } from "../../../navigation/useNavigation";

export interface IRowItem {
  item: Item;
  boxed: boolean;
}

const RowItem = (props: IRowItem) => {
  const {
    background_color,
    img_header,
    isSmall,
    variants,
    title,
    subtitle,
    styles,
  } = useRowItem(props);
  const { navigate } = useNavigation();

  const openItemDetail = useCallback(() => {
    const basePaths = getBasePathFromType(props.item.type);
    if (basePaths === Paths.Home) {
      navigate(Paths.Home);
      return;
    }
    navigate(getBasePathFromType(props.item.type) + "/" + props.item.id);
  }, [navigate, props]);

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
        bcg_color={props.boxed ? background_color : undefined}
        CustomOverlayComponent={RowOverlayComponent}
        onItemClick={openItemDetail}
      />
    );
  }, [
    RowOverlayComponent,
    background_color,
    img_header,
    openItemDetail,
    props.boxed,
    title,
  ]);

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
