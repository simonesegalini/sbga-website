import React, { useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import { Paths } from "./types";
import HomePage from "../pages/homePage/HomePage";
import PortfolioPage from "../pages/portfolioPage/PortfolioPage";
import ArchitecturesPage from "../pages/architecturesPage/ArchitecturesPage";
import DesignPage from "../pages/designPage/DesignPage";
import ServicesPage from "../pages/servicesPage/ServicesPage";
import AboutPage from "../pages/aboutPage/AbooutPage";
import TeamPage from "../pages/teamPage/TeamPage";

const MainRoutes = () => {
  const NavigationBarRoutes = useMemo(() => {
    return (
      <>
        <Route
          key={Paths.Portfolio}
          path={Paths.Portfolio}
          element={<PortfolioPage key={Paths.Portfolio} />}
        />
        <Route
          key={Paths.About}
          path={Paths.About}
          element={<AboutPage key={Paths.About} />}
        />
        <Route
          key={Paths.Team}
          path={Paths.Team}
          element={<TeamPage key={Paths.Team} />}
        />
      </>
    );
  }, []);
  const HomePageRoutes = useMemo(() => {
    return (
      <>
        <Route
          key={Paths.Architecture}
          path={Paths.Architecture}
          element={<ArchitecturesPage key={Paths.Architecture} />}
        />
        <Route
          key={Paths.Design}
          path={Paths.Design}
          element={<DesignPage key={Paths.Design} />}
        />
        <Route
          key={Paths.Services}
          path={Paths.Services}
          element={<ServicesPage key={Paths.Services} />}
        />
      </>
    );
  }, []);

  return (
    <Routes key="routes">
      <Route
        key={Paths.Home}
        path={Paths.Home}
        element={<HomePage key={Paths.Home} />}
      />
      {NavigationBarRoutes}
      {HomePageRoutes}
    </Routes>
  );
};

export default MainRoutes;
