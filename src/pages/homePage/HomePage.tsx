import React from "react";
import { useHomePageLogic } from "./hooks/useHomePageLogic";
import AnimatedPage from "../../components/templates/AnimatedPage";
import { Paths } from "../../navigation/types";
import logo from "../../assets/imgs/logo.png";
import ScrollHelper from "../../components/atoms/ScrollHelper/ScrollHelper";
import { Grid } from "@mui/material";
import Card from "../../components/atoms/Card/card.atom";

const HomePage = () => {
  const { img_background, data, styles } = useHomePageLogic();

  const MainComponent = () => {
    return (
      <>
        {data.map((homeData, index) => (
          <Grid key={index} item xs={12} md={4} style={{ height: "100vh" }}>
            <Card
              id={index}
              title_en={homeData.title_en}
              title_it={homeData.title_it}
              imgSrc={homeData.image_thumbnail.image}
              alt={homeData.image_thumbnail.image_alt}
            />
          </Grid>
        ))}
      </>
    );
  };

  return (
    <AnimatedPage key={Paths.Home}>
      <>
        <div style={styles.container}>
          <img
            src={img_background.image}
            alt={img_background.image_alt}
            style={styles.imgBcg}
          />
          <img src={logo} style={styles.imgLogo} />
          <ScrollHelper />
        </div>
        <Grid container>
          <MainComponent />
        </Grid>
      </>
    </AnimatedPage>
  );
};

export default HomePage;
