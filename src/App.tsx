import React from "react";
import { AnimatePresence } from "framer-motion";
import MainRoutes from "./navigation/MainRoutes";
import NavigationBar from "./components/molecules/navigationBar/NavigationBar";
import Footer from "./components/molecules/footer/Footer";

const App = () => {
  return (
    <AnimatePresence exitBeforeEnter key="key">
      <NavigationBar key="navbar" />
      <MainRoutes />
      <Footer />
    </AnimatePresence>
  );
};

export default App;
