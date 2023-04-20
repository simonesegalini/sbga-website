import React from "react";
import { Grid } from "@mui/material";
import { TeamPerson } from "../../molecules/teamComponent/types";
import usePersonComponent from "./usePersonComponent";

export interface IPerson {
  person: TeamPerson;
  index: number;
  setOpenDetail: (index: number, person: TeamPerson) => void;
  setCloseDetail: (index: number) => void;
}

const PersonComponent = (props: IPerson) => {
  const {
    isBoss,
    Detail,
    Image,
    gridItemDimension,
    styles,
    openDetail,
    onProfileCardClick,
  } = usePersonComponent(props);

  return (
    <Grid item xs={12} md={gridItemDimension} style={styles.gridItem}>
      {openDetail ? (
        <Detail />
      ) : (
        <div
          onClick={onProfileCardClick}
          style={{
            ...styles.imgContainer,
            cursor: isBoss ? "pointer" : undefined,
          }}
        >
          {Image}
        </div>
      )}
    </Grid>
  );
};

export default PersonComponent;
