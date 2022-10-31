import React from "react";
import { Routes, Route } from "react-router-dom";
import { Paths } from "./types";
import HomePage from "../pages/homePage/HomePage";
import PortfolioPage from "../pages/portfolioPage/PortfolioPage";

const MainRoutes = () => {
  return (
    <Routes key="routes">
      <Route
        key={Paths.Home}
        path={Paths.Home}
        element={<HomePage key={Paths.Home} />}
      />
      <Route
        key={Paths.Portfolio}
        path={Paths.Portfolio}
        element={<PortfolioPage key={Paths.Portfolio} />}
      />
    </Routes>
  );
};

export default MainRoutes;
