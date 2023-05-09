import React, { useMemo, useState } from "react";
import { Grid } from "@mui/material";
import { ITeamComponent, TeamPerson } from "./types";
import PersonComponent from "../../atoms/Person/Person";
import Box from "@mui/material/Box";
import useTeamComponent from "./useTeamComponent";

const TeamComponent = (props: ITeamComponent) => {
  const { padding, rows } = useTeamComponent(props);

  const RowComponent = (props: { row: TeamPerson[] }) => {
    const { row } = props;
    const [personIdOpen, setPersonIdOpen] = useState<number | null>(null);
    const open = (personId: number) => {
      setPersonIdOpen(personId);
    };
    const close = () => {
      setPersonIdOpen(null);
    };

    return (
      <>
        {row.map((person) => (
          <React.Fragment key={person.id}>
            <PersonComponent
              person={person}
              setOpenDetail={open}
              setCloseDetail={close}
              openDetailIndex={personIdOpen}
            />
          </React.Fragment>
        ))}
      </>
    );
  };

  const Rows = useMemo(() => {
    return rows.map((row, index) => <RowComponent key={index} row={row} />);
  }, [RowComponent, rows]);

  return (
    <Box
      component="div"
      p={padding}
      style={{ width: "100%", position: "relative" }}
    >
      <Grid container spacing={3} rowSpacing={8}>
        {Rows}
      </Grid>
    </Box>
  );
};

export default TeamComponent;
