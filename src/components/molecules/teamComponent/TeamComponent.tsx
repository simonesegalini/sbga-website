import React from "react";
import { Grid } from "@mui/material";
import { ITeamComponent } from "./types";
import PersonComponent from "../../atoms/Person/Person";
import Box from "@mui/material/Box";
import useTeamComponent from "./useTeamComponent";

const TeamComponent = (props: ITeamComponent) => {
  const { padding,teamData, setOpenDetail, setCloseDetail } = useTeamComponent(props);

  return (
    <Box component="div" p={padding} style={{ width: "100%", position: "relative" }}>
      <Grid container spacing={3} rowSpacing={8}>
        {teamData.map((person, index) => (
          <React.Fragment key={index}>
            <PersonComponent
              person={person}
              setOpenDetail={setOpenDetail}
              setCloseDetail={setCloseDetail}
              index={index}
            />
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
};

export default TeamComponent;
