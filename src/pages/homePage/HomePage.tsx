import React, { useCallback } from "react";
import { useHomePageLogic } from "./hooks/useHomePageLogic";
import AnimatedPage from "../../components/templates/AnimatedPage";
import { Paths } from "../../navigation/types";
import { Divider, Grid } from "@mui/material";
import Card from "../../components/atoms/Card/card.atom";
import CustomTypography from "../../components/atoms/CustomTypography/customTypography";
import HeaderImageComponent from "../../components/atoms/HeaderImageComponent/headerImageComponent";

const HomePage = () => {
  const { img_thumbnail, categories, styles, t, handleNavigation } =
    useHomePageLogic();

  const onNavigateElementClick = useCallback(
    (path: Paths) => {
      handleNavigation(path);
    },
    [handleNavigation]
  );

  const MainComponent = () => {
    const getPath = (index: number) => {
      switch (index) {
        case 0:
          return Paths.Architecture;
        case 1:
          return Paths.Design;
        case 2:
          return Paths.Services;
        default:
          return Paths.Home;
      }
    };
    return (
      <Grid container>
        {categories.map((homeData, index) => (
          <Grid
            key={index}
            item
            xs={12}
            md={4}
            style={styles.gridItem}
            onClick={() => onNavigateElementClick(getPath(index))}
          >
            <Card
              id={index}
              title={homeData.name}
              image={homeData.img}
              alt={homeData.img.image_alt}
            />
          </Grid>
        ))}
      </Grid>
    );
  };

  const BottomComponent = () => {
    return (
      <div
        style={{
          ...styles.container,
          flexDirection: "column",
        }}
      >
        <CustomTypography
          style={styles.text}
          onClick={() => onNavigateElementClick(Paths.Portfolio)}
        >
          {t("label.portfolio")}
        </CustomTypography>
        <CustomTypography
          style={{ ...styles.text, marginTop: 8 }}
          onClick={() => onNavigateElementClick(Paths.About)}
        >
          {t("label.about")}
        </CustomTypography>
        <CustomTypography
          style={{ ...styles.text, marginTop: 8 }}
          onClick={() => onNavigateElementClick(Paths.Team)}
        >
          {t("label.team")}
        </CustomTypography>
        <CustomTypography style={styles.text}>Contact</CustomTypography>
      </div>
    );
  };

  return (
    <AnimatedPage key={Paths.Home}>
      <>
        <HeaderImageComponent image={img_thumbnail} />
        <MainComponent />
        <BottomComponent />
        <Divider style={styles.divider} />
      </>
    </AnimatedPage>
  );
};

export default HomePage;
