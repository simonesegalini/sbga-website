import React from "react";
import AnimatedPage from "../../components/templates/AnimatedPage";
import { Paths } from "../../navigation/types";
import { usePortfolioPageLogic } from "./hooks/usePortfolioPageLogic";
import HeaderImageComponent from "../../components/atoms/HeaderImageComponent/headerImageComponent";
import { Row } from "../../schemas";
import RowItem from "../../components/atoms/RowItem/rowItem";
import { Grid } from "@mui/material";

const PortfolioPage = () => {
  const { image, rows, styles } = usePortfolioPageLogic();

  const Rows = () => {
    const Row = (row: Row) => {
      return (
        <Grid container style={styles.grid}>
          {row.items.map((item, index) => (
            <RowItem key={index} {...item} />
          ))}
        </Grid>
      );
    };

    return (
      <>
        {rows.map((row, index) => (
          <Row key={index} {...row} />
        ))}
      </>
    );
  };

  return (
    <AnimatedPage key={Paths.Portfolio}>
      <div style={{ height: "fit-content" }}>
        <HeaderImageComponent image={image} showLogo={false} />
        <Rows />
      </div>
    </AnimatedPage>
  );
};

export default PortfolioPage;
