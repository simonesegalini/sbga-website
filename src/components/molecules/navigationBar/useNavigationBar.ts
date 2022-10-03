import { useCallback, useEffect, useMemo, useState } from "react";
import { getNavbarButtons, NavButton } from "../../../config/config";
import { useNavigationBarStyle } from "./styles";
import { useLocation } from "react-router-dom";
import { Paths } from "../../../navigation/types";
import { useNavigation } from "../../../navigation/useNavigation";
import { useDimensions } from "../../../hooks/useDimensions";

export const useNavigationBar = () => {
  const styles = useNavigationBarStyle();
  const buttons = getNavbarButtons().filter((btn) => btn.name !== "Home");
  const location = useLocation();
  const { screenSize } = useDimensions();
  const { navigate } = useNavigation();
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const ctr = document.getElementById("container");
    if (ctr && ctr.parentElement) {
      ctr.parentElement.style.height = "100%";
    }
  }, []);

  const logoStyle = useMemo(() => {
    return screenSize === "sm" ? styles.mobileLogo : styles.logo;
  }, [screenSize, styles]);

  const styleBar = useMemo(() => {
    return open
      ? {
          justifyContent: "space-between",
          paddingBottom: 0,
          backgroundColor: "black",
        }
      : { justifyContent: "flex-end", backgroundColor: "transparent" };
  }, [open]);

  const animate = useMemo(() => {
    return open ? "opened" : "closed";
  }, [open]);

  const handleClickMenu = useCallback(() => {
    document.body.style.overflowY = !open ? "hidden" : "visible";
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
    screenSize,
    open,
    styles,
    logoStyle,
    styleBar,
    animate,
    handleClickMenu,
    handleClickRoute,
    goToHome,
  };
};
