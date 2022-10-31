import { useHomePageStyle } from "../styles";
import { useGlobal } from "../../../state/global/useGlobal";

export const useHomePageLogic = () => {
  const { data: reducerData } = useGlobal();
  const { home } = reducerData;

  const { img_background, data } = home[0];
  const styles = useHomePageStyle();

  return {
    img_background,
    data,
    styles,
  };
};
