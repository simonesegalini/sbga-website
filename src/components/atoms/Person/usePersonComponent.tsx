import { IPerson } from "./Person";
import React, { useCallback, useMemo } from "react";
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
  const { person, openDetailIndex, setCloseDetail, setOpenDetail } = props;
  const { bio, role, name, surname, image_thumbnail } = person;
  const styles = usePersonStyle();

  const imOpen = useMemo(() => {
    return openDetailIndex === person.id;
  }, [openDetailIndex, person.id]);

  const otherElementInRowIsOpen = useMemo(() => {
    return openDetailIndex && openDetailIndex !== person.id;
  }, [openDetailIndex, person.id]);

  const onDetailCardClick = useCallback(() => {
    setCloseDetail();
  }, [setCloseDetail]);

  const onProfileCardClick = useCallback(() => {
    setOpenDetail(person.id);
  }, [person, setOpenDetail]);

  const gridItemDimension = useMemo(() => {
    if (!openDetailIndex) {
      return 4;
    }
    return imOpen ? 12 : 0;
  }, [imOpen, openDetailIndex]);

  const Image = useMemo(() => {
    return (
      <ImageWithLoader
        src={image_thumbnail.image}
        alt={image_thumbnail.image_alt}
        x_position={image_thumbnail.x_position}
        y_position={image_thumbnail.y_position}
        imgContainerStyle={styles.img}
      />
    );
  }, [
    image_thumbnail.image,
    image_thumbnail.image_alt,
    image_thumbnail.x_position,
    image_thumbnail.y_position,
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
        animate={imOpen ? "open" : "closed"}
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
    Image,
    Detail,
    imOpen,
    gridItemDimension,
    styles,
    onProfileCardClick,
    otherElementInRowIsOpen: otherElementInRowIsOpen,
  };
};

export default usePersonComponent;
