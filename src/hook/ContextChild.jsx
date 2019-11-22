import React, { useState, useContext } from "react";
import { AddContext } from "./ContextHook";
import { actionType } from "./action";

function ContextChild() {
  console.log(AddContext);
  const cxk = useContext(AddContext);
  return (
    <div>
      <div>{cxk.state && cxk.state.count}</div>
      <button onClick={() => cxk.dispatch({ type: actionType.ADD_TYPE })}>
        123123
      </button>
    </div>
  );
}

export default ContextChild;
