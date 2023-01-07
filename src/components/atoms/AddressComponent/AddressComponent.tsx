import React, { CSSProperties } from "react";
import { useGlobal } from "../../../state/global/useGlobal";
import CustomTypography from "../CustomTypography/customTypography";

interface AddressComponentProps {
  style?: CSSProperties;
}

const AddressComponent = (props: AddressComponentProps) => {
  const { data } = useGlobal();
  const { settings } = data!;
  const { address, cap, city, nation, vat } = settings;
  const { style } = props;
  return (
    <CustomTypography style={style}>
      {address}
      <br /> {cap} {city} - {nation} <br /> VAT {vat}
    </CustomTypography>
  );
};

export default AddressComponent;
