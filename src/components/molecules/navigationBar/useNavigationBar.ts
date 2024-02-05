import { useCallback, useEffect, useMemo, useState } from "react";
import { getNavbarButtons, NavButton } from "../../../config/config";
import { useNavigationBarStyle } from "./styles";
import { useLocation } from "react-router-dom";
import { Paths } from "../../../navigation/types";
import { useNavigation } from "../../../navigation/useNavigation";
import { useDimensions } from "../../../hooks/useDimensions";
import { useTheme } from "@mui/material/styles";

export const useNavigationBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const styles = useNavigationBarStyle(open);
  const theme = useTheme();

  const location = useLocation();
  const { screenSize } = useDimensions();
  const isSmall = screenSize === "sm" || screenSize === "xs";
  const { navigate } = useNavigation();
  const [colorButton, setColorButton] = useState(
    theme.palette.primary.contrastText
  );

  useEffect(() => {
    function handleMovement() {
      const lastPosition = window.scrollY;
      if (
        !document.title.includes("Team") &&
        colorButton !== theme.palette.primary.contrastText
      ) {
        setColorButton(theme.palette.primary.contrastText);
      }
      if (!document.title.includes("Team")) {
        return;
      }
      if (lastPosition > window.innerHeight) {
        setColorButton(theme.palette.primary.dark);
      } else {
        setColorButton(theme.palette.primary.contrastText);
      }
    }

    window.addEventListener("scroll", handleMovement);
    return () => window.removeEventListener("resize", handleMovement);
  }, [
    colorButton,
    theme.palette.primary.contrastText,
    theme.palette.primary.dark,
  ]);

  useEffect(() => {
    const ctr = document.getElementById("container");
    if (ctr && ctr.parentElement) {
      ctr.parentElement.style.height = "100%";
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "visible";
    if (open) {
      setColorButton(theme.palette.primary.contrastText);
    }
  }, [open, theme.palette.primary.contrastText]);

  const buttons = useMemo(() => {
    return getNavbarButtons().filter((btn) => btn.name !== "Home");
  }, []);

  const logoStyle = useMemo(() => {
    return isSmall ? styles.mobileLogo : styles.logo;
  }, [isSmall, styles]);

  const styleBar = useMemo(() => {
    return open
      ? {
          justifyContent: "flex-end",
          backgroundColor: "black",
        }
      : { justifyContent: "flex-end", backgroundColor: "transparent" };
  }, [open]);

  const animate = useMemo(() => {
    return open ? "opened" : "closed";
  }, [open]);

  const handleClickMenu = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const handleClickRoute = useCallback(
    (button: NavButton) => {
      setOpen(!open);
      navigate(button.path);
    },
    [navigate, open]
  );

  const goToHome = useCallback(() => {
    if (location.pathname !== Paths.Home) {
      open && setOpen(!open);
      navigate(Paths.Home);
    }
  }, [location.pathname, navigate, open]);

  return {
    buttons,
    isSmall,
    screenSize,
    open,
    styles,
    logoStyle,
    styleBar,
    animate,
    handleClickMenu,
    handleClickRoute,
    goToHome,
    colorButton,
  };
};
