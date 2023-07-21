import React, { CSSProperties, useCallback } from "react";
import { useGlobal } from "../../../state/global/useGlobal";
import CustomTypography from "../CustomTypography/customTypography";
import { addressLatLngPosition } from "../../../utils";

interface AddressComponentProps {
  style?: CSSProperties;
}

const AddressComponent = (props: AddressComponentProps) => {
  const { data } = useGlobal();
  const { settings } = data!;
  const { address, cap, city, nation, vat } = settings;
  const { style } = props;

  const showInMapClicked = useCallback(() => {
    window.open(
      "https://maps.google.com?q=" +
        addressLatLngPosition[0] +
        "," +
        addressLatLngPosition[1]
    );
  }, []);

  return (
    <CustomTypography
      style={{ ...style, cursor: "pointer" }}
      onClick={showInMapClicked}
    >
      {address}
      <br /> {cap} {city} - {nation} <br /> VAT {vat}
    </CustomTypography>
  );
};

export default AddressComponent;
