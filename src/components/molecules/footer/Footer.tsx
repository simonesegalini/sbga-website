import React from "react";
import Box from "@mui/material/Box";
import { useFooterStyle } from "./styles";
import AddressComponent from "../../atoms/AddressComponent/AddressComponent";
import logo from "../../../assets/imgs/logo.png";
import { Grid } from "@mui/material";
import SocialButtons from "../../atoms/SocialButtons/SocialButtons";
import { useDimensions } from "../../../hooks/useDimensions";

const Footer = () => {
  const styles = useFooterStyle();
  const { isSmall } = useDimensions();

  const AddressContainer = (props: { hide: boolean }) => {
    const { isSmall } = useDimensions();
    const { hide } = props;
    if (hide) {
      return <></>;
    }

    return (
      <Grid item xs={12} md={6} mt={isSmall ? 4 : 0}>
        <Box component={"div"} style={styles.containerLogo}>
          <img alt="logo" src={logo} style={{ width: 300 }} />
        </Box>
        <Box component={"div"} mt={4}>
          <AddressComponent style={styles.address} />
        </Box>
      </Grid>
    );
  };
  return (
    <Grid container style={styles.container}>
      <AddressContainer hide={isSmall} />
      <Grid item xs={12} md={6} style={styles.rightContainer}>
        <SocialButtons />
      </Grid>
      <AddressContainer hide={!isSmall} />
    </Grid>
  );
};

export default Footer;
