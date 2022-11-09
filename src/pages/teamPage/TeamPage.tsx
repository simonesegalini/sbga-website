import AnimatedPage from "../../components/templates/AnimatedPage";
import { Paths } from "../../navigation/types";
import React from "react";
import { useTeamPage } from "./hooks/useTeamPage";
import HeaderImageComponent from "../../components/atoms/HeaderImageComponent/headerImageComponent";
import RowsTemplate from "../../components/templates/RowsTemplate/RowsTemplate";
import TeamComponent from "../../components/molecules/teamComponent/TeamComponent";

const TeamPage = () => {
  const { rows, image, styles, people } = useTeamPage();
  return (
    <AnimatedPage key={Paths.About}>
      <div style={styles.container}>
        <HeaderImageComponent image={image} showLogo={false} />
        <RowsTemplate type="teamRow" rows={rows} />
        <TeamComponent people={people} />
      </div>
    </AnimatedPage>
  );
};

export default TeamPage;
