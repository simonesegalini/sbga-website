import { createTheme, Theme } from "@mui/material";

const PRIMARY = "#f4f0f0";
const ERROR = "#b00020";

export const lightTheme: Partial<Theme> | ((outerTheme: Theme) => Theme) =
  createTheme({
    palette: {
      primary: {
        contrastText: "#f4f0f0",
        dark: "#2c2c2c",
        light: "#f4f0f0",
        main: PRIMARY,
      },
      secondary: {
        contrastText: "#2c2c2c",
        dark: "rgb(86, 86, 86)",
        main: PRIMARY,
      },
      error: {
        main: ERROR,
      },
      background: { default: "rgb(30, 30, 30)", paper: "rgb(244, 240, 240)" },
      mode: "light",
    },
    components: {
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: PRIMARY,
          },
        },
      },
    },
  });
