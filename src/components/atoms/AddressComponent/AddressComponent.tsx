import React, { CSSProperties, useCallback } from "react";
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

  const showInMapClicked = useCallback(() => {
    window.open(
      "https://www.google.com/maps/place/SBGA+%7C+BLENGINI+GHIRARDELLI/@45.4532824,9.164343,19.3z/data=!4m6!3m5!1s0x4786c17208a250f3:0x50759b2f41c1bcc5!8m2!3d45.4534072!4d9.1649784!16s%2Fg%2F11d_9j_8v8?entry=ttu"
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
