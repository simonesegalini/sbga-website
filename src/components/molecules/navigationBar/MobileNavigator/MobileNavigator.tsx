import * as React from "react";
import MenuItem from "../../../atoms/MenuItem/MenuItem";
import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import { Buttons, NavButton } from "../../../../config/config";
import { useMobileNavigatorStyle } from "./styles";
import { useTheme } from "@mui/material/styles";
import SocialButtons from "../../../atoms/SocialButtons/SocialButtons";
import AddressComponent from "../../../atoms/AddressComponent/AddressComponent";
import { Paths } from "../../../../navigation/types";

interface MobileNavigatorProps {
  buttons: NavButton[];
  handleClickRoute: (button: NavButton) => void;
}

const MobileNavigator = (props: MobileNavigatorProps) => {
  const { buttons, handleClickRoute } = props;
  const theme = useTheme();
  const styles = useMobileNavigatorStyle(theme);

  const onLogoClick = () => {
    handleClickRoute({
      name: Buttons.Home,
      path: Paths.Home,
    });
  };

  return (
    <Box style={styles.container}>
      <Box style={styles.buttonContainer}>
        {buttons.map((button) => (
          <React.Fragment key={button.name.toString()}>
            <Box style={{ marginTop: 16 }}>
              <MenuItem
                title={button.name}
                onClick={() => handleClickRoute(button)}
              />
            </Box>
          </React.Fragment>
        ))}
      </Box>
      <Divider style={styles.divider} />
      <Box style={styles.bottomContainer}>
        <Box style={styles.socialBtnContainer}>
          <SocialButtons />
        </Box>
        <Box style={styles.infoContainer}>
          <Box style={styles.addressContainer}>
            <AddressComponent style={styles.address} />
          </Box>
          <Box style={styles.logoContainer}>
            <img
              src={"imgs/logo.png"}
              style={styles.logo}
              onClick={onLogoClick}
              alt="logo"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MobileNavigator;
