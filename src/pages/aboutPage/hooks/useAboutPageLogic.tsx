import { IUseAboutPage } from "../types";
import { useGlobal } from "../../../state/global/useGlobal";
import { useAboutPageStyle } from "../styles";
import React, { useCallback, useMemo } from "react";
import CustomTypography from "../../../components/atoms/CustomTypography/customTypography";
import { useDimensions } from "../../../hooks/useDimensions";
import { Variant } from "@mui/material/styles/createTypography";
import { useNavigation } from "../../../navigation/useNavigation";
import { Paths } from "../../../navigation/types";

export const useAboutPageLogic = (): IUseAboutPage => {
  const { data } = useGlobal();
  const { about } = data!;
  const { image_top, image_bottom, rows } = about;
  const { screenSize } = useDimensions();
  const isSmall = screenSize === "sm" || screenSize === "xs";
  const styles = useAboutPageStyle();
  const { navigate } = useNavigation();

  const variants = useMemo((): Variant | undefined => {
    return isSmall ? "h2" : undefined;
  }, [isSmall]);

  const className = useMemo((): string => {
    return isSmall ? "textSmall" : "text";
  }, [isSmall]);

  const onTeamClick = useCallback(() => {
    navigate(Paths.Team);
  }, [navigate]);

  const OverlayComponent = () => {
    return (
      <div style={styles.overlayContainer} className={"container"}>
        <CustomTypography
          variant={variants}
          style={styles.text}
          fontWeight="bold"
          align="right"
          className={className}
        >
          Team
        </CustomTypography>
      </div>
    );
  };

  return {
    imageTop: image_top,
    imageBottom: image_bottom,
    rows,
    OverlayComponent,
    styles,
    onTeamClick,
  };
};
