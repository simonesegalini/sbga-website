import { Style } from "../../globalTypes";

export const usePortfolioPageStyle = (): Style => {
  return {
    container: {
      width: "100%",
      height: "100vh",
      backgroundColor: "lightgray",
    },
    rowContainer: {
      height: "70vh",
      display: "flex",
    },
    grid: {
      display: "flex",
      height: "fit-content",
    },
  };
};
