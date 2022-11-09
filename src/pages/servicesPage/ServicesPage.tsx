import React from "react";
import AnimatedPage from "../../components/templates/AnimatedPage";
import { Paths } from "../../navigation/types";
import { useServicesPageLogic } from "./hooks/useServicesPageLogic";
import HeaderImageComponent from "../../components/atoms/HeaderImageComponent/headerImageComponent";
import RowsTemplate from "../../components/templates/RowsTemplate/RowsTemplate";

const ServicesPage = () => {
  const { image, rows } = useServicesPageLogic();

  return (
    <AnimatedPage key={Paths.Architecture}>
      <>
        <HeaderImageComponent image={image} showLogo={false} />
        <RowsTemplate type="row" rows={rows} />
      </>
    </AnimatedPage>
  );
};

export default ServicesPage;
