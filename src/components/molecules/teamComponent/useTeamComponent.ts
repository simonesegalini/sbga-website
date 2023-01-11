import { useDimensions } from "../../../hooks/useDimensions";
import { useCallback, useMemo, useState } from "react";
import { ITeamComponent, TeamPerson } from "./types";
import _ from "lodash";

const useTeamComponent = (props: ITeamComponent) => {
  const { team } = props;
  const { screenSize } = useDimensions();
  const isSmall = screenSize === "sm" || screenSize === "xs";
  const [index, setIndexOpen] = useState<number | null>(null);

  const padding = useMemo( () => {
    if(isSmall) {
      return 6
    }
    return 8
  }, [isSmall])

  const teamData = useMemo((): TeamPerson[] => {
    if (isSmall) {
      return team;
    }

    if (index === null) {
      return team.map((person) => ({
        ...person,
        open: false,
      }));
    }
    const bossToRemove = team.filter((t, i) => t.isBoss && i !== index);
    return _.difference(team, bossToRemove).map((person, i) => ({
      ...person,
      open: i === 0,
    }));
  }, [index, isSmall, team]);

  const setCloseDetail = useCallback(() => {
    setIndexOpen(null);
  }, []);

  const setOpenDetail = useCallback(
    (index: number) => {
      if (!teamData[index].isBoss) {
        return;
      }
      setIndexOpen(index);
    },
    [teamData]
  );


  return {
    padding,
    teamData,
    setOpenDetail,
    setCloseDetail,
  };
};

export default useTeamComponent;
