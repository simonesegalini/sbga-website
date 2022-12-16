import { IUseServicesPage } from "../types";
import { useGlobal } from "../../../state/global/useGlobal";
import { useServicesPageStyle } from "../styles";
import { Types } from "../../../schemas";

export const useServicesPageLogic = (): IUseServicesPage => {
  const { data } = useGlobal();
  const { image, rows } = data.data[0][Types.services];
  const styles = useServicesPageStyle();

  return {
    image,
    rows,
    styles,
  };
};
