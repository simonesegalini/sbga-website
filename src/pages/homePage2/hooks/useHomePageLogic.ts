import { useHomePageStyle } from "../styles";
import { useGlobal } from "../../../state/global/useGlobal";
import { useNavigation } from "../../../navigation/useNavigation";
import { useCallback, useEffect, useRef } from "react";
import { Paths } from "../../../navigation/types";
import { useTranslation } from "react-i18next";
import { usePageBottom } from "../../../hooks/usePageBottom";

export const useHomePageLogic = () => {
  const { data: reducerData } = useGlobal();
  const { navigate } = useNavigation();
  const { t } = useTranslation();
  const { home } = reducerData!;
  const { img_thumbnail, categories } = home[0];
  // const reachedBottom = usePageBottom();
  // const isReached = useRef(false);

  const handleNavigation = useCallback(
    (path: Paths) => {
      navigate(path);
    },
    [navigate]
  );

  // useEffect( () => {
  //   if(isReached.current) {
  //     return;
  //   }
  //   if(reachedBottom && !isReached.current) {
  //     isReached.current = true;
  //     window.scrollTo(0, 0)
  //     handleNavigation(Paths.Portfolio)
  //   }
  // }, [handleNavigation, reachedBottom])

  return {
    img_thumbnail,
    categories,
    t,
    handleNavigation,
  };
};
