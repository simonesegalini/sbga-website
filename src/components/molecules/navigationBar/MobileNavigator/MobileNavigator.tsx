import * as React from "react";
import MenuItem from "../../../atoms/MenuItem/MenuItem";
import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import { NavButton } from "../../../../config/config";
import { useMobileNavigatorStyle } from "./styles";
import { useTheme } from "@mui/material/styles";
import SocialButtons from "../../../atoms/SocialButtons/SocialButtons";
import AddressComponent from "../../../atoms/AddressComponent/AddressComponent";
import logo from "../../../../assets/imgs/logo.png";

interface MobileNavigatorProps {
  buttons: NavButton[];
  handleClickRoute: (button: NavButton) => void;
}

const MobileNavigator = (props: MobileNavigatorProps) => {
  const { buttons, handleClickRoute } = props;
  const theme = useTheme();
  const styles = useMobileNavigatorStyle(theme);

  return (
    <Box style={styles.container}>
      <>
        {buttons.map((button) => (
          <React.Fragment key={button.name.toString()}>
            <MenuItem
              title={button.name}
              onClick={() => handleClickRoute(button)}
            />
          </React.Fragment>
        ))}
      </>
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
            <img src={logo} style={styles.logo} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MobileNavigator;
