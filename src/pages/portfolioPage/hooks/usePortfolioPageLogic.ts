import { IUsePortfolioPage } from "../types";
import { usePortfolioPageStyle } from "../styles";
import { useGlobal } from "../../../state/global/useGlobal";
import { Types } from "../../../schemas";

export const usePortfolioPageLogic = (): IUsePortfolioPage => {
  const { data } = useGlobal();
  const { image, rows } = data![Types.portfolio];
  const styles = usePortfolioPageStyle();

  return {
    image,
    rows,
    styles,
  };
};
