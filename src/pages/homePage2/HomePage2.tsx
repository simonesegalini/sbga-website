import React, { useCallback, useMemo, useState } from "react";
import { useHomePageLogic } from "./hooks/useHomePageLogic";
import AnimatedPage from "../../components/templates/AnimatedPage";
import { Paths } from "../../navigation/types";
import { Divider, Grid } from "@mui/material";
import Card from "../../components/atoms/Card/card.atom";
import CustomTypography from "../../components/atoms/CustomTypography/customTypography";
import { Image } from "../../schemas";
import PortfolioMainComponent from "../portfolioPage/PortfolioMainComponent";
import { useHomePageStyle } from "./styles";
import "./style.css";

const effects = ["grayscaled", "saturated", "blur", "sepia", ""];

export interface VBImageProps {
  line?: boolean;
  effect?: string;
}

const HomePage2 = () => {
  const [height, setHeight] = useState(undefined);
  const [width, setWidth] = useState(undefined);
  const styles = useHomePageStyle(width, height);

  const { img_thumbnail, categories, t, handleNavigation } = useHomePageLogic();

  const divBcg = useCallback((node: any) => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
      setWidth(node.getBoundingClientRect().width);
    }
  }, []);

  const onNavigateElementClick = useCallback(
    (path: Paths) => {
      handleNavigation(path);
    },
    [handleNavigation]
  );

  const MainComponent = useMemo(() => {
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
      <Grid container rowSpacing={0}>
        {categories.map(
          (
            homeData: { name: string | undefined; img: Image },
            index: number
          ) => (
            <Grid
              key={index}
              item
              xs={12}
              md={6}
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
          )
        )}
      </Grid>
    );
  }, [categories, onNavigateElementClick, styles.gridItem]);

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
        <CustomTypography
          style={styles.text}
          onClick={() => onNavigateElementClick(Paths.Contact)}
        >
          {" "}
          {t("label.contact")}
        </CustomTypography>
      </div>
    );
  };

  const VBImageComponent = (props: VBImageProps) => {
    const { effect, line } = props;
    console.log("Effect -> ", effect === "");
    return (
      <div style={styles.containerVb}>
        {effect === "" && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
              position: "absolute",
              height: "100%",
              width: "100%",
            }}
          >
            <img
              src={"http://195.231.76.117/imgs/logo.png"}
              style={styles.imgLogo}
            />
          </div>
        )}
        <div style={styles.containerImg} ref={divBcg}>
          <div
            className={`img--effect-${effect}`}
            style={{
              backgroundImage: `url(http://195.231.76.117:8000${img_thumbnail.image})`,
              ...styles.img,
            }}
          />
        </div>
        {line && <div key={`line-${effect})`} style={styles.line} />}
      </div>
    );
  };

  return (
    <AnimatedPage key={Paths.Home}>
      <>
        <div style={styles.background}>
          {effects.map((effect, i) => (
            <VBImageComponent
              key={`container-${effect}`}
              line={i !== effects.length}
              effect={effect}
            />
          ))}
        </div>
        {MainComponent}
        <BottomComponent />
        <PortfolioMainComponent removeHeader={true} />
        <Divider style={styles.divider} />
      </>
    </AnimatedPage>
  );
};

export default HomePage2;
