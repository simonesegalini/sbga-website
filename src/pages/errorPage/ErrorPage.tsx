import { useErrorPageStyle } from "./styles";
import { memo, useMemo } from "react";
import AnimatedPage from "../../components/templates/AnimatedPage";
import logo from "../../assets/imgs/logo.png";
import { Variant } from "@mui/material/styles/createTypography";
import { useDimensions } from "../../hooks/useDimensions";
import CustomTypography from "../../components/atoms/CustomTypography/customTypography";

const ErrorPage = () => {
  const { isSmall } = useDimensions();
  const styles = useErrorPageStyle();

  const variant = useMemo((): Variant => {
    return isSmall ? "body1" : "h6";
  }, [isSmall]);

  const Logo = memo(() => {
    return (
      <div style={styles.logoContainer}>
        <img src={logo} style={styles.logo} alt="logo" />
      </div>
    );
  });
  return (
    <AnimatedPage style={styles.container}>
      <>
        <Logo />
        <CustomTypography variant={variant} fontWeight="light">
          C'è stato un problema, riprovare.
        </CustomTypography>
      </>
    </AnimatedPage>
  );
};

export default ErrorPage;
