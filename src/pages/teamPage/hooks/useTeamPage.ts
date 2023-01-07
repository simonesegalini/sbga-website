import { IUseTeamPage } from "../types";
import { useGlobal } from "../../../state/global/useGlobal";
import { useTeamPageStyle } from "../styles";
import { useMemo } from "react";
import { TeamPerson } from "../../../components/molecules/teamComponent/types";

export const useTeamPage = (): IUseTeamPage => {
  const { data } = useGlobal();
  const { team } = data!;
  const { image, rows } = team;
  const styles = useTeamPageStyle();

  const teamData = useMemo((): TeamPerson[] => {
    return team.data.map((d) => ({ ...d, open: false }));
  }, [team]);

  return {
    image,
    data: teamData,
    rows,
    styles,
  };
};
