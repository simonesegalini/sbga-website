import React, { useCallback, useMemo, useState } from "react";
import { Grid } from "@mui/material";
import { ITeamComponent, TeamPerson } from "./types";
import PersonComponent from "../../atoms/Person/Person";
import _ from "lodash";
import { useDimensions } from "../../../hooks/useDimensions";

const TeamComponent = (props: ITeamComponent) => {
  const { team } = props;
  const { isSmall } = useDimensions();
  const [index, setIndexOpen] = useState<number | null>(null);

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

  return (
    <div style={{ width: "100%", position: "relative" }}>
      <Grid container>
        {teamData.map((person, index) => (
          <PersonComponent
            key={index}
            person={person}
            setOpenDetail={setOpenDetail}
            setCloseDetail={setCloseDetail}
            index={index}
          />
        ))}
      </Grid>
    </div>
  );
};

export default TeamComponent;
