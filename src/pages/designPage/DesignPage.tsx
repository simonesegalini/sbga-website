import React from "react";
import AnimatedPage from "../../components/templates/AnimatedPage";
import { Paths } from "../../navigation/types";
import { useDesignPageLogic } from "./hooks/useDesignPageLogic";
import RowsTemplate from "../../components/templates/RowsTemplate/RowsTemplate";

const DesignPage = () => {
  const { rows } = useDesignPageLogic();

  return (
    <AnimatedPage key={Paths.Architecture}>
      <>
        <RowsTemplate type="row" rows={rows} />
      </>
    </AnimatedPage>
  );
};

export default DesignPage;
