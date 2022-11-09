import React, { useCallback, useMemo } from "react";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import { IPeopleRow, IPerson, ITeamComponent } from "./types";
import { useTeamComponent } from "./useTeamComponent";

const TeamComponent = (props: ITeamComponent) => {
  const {
    chunkPersonArray,
    initialState,
    rowsState,
    theme,
    isSmall,
    variants,
    resetRowsState,
    setState,
  } = useTeamComponent(props);

  const PeopleRow = (props: IPeopleRow) => {
    const { people, index } = props;

    const aDetailIsOpen = useMemo(() => {
      return rowsState[index].includes(true);
    }, [index]);

    const Detail = () => {
      return (
        <motion.div
          variants={variants}
          animate={aDetailIsOpen ? "open" : "closed"}
          style={{
            position: "absolute",
            flex: 1,
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: theme.palette.background.paper,
            visibility: aDetailIsOpen ? "visible" : "hidden",
          }}
          onClick={resetRowsState}
        >
          DETTAGLIO
        </motion.div>
      );
    };

    const Person = (props: IPerson) => {
      const { person, indexPerson } = props;
      const { img_thumbnail } = person;

      const openMyDetail = useMemo(() => {
        if (aDetailIsOpen) {
          return rowsState[index][indexPerson];
        }
        return false;
      }, [indexPerson]);

      const setDetail = useCallback(() => {
        const rowState = Array(3)
          .fill(false)
          .map((item, i) => {
            return indexPerson === i;
          });
        const newRowsState = initialState;
        newRowsState[index] = rowState;
        setState(newRowsState);
      }, [indexPerson]);

      if (aDetailIsOpen && !openMyDetail) {
        return <></>;
      }

      return (
        <Grid
          item
          xs={12}
          md={openMyDetail ? 12 : 4}
          mt={8}
          style={{
            backgroundColor: "yellow",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "40vh",
            position: "relative",
          }}
          onClick={!aDetailIsOpen && !isSmall ? setDetail : undefined}
        >
          {openMyDetail ? (
            <Detail />
          ) : (
            <img
              src={img_thumbnail.image}
              alt={img_thumbnail.image_alt}
              style={{ width: "50%", height: "100%" }}
            />
          )}
        </Grid>
      );
    };
    return (
      <>
        {people.map((person, index) => (
          <Person person={person} indexPerson={index} />
        ))}
      </>
    );
  };

  return (
    <div style={{ width: "100%", position: "relative" }}>
      <Grid container>
        {Object.keys(chunkPersonArray).map((_, index) => {
          const people = chunkPersonArray[index];
          return <PeopleRow people={people} index={index} />;
        })}
      </Grid>
    </div>
  );
};

export default TeamComponent;
