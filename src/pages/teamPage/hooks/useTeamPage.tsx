import { IUseTeamPage } from "../types";
import { useGlobal } from "../../../state/global/useGlobal";
import { useTeamPageStyle } from "../styles";

export const useTeamPage = (): IUseTeamPage => {
  const { data } = useGlobal();
  const { team } = data.data[0];
  const { image, rows } = team;
  const styles = useTeamPageStyle();

  return {
    image,
    people: team.data,
    rows,
    styles,
  };
};
