import React from "react";
import AnimatedPage from "../../components/templates/AnimatedPage";
import { Paths } from "../../navigation/types";
import { useArchitecturesPageLogic } from "./hooks/useArchitecturesPageLogic";
import HeaderImageComponent from "../../components/atoms/HeaderImageComponent/headerImageComponent";
import RowsTemplate from "../../components/templates/RowsTemplate/RowsTemplate";

const ArchitecturesPage = () => {
  const { image, rows } = useArchitecturesPageLogic();

  return (
    <AnimatedPage key={Paths.Architecture}>
      <>
        <HeaderImageComponent image={image} showLogo={false} />
        <RowsTemplate type="row" rows={rows} />
      </>
    </AnimatedPage>
  );
};

export default ArchitecturesPage;
