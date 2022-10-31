import { useCallback, useContext } from "react";
import { GlobalContext } from "./global.context";
import { SetData, SetLandingPageImages, SetLanguage } from "./global.types";
import {
  SET_FINISHED_SCROLLING,
  SET_HIDE_LANDING_PAGE,
  SET_IS_DATA_LOADED,
  SET_LANDING_PAGE_IMAGES,
  SET_LANGUAGE,
} from "./global.constants";

export function useGlobal() {
  const [
    {
      data,
      finishedScrolling,
      hideLandingPage,
      language,
      landingPageImages,
      isDataLoaded,
    },
    dispatch,
  ] = useContext(GlobalContext);

  const setLandingPageImages = useCallback(
    (payload: SetLandingPageImages) =>
      dispatch(SET_LANDING_PAGE_IMAGES, payload),
    [dispatch]
  );

  const setFinishedScrolling = useCallback(
    () => dispatch(SET_FINISHED_SCROLLING, null),
    [dispatch]
  );

  const setIsDataLoaded = useCallback(
    (payload: SetData) => dispatch(SET_IS_DATA_LOADED, payload),
    [dispatch]
  );

  const setLanguage = useCallback(
    (payload: SetLanguage) => dispatch(SET_LANGUAGE, payload),
    [dispatch]
  );

  const setHideLandingPage = useCallback(
    () => dispatch(SET_HIDE_LANDING_PAGE, null),
    [dispatch]
  );

  return {
    data,
    finishedScrolling,
    language,
    landingPageImages,
    hideLandingPage,
    isDataLoaded,
    setFinishedScrolling,
    setIsDataLoaded,
    setLanguage,
    setLandingPageImages,
    setHideLandingPage,
  };
}
