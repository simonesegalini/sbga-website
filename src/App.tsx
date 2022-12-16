import React from "react";
import { AnimatePresence } from "framer-motion";
import MainRoutes from "./navigation/MainRoutes";
import NavigationBar from "./components/molecules/navigationBar/NavigationBar";
import Footer from "./components/molecules/footer/Footer";
import { usePageTitle } from "./hooks/usePageTitle";
import { useAllDataLoader } from "./hooks/useAllDataLoader";
import ErrorPage from "./pages/errorPage/ErrorPage";
import { useGlobal } from "./state/global/useGlobal";
import LandingPage from "./pages/landingPage/LandingPage";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

const App = () => {
  usePageTitle(); //** THIS HOOK MANAGES TABS TITLE **//
  const { error } = useAllDataLoader(); //** THIS HOOK MANAGES ALL DATA LOADING **//
  const { isDataLoaded } = useGlobal();

  return (
    <AnimatePresence exitBeforeEnter>
      <>
        {isDataLoaded && !error && <NavigationBar key="navbar" />}
        {error ? (
          <ErrorPage />
        ) : (
          <ScrollToTop showRoutes={isDataLoaded}>
            {isDataLoaded ? <MainRoutes key="mainRoutes" /> : <LandingPage />}
          </ScrollToTop>
        )}
        {isDataLoaded && !error && <Footer key="footer" />}
      </>
    </AnimatePresence>
  );
};

export default App;
