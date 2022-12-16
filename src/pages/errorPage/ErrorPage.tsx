import { useErrorPageStyle } from "./styles";
import { memo, useMemo } from "react";
import AnimatedPage from "../../components/templates/AnimatedPage";
import { Variant } from "@mui/material/styles/createTypography";
import { useTranslation } from "react-i18next";
import CustomTypography from "../../components/atoms/CustomTypography/customTypography";
import { useDimensions } from "../../hooks/useDimensions";

const ErrorPage = () => {
  const { screenSize } = useDimensions();
  const isSmall = screenSize === "sm" || screenSize === "xs";
  const styles = useErrorPageStyle();
  const { t } = useTranslation();

  const variant = useMemo((): Variant => {
    return isSmall ? "body1" : "h6";
  }, [isSmall]);

  const Logo = memo(() => {
    return (
      <div style={styles.logoContainer}>
        <img src={"imgs/logo.png"} style={styles.logo} alt="logo" />
      </div>
    );
  });
  return (
    <AnimatedPage style={styles.container}>
      <>
        <Logo />
        <CustomTypography variant={variant} fontWeight="light">
          {t("label.tryAgain")}
        </CustomTypography>
      </>
    </AnimatedPage>
  );
};

export default ErrorPage;
