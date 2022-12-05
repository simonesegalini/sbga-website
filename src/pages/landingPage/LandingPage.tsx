import React, { useMemo } from "react";
import { useLandingPageLogic } from "./hooks/useLandingPageLogic";
import logo from "../../assets/imgs/logo.png";
import AnimatedPage from "../../components/templates/AnimatedPage";
import LinearProgress from "@mui/material/LinearProgress";

const LandingPage = () => {
  const { containerRef, styles, onContainerClick } = useLandingPageLogic();

  const LoaderComponent = useMemo(() => {
    return (
      <div style={styles.containerLoader}>
        <div>
          <LinearProgress style={styles.linearProgress} />
        </div>
        <div style={styles.logoLoaderContainer}>
          <img src={logo} style={styles.logoLoader} alt="logo" />
        </div>
      </div>
    );
  }, [styles]);

  return (
    <AnimatedPage>
      <div
        ref={containerRef}
        style={styles.container}
        onClick={onContainerClick}
      >
        {LoaderComponent}
      </div>
    </AnimatedPage>
  );
};

export default LandingPage;
