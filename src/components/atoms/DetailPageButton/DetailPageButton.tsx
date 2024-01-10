import React, { CSSProperties } from "react";
import { useDetailPageButtonStyle } from "./style";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CustomTypography from "../CustomTypography/customTypography";
import { getSubtitleFromTypes } from "../../../utils";
import { Types } from "../../../schemas";

interface DetailPageButtonProps {
  style?: CSSProperties;
  label?: string;
  title?: string;
  types?: Types[];
  onClick?: () => void;
}

const DetailPageButton = (props: DetailPageButtonProps) => {
  const { style, label, title, types, onClick } = props;
  const theme = useTheme();
  const styles = useDetailPageButtonStyle(theme);
  return (
    <Box style={{ ...styles.button, ...props.style }} onClick={onClick}>
      <CustomTypography style={styles.txt} fontWeight={"light"}>
        {label?.toUpperCase()}
      </CustomTypography>
      <Box mt={0.5} mb={0.5}>
        <CustomTypography style={styles.txtTitle} fontWeight={"bold"}>
          {title?.toUpperCase()}
        </CustomTypography>
      </Box>
      <CustomTypography style={styles.txtType} fontWeight={"bolder"}>
        {types && getSubtitleFromTypes(types).toUpperCase()}
      </CustomTypography>
    </Box>
  );
};

export default DetailPageButton;
