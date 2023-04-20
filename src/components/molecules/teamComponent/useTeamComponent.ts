import { useDimensions } from "../../../hooks/useDimensions";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ITeamComponent, TeamComponentState, TeamPerson } from "./types";
import _ from "lodash";
import { chunkArray } from "../../../utils";

const initialState: TeamComponentState = { index: null, person: null };

const useTeamComponent = (props: ITeamComponent) => {
  const { team } = props;
  const { screenSize } = useDimensions();
  const isSmall = screenSize === "sm" || screenSize === "xs";
  const [state, setState] = useState(initialState);

  useEffect(() => {
    console.log("STATE -> ", state);
  }, [state]);

  const rows = useMemo(() => {
    if (isSmall) {
      return;
    }
    return chunkArray(team, 3);
  }, [isSmall, team]);

  const padding = useMemo(() => {
    if (isSmall) {
      return 6;
    }
    return 8;
  }, [isSmall]);

  const teamData = useMemo((): TeamPerson[] => {
    if (isSmall) {
      return team;
    }

    if (state.index === null) {
      return team.map((person) => ({
        ...person,
        open: false,
      }));
    }
    const rowWhereIsElement = Math.trunc(state.index / 3);
    let idsToRemove: number[] = [];
    rows?.forEach((row, i) => {
      if (i !== rowWhereIsElement) {
        return;
      }
      idsToRemove = row
        .filter((p) => p.id !== state.person?.id)
        .map((p) => p.id);
    });

    const personsToRemove = team.filter((t) => idsToRemove.includes(t.id));
    return _.difference(team, personsToRemove).map((person) => ({
      ...person,
      open: person.id === state.person?.id,
    }));
  }, [isSmall, rows, team, state]);

  const setCloseDetail = useCallback(() => {
    setState(initialState);
  }, []);

  const setOpenDetail = useCallback((index: number, person: TeamPerson) => {
    setState({ index, person });
  }, []);

  return {
    padding,
    teamData,
    setOpenDetail,
    setCloseDetail,
  };
};

export default useTeamComponent;
