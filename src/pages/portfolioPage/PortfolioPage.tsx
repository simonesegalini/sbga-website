import React from "react";
import AnimatedPage from "../../components/templates/AnimatedPage";
import { Paths } from "../../navigation/types";
import { usePortfolioPageLogic } from "./hooks/usePortfolioPageLogic";

const PortfolioPage = () => {
  const { styles } = usePortfolioPageLogic();

  return (
    <AnimatedPage key={Paths.Portfolio}>
      <>
        <div style={{ height: "1000px", backgroundColor: "red" }}>
          PORTFOLIO RED
        </div>
        <div style={{ height: "1000px", backgroundColor: "yellow" }}>
          PORTFOLIO YELLOW
        </div>
      </>
    </AnimatedPage>
  );
};

export default PortfolioPage;
