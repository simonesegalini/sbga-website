import React, { useCallback } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useDimensions } from "../../../hooks/useDimensions";
import { useSocialButtonsStyle } from "./styles";
import { useGlobal } from "../../../state/global/useGlobal";

type AvailableSocial = "instagram" | "facebook" | "linkedin";

const SocialButtons = () => {
  const { data } = useGlobal();
  const { settings } = data!;
  const { link_facebook, link_instagram, link_linkedin } = settings;
  const { screenSize } = useDimensions();
  const styles = useSocialButtonsStyle(screenSize);

  const openSocial = useCallback(
    (social: AvailableSocial) => {
      const urlSocial = (social: AvailableSocial) => {
        switch (social) {
          case "facebook":
            return link_facebook;
          case "linkedin":
            return link_linkedin;
          case "instagram":
            return link_instagram;
          default:
            return null;
        }
      };

      const url = urlSocial(social);
      if (!url) {
        return;
      }
      window.open(url, "_blank", "noopener,noreferrer");
    },
    [link_facebook, link_instagram, link_linkedin]
  );

  return (
    <>
      <InstagramIcon
        style={{ ...styles.icon, marginRight: 8 }}
        onClick={() => openSocial("instagram")}
      />
      <LinkedInIcon
        style={styles.icon}
        onClick={() => openSocial("linkedin")}
      />
    </>
  );
};

export default SocialButtons;
