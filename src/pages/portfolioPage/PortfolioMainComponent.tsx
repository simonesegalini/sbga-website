import HeaderImageComponent from "../../components/atoms/HeaderImageComponent/headerImageComponent";
import RowsTemplate from "../../components/templates/RowsTemplate/RowsTemplate";
import React from "react";
import { usePortfolioPageLogic } from "./hooks/usePortfolioPageLogic";

interface IPortfolioMainComponent {
  removeHeader?: boolean;
}

const PortfolioMainComponent = (props: IPortfolioMainComponent) => {
  const { removeHeader = false } = props;
  const { image, rows } = usePortfolioPageLogic();

  return (
    <>
      {removeHeader ? (
        <></>
      ) : (
        <HeaderImageComponent image={image} showLogo={false} />
      )}
      <RowsTemplate type="row" rows={rows} />
    </>
  );
};

export default PortfolioMainComponent;
