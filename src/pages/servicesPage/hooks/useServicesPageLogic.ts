import { IUseServicesPage } from "../types";
import { useGlobal } from "../../../state/global/useGlobal";
import { useServicesPageStyle } from "../styles";

export const useServicesPageLogic = (): IUseServicesPage => {
  const { data } = useGlobal();
  const { services } = data.data[0];
  const { image, rows } = services;
  const styles = useServicesPageStyle();

  return {
    image,
    rows,
    styles,
  };
};
