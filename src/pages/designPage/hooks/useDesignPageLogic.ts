import { IUseDesignPage } from "../types";
import { useGlobal } from "../../../state/global/useGlobal";
import { useDesignPageStyle } from "../styles";

export const useDesignPageLogic = (): IUseDesignPage => {
  const { data } = useGlobal();
  const { design } = data.data[0];
  const { image, rows } = design;
  const styles = useDesignPageStyle();

  return {
    image,
    rows,
    styles,
  };
};
