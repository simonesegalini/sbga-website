import { useHomePageStyle } from "../styles";
import { useGlobal } from "../../../state/global/useGlobal";
import { useNavigation } from "../../../navigation/useNavigation";
import { useCallback } from "react";
import { Paths } from "../../../navigation/types";
import { useTranslation } from "react-i18next";

export const useHomePageLogic = () => {
  const { data: reducerData } = useGlobal();
  const { navigate } = useNavigation();
  const { t } = useTranslation();
  const { home } = reducerData!;

  const { img_thumbnail, categories } = home[0];

  const handleNavigation = useCallback(
    (path: Paths) => {
      navigate(path);
    },
    [navigate]
  );

  const styles = useHomePageStyle();

  return {
    img_thumbnail,
    categories,
    styles,
    t,
    handleNavigation,
  };
};
