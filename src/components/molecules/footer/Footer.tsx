import React from "react";
import Box from "@mui/material/Box";
import { useFooterStyle } from "./styles";
import AddressComponent from "../../atoms/AddressComponent/AddressComponent";
import { Grid } from "@mui/material";
import SocialButtons from "../../atoms/SocialButtons/SocialButtons";
import { useDimensions } from "../../../hooks/useDimensions";
import { Paths } from "../../../navigation/types";
import { useNavigation } from "../../../navigation/useNavigation";

const Footer = () => {
  const styles = useFooterStyle();
  const { screenSize } = useDimensions();
  const isSmall = screenSize === "sm" || screenSize === "xs";
  const { navigate } = useNavigation();

  const onLogoClick = () => {
    navigate(Paths.Home);
  };

  const AddressContainer = (props: { hide: boolean }) => {
    const { hide } = props;
    if (hide) {
      return <></>;
    }

    return (
      <Grid item xs={12} md={6} mt={isSmall ? 4 : 0}>
        <Box component={"div"} style={styles.containerLogo}>
          <img
            alt="logo"
            src={"imgs/logo.png"}
            style={{
              width: isSmall ? 200 : 300,
              cursor: "pointer",
            }}
            onClick={onLogoClick}
          />
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
