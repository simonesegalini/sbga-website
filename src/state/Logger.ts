import { Reducer, useCallback } from "react";
import { GlobalState } from "./global/global.types";
import { consoleHelper } from "../utils";

const Logger = (reducer: Reducer<GlobalState, any>) => {
  const reducerWithLogger = useCallback(
    (state: any, action: any) => {
      const next = reducer(state, action);
      consoleHelper(
        "%cPrevious State:",
        "color: #9E9E9E; font-weight: 700;",
        state
      );
      consoleHelper("%cAction:", "color: #00A7F7; font-weight: 700;", action);
      consoleHelper("%cNext State:", "color: #47B04B; font-weight: 700;", next);
      return next;
    },
    [reducer]
  );

  return reducerWithLogger;
};

export default Logger;
