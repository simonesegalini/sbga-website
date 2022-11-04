import { IUsePortfolioPage } from "../types";
import { usePortfolioPageStyle } from "../styles";
import { useGlobal } from "../../../state/global/useGlobal";

export const usePortfolioPageLogic = (): IUsePortfolioPage => {
  const { data } = useGlobal();
  const { architectures } = data.data[0];
  const { image, rows } = architectures;
  const styles = usePortfolioPageStyle();

  return {
    image,
    rows,
    styles,
  };
};
