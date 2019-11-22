import React, { useCallback, useState } from "react";

// useCallback 和 useMemo 使用的方法相同， 只是一个返回的是缓存函数，一个缓存值

function CallbackHook() {
  const [count, setCount] = useState(1);

  const callback = useCallback(() => {
    let sum = 0;
    for (let i = 0; i < count * 100; i++) {
      sum += i;
    }
    return sum;
  }, [count]);
  // 应用场景  一个参数或者一个组件在依赖一个值是才会发生变化的可以用useCallback
  return (
    <div>
      <div>{count}</div>
      <div>{callback()}</div>
      <button onClick={() => setCount(count + 1)}>加</button>
    </div>
  );
}

export default CallbackHook;
