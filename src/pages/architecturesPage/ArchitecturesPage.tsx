import React from "react";
import AnimatedPage from "../../components/templates/AnimatedPage";
import { Paths } from "../../navigation/types";
import { useArchitecturesPageLogic } from "./hooks/useArchitecturesPageLogic";
import RowsTemplate from "../../components/templates/RowsTemplate/RowsTemplate";

const ArchitecturesPage = () => {
  const { rows } = useArchitecturesPageLogic();

  return (
    <AnimatedPage key={Paths.Architecture}>
      <>
        <RowsTemplate type="row" rows={rows} />
      </>
    </AnimatedPage>
  );
};

export default ArchitecturesPage;
