import React, { useMemo } from "react";
import { useLandingPageLogic } from "./hooks/useLandingPageLogic";
import ScrollableLoader from "../../components/atoms/scrollableLoader/ScrollableLoader";
import logo from "../../assets/imgs/logo.png";
import AnimatedPage from "../../components/templates/AnimatedPage";
import LinearProgress from "@mui/material/LinearProgress";
import { NUM_FRAMES } from "./hooks/useLandingPagePageDataLoader";

interface ILandingPage {
  showModel: boolean;
}

const LandingPage = (props: ILandingPage) => {
  const { showModel } = props;
  const {
    containerRef,
    dimensions,
    images,
    scrollFinished,
    styles,
    onContainerClick,
    scrollUp,
    scrollDown,
    setScrollFinished,
  } = useLandingPageLogic(showModel);

  const Logo = useMemo(() => {
    return (
      <div style={styles.logoContainer}>
        <img src={logo} style={styles.logo} alt="logo" />
      </div>
    );
  }, [styles.logo, styles.logoContainer]);

  const LoaderComponent = useMemo(() => {
    return (
      <>
        {showModel ? (
          <>
            {Logo}
            <ScrollableLoader
              dimensions={dimensions}
              images={images}
              numFrames={NUM_FRAMES}
              scrollHeight={4000}
              scrollFinished={scrollFinished}
              scrollUp={scrollUp}
              scrollDown={scrollDown}
              setScrollFinished={setScrollFinished}
            />
          </>
        ) : (
          <div style={styles.containerLoader}>
            <div>
              <LinearProgress style={styles.linearProgress} />
            </div>
            <div style={styles.logoLoaderContainer}>
              <img src={logo} style={styles.logoLoader} alt="logo" />
            </div>
          </div>
        )}
      </>
    );
  }, [
    showModel,
    Logo,
    dimensions,
    images,
    scrollFinished,
    scrollUp,
    scrollDown,
    setScrollFinished,
    styles,
  ]);

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
