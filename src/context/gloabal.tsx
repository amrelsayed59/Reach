import React, { createContext, useContext, useReducer } from "react";
import mainReducer from "./reducers/mainReducer";

const mainContext = createContext<any>(undefined);
const mainDispatchContext = createContext<any>(undefined);
const initialState: any = {};

function useMainState() {
  const context = useContext(mainContext);
  if (context === undefined) {
    throw new Error("useMainState must be used within a MainProvider");
  }
  return context;
}

function useMainDispatch() {
  const context = useContext(mainDispatchContext);
  if (context === undefined) {
    throw new Error("useMainDispatch must be used within a MainProvider");
  }
  return context;
}

function MainProvider({ children }: any) {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  return (
    <mainContext.Provider value={state}>
      <mainDispatchContext.Provider value={dispatch}>
        {children}
      </mainDispatchContext.Provider>
    </mainContext.Provider>
  );
}

export { MainProvider, useMainState, useMainDispatch };
