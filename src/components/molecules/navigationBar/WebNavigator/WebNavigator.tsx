import Box from "@mui/material/Box";
import * as React from "react";
import MenuItem from "../../../atoms/MenuItem/MenuItem";
import { NavButton } from "../../../../config/config";
import { useWebNavigatorStyle } from "./styles";
import AddressComponent from "../../../atoms/AddressComponent/AddressComponent";
import SocialButtons from "../../../atoms/SocialButtons/SocialButtons";
import { useDimensions } from "../../../../hooks/useDimensions";
import { useTheme } from "@mui/material/styles";

interface WebNavigatorProps {
  buttons: NavButton[];
  handleClickRoute: (button: NavButton) => void;
}

const WebNavigator = (props: WebNavigatorProps) => {
  const { buttons, handleClickRoute } = props;
  const theme = useTheme();
  const { screenSize } = useDimensions();
  const styles = useWebNavigatorStyle(theme, screenSize);

  return (
    <Box style={styles.container}>
      <Box style={styles.leftContainer}>
        <Box>
          <Box>
            <AddressComponent style={styles.address} />
          </Box>
          <Box style={styles.socialBtnContainer}>
            <SocialButtons />
          </Box>
        </Box>
      </Box>
      <Box style={styles.rightContainer}>
        {buttons.map((button, index) => (
          <React.Fragment key={button.name.toString()}>
            <MenuItem
              title={button.name}
              onClick={() => {
                handleClickRoute(button);
              }}
            />
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default WebNavigator;
