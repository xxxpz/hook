import React, { useImperativeHandle, forwardRef, useRef } from "react";

const ImperativeHandle = forwardRef((props, ref) => {
  const inputRefEE = useRef(null);
  // useImperativeHandle(ref, () => {
  //   return {
  //     value: inputRefEE.current.value,
  //     getType: inputRefEE.current.type,
  //     focus: () => inputRefEE.current.focus()
  //   };
  // });
  useImperativeHandle(ref, () => ({
    //第一个参数：暴露哪个ref；第二个参数：暴露什么
    value: inputRefEE.current.value,
    getType: inputRefEE.current.type,
    focus: inputRefEE.current.focus()
  }));
  return <input ref={inputRefEE} />;
});

export default ImperativeHandle;
