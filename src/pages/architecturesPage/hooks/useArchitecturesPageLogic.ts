import { IUseArchitecturesPage } from "../types";
import { useGlobal } from "../../../state/global/useGlobal";
import { useArchitecturesPageStyle } from "../styles";
import { Types } from "../../../schemas";

export const useArchitecturesPageLogic = (): IUseArchitecturesPage => {
  const { data } = useGlobal();
  const { image, rows } = data.data[0][Types.architectures];
  const styles = useArchitecturesPageStyle();

  return {
    image,
    rows,
    styles,
  };
};
