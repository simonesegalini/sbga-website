import * as React from "react";
import Box from "@mui/material/Box";
import { useNavigationBar } from "./useNavigationBar";
import MButton from "../../atoms/MenuButton/MButton";
import logo from "../../../assets/imgs/logo.png";
import MobileNavigator from "./MobileNavigator/MobileNavigator";
import WebNavigator from "./WebNavigator/WebNavigator";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useRef } from "react";
import useContainerDimensions from "../../../hooks/useContainerDimensions/useContainerDimensions";

const NavigationBar: React.FC = () => {
  const {
    buttons,
    screenSize,
    open,
    styles,
    logoStyle,
    styleBar,
    animate,
    handleClickMenu,
    handleClickRoute,
    goToHome,
  } = useNavigationBar();
  const theme = useTheme();

  const NavBarHeader = () => {
    return (
      <motion.header
        id="navbar-header"
        style={{ ...styles.navbarHeaderContainer, ...styleBar }}
      >
        {open && (
          <img src={logo} style={logoStyle} onClick={goToHome} alt="logo" />
        )}
        <Box style={styles.buttonContainer}>
          <MButton
            isOpen={open}
            onClick={handleClickMenu}
            strokeWidth="1.5"
            color={theme.palette.primary.contrastText}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            width="32"
            height="24"
          />
        </Box>
      </motion.header>
    );
  };

  const menuVariants = {
    opened: {
      top: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0,
      },
    },
    closed: {
      top: "-100vh",
      opacity: 0,
      transition: {
        duration: 0.5,
        delay: 0,
      },
    },
  };

  const containerRef = useRef(null);
  const { height } = useContainerDimensions(containerRef);

  return (
    <>
      <NavBarHeader />
      <motion.nav
        style={styles.navbar}
        initial={false}
        variants={menuVariants}
        animate={animate}
        custom={height}
        ref={containerRef}
      >
        <Box component="div" id="container" style={styles.container}>
          {screenSize === "sm" ? (
            <MobileNavigator
              buttons={buttons}
              handleClickRoute={handleClickRoute}
            />
          ) : (
            <WebNavigator
              buttons={buttons}
              handleClickRoute={handleClickRoute}
            />
          )}
        </Box>
      </motion.nav>
    </>
  );
};

export default NavigationBar;
