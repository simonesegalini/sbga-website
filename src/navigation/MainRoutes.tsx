import React, { useMemo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Paths } from "./types";
import HomePage from "../pages/homePage/HomePage";
import PortfolioPage from "../pages/portfolioPage/PortfolioPage";
import ArchitecturesPage from "../pages/architecturesPage/ArchitecturesPage";
import DesignPage from "../pages/designPage/DesignPage";
import ServicesPage from "../pages/servicesPage/ServicesPage";
import AboutPage from "../pages/aboutPage/AbooutPage";
import TeamPage from "../pages/teamPage/TeamPage";
import DetailPage from "../pages/detailPage/DetailPage";
import ContactPage from "../pages/contactPage/ContactPage";
import MailPage from "../pages/mailPage/MailPage";

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
          key={Paths.PortfolioDetail}
          path={Paths.PortfolioDetail}
          element={<DetailPage key={Paths.PortfolioDetail} />}
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
        <Route
          key={Paths.Mail}
          path={Paths.Mail}
          element={<MailPage key={Paths.Mail} />}
        />
        <Route
          key={Paths.Contact}
          path={Paths.Contact}
          element={<ContactPage key={Paths.Contact} />}
        />
      </>
    );
  }, []);
  const HomePageRoutes = useMemo(() => {
    return (
      <>
        <Route
          key={Paths.ArchitectureDetail}
          path={Paths.ArchitectureDetail}
          element={<DetailPage key={Paths.ArchitectureDetail} />}
        />
        <Route
          key={Paths.Architecture}
          path={Paths.Architecture}
          element={<ArchitecturesPage key={Paths.Architecture} />}
        />
        <Route
          key={Paths.DesignDetail}
          path={Paths.DesignDetail}
          element={<DetailPage key={Paths.DesignDetail} />}
        />
        <Route
          key={Paths.Design}
          path={Paths.Design}
          element={<DesignPage key={Paths.Design} />}
        />
        <Route
          key={Paths.ServicesDetail}
          path={Paths.ServicesDetail}
          element={<DetailPage key={Paths.ServicesDetail} />}
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
      <Route path="*" element={<Navigate to={Paths.Home} replace />} />
    </Routes>
  );
};

export default MainRoutes;
