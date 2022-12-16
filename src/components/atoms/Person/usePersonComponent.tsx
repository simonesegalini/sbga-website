import { IPerson } from "./Person";
import { useDimensions } from "../../../hooks/useDimensions";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { usePersonStyle } from "./styles";
import { motion, Variants } from "framer-motion";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import CustomTypography from "../CustomTypography/customTypography";
import ImageWithLoader from "../Image/Image";

const variants: Variants = {
  open: {
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, transition: { duration: 0.2 } },
};

const usePersonComponent = (props: IPerson) => {
  const { person, index, setCloseDetail, setOpenDetail } = props;
  const { bio, role, name, surname, img_thumbnail, open, isBoss } = person;
  const styles = usePersonStyle();
  const { screenSize } = useDimensions();
  const isSmall = screenSize === "sm" || screenSize === "xs";
  const [imOpen, setImOpen] = useState(open);

  const onDetailCardClick = useCallback(() => {
    if (isSmall) {
      setImOpen(false);
      return;
    }
    setCloseDetail(index);
  }, [index, isSmall, setCloseDetail]);

  const onProfileCardClick = useCallback(() => {
    if (!person.isBoss) {
      return;
    }
    if (isSmall) {
      setImOpen(true);
      return;
    }
    setOpenDetail(index);
  }, [index, isSmall, person.isBoss, setOpenDetail]);

  useEffect(() => {
    setImOpen(false);
  }, [isSmall]);

  const gridItemDimension = useMemo(() => {
    return open ? 12 : 4;
  }, [open]);

  const openDetail = useMemo(() => {
    return open || imOpen;
  }, [imOpen, open]);

  const Image = useMemo(() => {
    return (
      <ImageWithLoader
        src={img_thumbnail.image}
        alt={img_thumbnail.image_alt}
        x_position={img_thumbnail.x_position}
        y_position={img_thumbnail.y_position}
        imgContainerStyle={styles.img}
      />
    );
  }, [
    img_thumbnail.image,
    img_thumbnail.image_alt,
    img_thumbnail.x_position,
    img_thumbnail.y_position,
    styles.img,
  ]);

  const Description = useMemo(() => {
    return (
      <Grid
        container
        rowSpacing={8}
        spacing={3}
        style={styles.descriptionGridContainer}
      >
        <Grid item xs={12} md={gridItemDimension} style={styles.gridItem}>
          <Box component="div" style={styles.descriptionGrid}>
            <Box>
              <CustomTypography style={styles.txt} fontWeight={"bold"}>
                {name}
              </CustomTypography>
              <CustomTypography
                style={{ ...styles.txt, marginTop: -8 }}
                fontWeight={"bold"}
              >
                {surname}
              </CustomTypography>
              <CustomTypography
                style={{ ...styles.txtRole }}
                fontWeight={"light"}
              >
                {role}
              </CustomTypography>
            </Box>
            <Box component="div" mt={2}>
              <CustomTypography style={styles.txtBio} fontWeight={"light"}>
                {bio}
              </CustomTypography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    );
  }, [
    bio,
    gridItemDimension,
    name,
    role,
    styles.descriptionGrid,
    styles.descriptionGridContainer,
    styles.gridItem,
    styles.txt,
    styles.txtBio,
    styles.txtRole,
    surname,
  ]);

  const Detail = () => {
    return (
      <motion.div
        variants={variants}
        animate={openDetail ? "open" : "closed"}
        style={styles.detailContainer}
        onClick={onDetailCardClick}
      >
        <Grid container rowSpacing={8} spacing={3}>
          <Grid item xs={12} md={4} style={styles.descriptionContainer}>
            {Description}
          </Grid>
          <Grid item xs={0} md={4} style={styles.gridItem}>
            <div style={styles.imgContainer}>{Image}</div>
          </Grid>
        </Grid>
      </motion.div>
    );
  };

  return {
    isBoss,
    Image,
    Detail,
    openDetail,
    gridItemDimension,
    styles,
    onProfileCardClick,
  };
};

export default usePersonComponent;
