import React, { useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import MainRoutes from "./navigation/MainRoutes";
import NavigationBar from "./components/molecules/navigationBar/NavigationBar";
import Footer from "./components/molecules/footer/Footer";
import { useLanguage } from "./hooks/useLanguage";
import { usePageTitle } from "./hooks/usePageTitle";
import { useAllDataLoader } from "./hooks/useAllDataLoader";
import ErrorPage from "./pages/errorPage/ErrorPage";
import { useGlobal } from "./state/global/useGlobal";
import LandingPage from "./pages/landingPage/LandingPage";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

const App = () => {
  useLanguage(); //** THIS HOOK MANAGES THE LANGUAGE **//
  usePageTitle(); //** THIS HOOK MANAGES TABS TITLE **//
  const { error } = useAllDataLoader(); //** THIS HOOK MANAGES ALL DATA LOADING **//
  const { isDataLoaded } = useGlobal();

  /* DATA */
  /*const showModel = useMemo(() => {
    //const showed = localStorage.getItem("animation_view_sbga");
    //return showed !== "true";
    return false;
  }, []);*/

  /*  const showRoutes = useMemo(() => {
    if (showModel) {
      return isDataLoaded && finishedScrolling && hideLandingPage;
    }
    return isDataLoaded;
  }, [showModel, isDataLoaded, finishedScrolling, hideLandingPage]);*/

  /*/!* EFFECTS *!/
  useEffect(() => {
    if (!showModel) {
      return;
    }
    if (finishedScrolling) {
      localStorage.setItem("animation_view_sbga", "true");
    }
  }, [finishedScrolling, showModel]);*/

  const showRoutes = useMemo(() => {
    return isDataLoaded;
  }, [isDataLoaded]);

  return (
    <AnimatePresence exitBeforeEnter>
      <>
        {showRoutes && !error && <NavigationBar key="navbar" />}
        {error ? (
          <ErrorPage />
        ) : (
          <ScrollToTop showRoutes={showRoutes}>
            {showRoutes ? <MainRoutes key="mainRoutes" /> : <LandingPage />}
          </ScrollToTop>
        )}
        {!error && showRoutes && <Footer key="footer" />}
      </>
    </AnimatePresence>
  );
};

export default App;
