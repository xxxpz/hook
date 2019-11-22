import React, { useMemo, useState } from "react";

function MemoHook() {
  // 返回一个memoized函数
  const [count, setCount] = useState(1);
  const [val, setValue] = useState("");

  const expensive = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < count * 100; i++) {
      sum += i;
    }
    return sum;
  }, [count]);

  // const expensive = () => {
  //   let sum = 0;
  //   for (let i = 0; i < count * 100; i++) {
  //     sum += i;
  //   }
  //   return sum;
  // };

  // useCallback和useMemo 都会在第一次渲染的时候执行，之后在依赖发生改变的时候再次执行，并且都会返回缓存值
  // useMemo 会返回缓存变量， 而useCallback 会返回缓存函数

  return (
    <div>
      <h1>{count}</h1>
      <h2>{val}</h2>
      <h3>{expensive}</h3>
      <button onClick={() => setCount(count + 1)}>count</button>
      <input onChange={() => setValue(event.target.value)} />
    </div>
  );
}

export default MemoHook;
