import { lightTheme as light } from "./lightTheme";
import { Theme } from "@mui/material";

export const useCustomTheme = ():
  | Partial<Theme>
  | ((outerTheme: Theme) => Theme) => {
  return light;
};
