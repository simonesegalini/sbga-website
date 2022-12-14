import React from "react";
import AnimatedPage from "../../components/templates/AnimatedPage";
import { Paths } from "../../navigation/types";
import { usePortfolioPageLogic } from "./hooks/usePortfolioPageLogic";
import HeaderImageComponent from "../../components/atoms/HeaderImageComponent/headerImageComponent";
import RowsTemplate from "../../components/templates/RowsTemplate/RowsTemplate";

const PortfolioPage = () => {
  const { image, rows } = usePortfolioPageLogic();

  return (
    <AnimatedPage key={Paths.Portfolio}>
      <>
        <HeaderImageComponent image={image} showLogo={false} />
        <RowsTemplate type="row" rows={rows} />
      </>
    </AnimatedPage>
  );
};

export default PortfolioPage;
