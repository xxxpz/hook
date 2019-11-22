import React, {
  useRef,
  useState,
  useImperativeHandle,
  forwardRef
} from "react";
import ImperativeHandle from "./ImperativeHandle";

function RefHook() {
  const [count, setCount] = useState(1);
  const inputRef = useRef(null);
  const inputRefEE = useRef(null);

  const handleInputValue = () => {
    // 获取到input的DOM实例
    inputRef.current.value = count;
  };

  const handleGetValue = () => {
    inputRefEE.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={() => setCount(count + 10)}>加</button>
      <button onClick={handleInputValue}>赋值</button>
      <ImperativeHandle ref={inputRefEE} />
      <button onClick={handleGetValue}>子赋值</button>
    </div>
  );
}

export default forwardRef(RefHook);
