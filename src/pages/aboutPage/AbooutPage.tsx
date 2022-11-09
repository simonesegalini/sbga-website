import React from "react";
import AnimatedPage from "../../components/templates/AnimatedPage";
import { Paths } from "../../navigation/types";
import { useAboutPageLogic } from "./hooks/useAboutPageLogic";
import HeaderImageComponent from "../../components/atoms/HeaderImageComponent/headerImageComponent";
import RowsTemplate from "../../components/templates/RowsTemplate/RowsTemplate";
import Card from "../../components/atoms/Card/card.atom";
import "./style.css";

const AboutPage = () => {
  const { imageTop, imageBottom, rows, OverlayComponent, styles, onTeamClick } =
    useAboutPageLogic();

  return (
    <AnimatedPage key={Paths.About}>
      <div style={styles.container}>
        <HeaderImageComponent image={imageTop} showLogo={false} />
        <RowsTemplate type="aboutRow" rows={rows} />
        <div style={styles.bottomContainer} onClick={onTeamClick}>
          <Card
            id={rows[0].id}
            image={imageBottom}
            CustomOverlayComponent={OverlayComponent}
          />
        </div>
      </div>
    </AnimatedPage>
  );
};

export default AboutPage;
