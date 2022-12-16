import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import { useDimensions } from "../../../../hooks/useDimensions";
import CustomTypography from "../../../atoms/CustomTypography/customTypography";

const SuccessScreen = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { screenSize } = useDimensions();
  const isSmall = screenSize === "sm" || screenSize === "xs";
  const defaultColor = theme.palette.primary.light;
  const dimension = isSmall ? "100px" : "150px";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DoneIcon
        style={{ height: dimension, width: dimension, color: defaultColor }}
      />
      <CustomTypography
        component="div"
        variant="body2"
        style={{ marginTop: 24 }}
      >
        {t("label.successSendMail")}
      </CustomTypography>
      <CustomTypography
        component="div"
        variant="body2"
        style={{ marginTop: 4 }}
      >
        {t("label.thankYou")}!
      </CustomTypography>
    </div>
  );
};

export default SuccessScreen;
