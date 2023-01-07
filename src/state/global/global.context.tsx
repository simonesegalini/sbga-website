import React, { useCallback, useReducer } from "react";
import Logger from "../Logger";
import globalReducer, { initializeState } from "./global.reducer";
import { Actions, Dispatcher, GlobalContextInterface } from "./global.types";

export const GlobalContext = React.createContext<GlobalContextInterface>([
  initializeState(),
  () => {},
]);

export const GlobalContextProvider = ({ children }: any) => {
  const [state, _dispatch] = useReducer(
    Logger(globalReducer),
    initializeState()
  );

  const dispatch: Dispatcher = useCallback((type, ...payload) => {
    _dispatch({ type, payload: payload[0] } as Actions);
  }, []);

  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalContext.Provider>
  );
};
