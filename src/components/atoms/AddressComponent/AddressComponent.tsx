import { Typography } from "@mui/material";
import React, { CSSProperties } from "react";
import { useGlobal } from "../../../state/global/useGlobal";

interface AddressComponentProps {
  style?: CSSProperties;
}
const AddressComponent = (props: AddressComponentProps) => {
  const { data } = useGlobal();
  const { settings } = data;
  const { address, cap, city, nation, vat } = settings[0];
  const { style } = props;
  return (
    <Typography style={style}>
      {address}
      <br /> {cap} {city} - {nation} <br /> VAT {vat}
    </Typography>
  );
};

export default AddressComponent;
