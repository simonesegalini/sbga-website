import { IUseDesignPage } from "../types";
import { useGlobal } from "../../../state/global/useGlobal";
import { useDesignPageStyle } from "../styles";
import { Types } from "../../../schemas";

export const useDesignPageLogic = (): IUseDesignPage => {
  const { data } = useGlobal();
  const { image, rows } = data.data[0][Types.design];
  const styles = useDesignPageStyle();

  return {
    image,
    rows,
    styles,
  };
};
