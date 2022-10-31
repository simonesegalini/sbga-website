import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Box from "@mui/material/Box";
import { useDimensions } from "../../../hooks/useDimensions";
import { useSocialButtonsStyle } from "./styles";

const SocialButtons = () => {
  const { screenSize } = useDimensions();
  const styles = useSocialButtonsStyle(screenSize);

  return (
    <Box component="div">
      <FacebookIcon style={{ ...styles.icon, marginRight: 8 }} />
      <InstagramIcon style={{ ...styles.icon, marginRight: 8 }} />
      <LinkedInIcon style={styles.icon} />
    </Box>
  );
};

export default SocialButtons;
