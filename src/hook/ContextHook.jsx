import React, { useState, useReducer } from "react";
import { handleAdd } from "./appReducer";
import ContextChild from "./ContextChild";

export const AddContext = React.createContext(null);

function ContextHook(props) {
  const [state, dispatchState] = useReducer(handleAdd, { name: "", count: 1 });
  return (
    <AddContext.Provider value={{ state, dispatch: dispatchState }}>
      <ContextChild />
    </AddContext.Provider>
  );
}

export default ContextHook;
