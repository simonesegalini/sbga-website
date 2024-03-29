import React, { useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import MainRoutes from "./navigation/MainRoutes";
import NavigationBar from "./components/molecules/navigationBar/NavigationBar";
import Footer from "./components/molecules/footer/Footer";
import { usePageTitle } from "./hooks/usePageTitle";
import { useAllDataLoader } from "./hooks/useAllDataLoader";
import ErrorPage from "./pages/errorPage/ErrorPage";
import { useGlobal } from "./state/global/useGlobal";
import LandingPage from "./pages/landingPage/LandingPage";
import { useDimensions } from "./hooks/useDimensions";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

const App = () => {
  usePageTitle(); //** THIS HOOK MANAGES TABS TITLE **//
  const { error } = useAllDataLoader(); //** THIS HOOK MANAGES ALL DATA LOADING **//
  const { isDataLoaded } = useGlobal();
  const { screenSize } = useDimensions();
  const isSmall = screenSize === "sm" || screenSize === "xs";

  const AppComponent = useMemo(() => {
    return (
      <>
        <ScrollToTop />
        {isDataLoaded && !error && <NavigationBar key="navbar" />}
        {error ? (
          <ErrorPage />
        ) : (
          <>
            {isDataLoaded ? <MainRoutes key="mainRoutes" /> : <LandingPage />}
          </>
        )}
        {isDataLoaded && !error && <Footer key="footer" />}
      </>
    );
  }, [error, isDataLoaded]);

  return (
    <>
      {isSmall ? (
        AppComponent
      ) : (
        <AnimatePresence exitBeforeEnter>{AppComponent}</AnimatePresence>
      )}
    </>
  );
};

export default App;
