import { IUseArchitecturesPage } from "../types";
import { useGlobal } from "../../../state/global/useGlobal";
import { useArchitecturesPageStyle } from "../styles";

export const useArchitecturesPageLogic = (): IUseArchitecturesPage => {
  const { data } = useGlobal();
  const { architectures } = data.data[0];
  const { image, rows } = architectures;
  const styles = useArchitecturesPageStyle();

  return {
    image,
    rows,
    styles,
  };
};
