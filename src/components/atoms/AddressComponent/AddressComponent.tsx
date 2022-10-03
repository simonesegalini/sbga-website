import { Typography } from "@mui/material";
import React, { CSSProperties } from "react";

interface AddressComponentProps {
  style?: CSSProperties;
}
const AddressComponent = (props: AddressComponentProps) => {
  const { style } = props;
  return (
    <Typography style={style}>
      Via Ambrogio Spinola
      <br /> Building 8E <br /> 20149 Milan - Italy <br /> VAT IT 09599890960{" "}
    </Typography>
  );
};

export default AddressComponent;
