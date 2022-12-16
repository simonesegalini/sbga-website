import { Box, InputAdornment } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import React from "react";
import CustomTextfield from "../../../atoms/textfield/CustomTextfield";
import CustomButton from "../../../atoms/Button/CustomButton";
import { useDimensions } from "../../../../hooks/useDimensions";
import CustomTypography from "../../../atoms/CustomTypography/customTypography";
import { useEmailStyle } from "../styles";
import { useTheme } from "@mui/material/styles";

interface IDataScreen {
  error: boolean;
  formik: any;
  t: any;
  loading: boolean;
}

const DataScreen = (props: IDataScreen) => {
  const { error, formik, loading, t } = props;
  const { screenSize } = useDimensions();
  const isSmall = screenSize === "sm" || screenSize === "xs";
  const theme = useTheme();
  const styles = useEmailStyle(theme, isSmall);

  return (
    <form onSubmit={formik.handleSubmit}>
      <CustomTextfield
        fullWidth
        margin="normal"
        id="name"
        name="name"
        label={t("label.name")}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonOutlineIcon />
            </InputAdornment>
          ),
        }}
        value={formik.values.name}
        disabled={loading}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <CustomTextfield
        fullWidth
        margin="normal"
        id="email"
        name="email"
        label={t("label.email")}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MailOutlineIcon />
            </InputAdornment>
          ),
        }}
        value={formik.values.email}
        disabled={loading}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <CustomTextfield
        fullWidth
        margin="normal"
        id="message"
        name="message"
        label={t("label.message")}
        placeholder={t("label.writeMessage")}
        multiline
        rows={4}
        value={formik.values.message}
        disabled={loading}
        onChange={formik.handleChange}
        error={formik.touched.message && Boolean(formik.errors.message)}
        helperText={formik.touched.message && formik.errors.message}
      />
      {error && (
        <Box component="div" mt={2} flex={1}>
          <CustomTypography variant="body2" style={styles.text}>
            {t("label.AnError")}
          </CustomTypography>
        </Box>
      )}
      <Box component="div" mt={error ? 2 : isSmall ? 4 : 8}>
        <CustomButton style={{ width: "20vw" }} loading={loading}>
          {t("label.send")}
        </CustomButton>
      </Box>
    </form>
  );
};

export default DataScreen;
