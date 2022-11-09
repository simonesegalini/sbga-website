import { Variants } from "framer-motion";
import _ from "lodash";
import { useTheme } from "@mui/material/styles";
import { useDimensions } from "../../../hooks/useDimensions";
import { useCallback, useState } from "react";
import { ITeamComponent } from "./types";

const variants: Variants = {
  open: {
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, transition: { duration: 0.2 } },
};
const initialRowState = [false, false, false];

export const useTeamComponent = (props: ITeamComponent) => {
  const { people } = props;
  const chunkPersonArray = _.chunk(people, 3);
  const rowsNumber = chunkPersonArray.length;
  const initialState = Array(rowsNumber).fill(initialRowState);
  const theme = useTheme();
  const { isSmall } = useDimensions();
  const [rowsState, setRowsState] = useState([...initialState, 0]);

  const setState = useCallback((state: any) => {
    setRowsState([...state, Math.random()]);
  }, []);

  const resetRowsState = useCallback(() => {
    setState(Array(rowsNumber).fill(initialRowState));
  }, [rowsNumber, setState]);

  return {
    initialState,
    chunkPersonArray,
    isSmall,
    theme,
    variants,
    rowsState,
    resetRowsState,
    setState,
  };
};
