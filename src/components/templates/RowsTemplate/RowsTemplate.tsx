import { Grid } from "@mui/material";
import RowItem from "../../atoms/RowItem/rowItem";
import React from "react";
import { useRowsTemplateStyle } from "./styles";
import { RowsPropsType } from "./types";
import AboutTeamRowItem from "../../atoms/AboutTeamRowItem/AboutTeamRowItem";

const RowsTemplate = (props: RowsPropsType) => {
  const { type, rows } = props;
  const styles = useRowsTemplateStyle();

  const Row = (row: any, index: number) => {
    if (type === "aboutRow" || type === "teamRow") {
      return <AboutTeamRowItem index={index} {...row} />;
    }

    return (
      <Grid container style={styles.grid}>
        {row.items.map((item: any, index: any) => (
          <RowItem key={index} item={item} boxed={row.boxed} />
        ))}
      </Grid>
    );
  };

  return (
    <>
      {rows.map((row, index) => (
        <Row key={index} index={index} {...row} />
      ))}
    </>
  );
};

export default RowsTemplate;
