import { Style } from "../../globalTypes";
import { useTheme } from "@mui/material/styles";

export const useTeamPageStyle = (): Style => {
  const theme = useTheme();
  return {
    container: {
      backgroundColor: theme.palette.background.paper,
    },
  };
};
