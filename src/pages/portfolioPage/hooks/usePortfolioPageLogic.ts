import { IUsePortfolioPage } from "../types";
import { usePortfolioPageStyle } from "../styles";

export const usePortfolioPageLogic = (): IUsePortfolioPage => {
  const styles = usePortfolioPageStyle();

  return {
    styles,
  };
};
