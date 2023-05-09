import React from "react";
import { Grid } from "@mui/material";
import { TeamPerson } from "../../molecules/teamComponent/types";
import usePersonComponent from "./usePersonComponent";

export interface IPerson {
  person: TeamPerson;
  openDetailIndex: number | null;
  setOpenDetail: (personId: number) => void;
  setCloseDetail: () => void;
}

const PersonComponent = (props: IPerson) => {
  const {
    Detail,
    Image,
    gridItemDimension,
    styles,
    imOpen,
    otherElementInRowIsOpen,
    onProfileCardClick,
  } = usePersonComponent(props);

  if (otherElementInRowIsOpen) {
    return <></>;
  }

  return (
    <Grid item xs={12} md={gridItemDimension} style={styles.gridItem}>
      {imOpen ? (
        <Detail />
      ) : (
        <div
          onClick={onProfileCardClick}
          style={{
            ...styles.imgContainer,
            cursor: "pointer",
          }}
        >
          {Image}
        </div>
      )}
    </Grid>
  );
};

export default PersonComponent;
