import { Typography, TypographyProps } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import * as React from "react";

interface ICustomTypography extends TypographyProps {
  fontWeight?: "light" | "bold" | "bolder";
  component?: "span" | "div";
}

const CustomTypography = (props: ICustomTypography) => {
  const { fontWeight = "400", component, style, ...otherProps } = props;
  const theme = useTheme();
  const defaultColor = theme.palette.primary.light;

  return (
    <Typography
      {...otherProps}
      {...props}
      fontWeight={fontWeight}
      style={{
        color: defaultColor,
        ...style,
        fontStyle: "HelveticaNeue",
        lineHeight: 1.3,
      }}
      component={component ? component : "div"}
    />
  );
};

export default CustomTypography;
