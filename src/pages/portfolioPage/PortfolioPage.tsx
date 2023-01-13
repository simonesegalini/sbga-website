import React from "react";
import AnimatedPage from "../../components/templates/AnimatedPage";
import { Paths } from "../../navigation/types";
import PortfolioMainComponent from "./PortfolioMainComponent";

const PortfolioPage = () => {
  return (
    <AnimatedPage key={Paths.Portfolio}>
      <PortfolioMainComponent/>
    </AnimatedPage>
  );
};

export default PortfolioPage;
