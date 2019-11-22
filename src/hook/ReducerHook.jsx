import React, { useReducer, useEffect } from "react";

function ReducerHook(props) {
  // 在数据复杂的情况下，使用useReducer 比使用useState 方便很多
  // useReducer接收俩个参数， 第一个是 改变state的函数， 第二个是初始对象
  const [state, dispatch] = useReducer(props.reduceFn, props.defaultValue);
  return (
    <div>
      <span>Count: {state.count}</span>
      <button onClick={() => dispatch({ type: "add" })}>加</button>
      <button onClick={() => dispatch({ type: "jian" })}>减</button>
    </div>
  );
}

export default ReducerHook;
