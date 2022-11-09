import { useRowsTemplateStyle } from "./styles";

export const useRowsTemplateLogic = () => {
  const styles = useRowsTemplateStyle();

  return {
    styles,
  };
};
