import React, { useEffect, useState } from "react";

function EffectHook() {
  // useEffect 和class 中的componentDidMount\componentDidUpdate\componentWillUnmount有相同的用途
  const [count, setCount] = useState(1);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  // 如果给useEffect第二个参数传入一个空的数组，就会只执行一次 和 class中的 componentDid

  // useEffect可以通过一个return 函数来清除 比如class中卸载
  // useEffect 也可以使用多个
  useEffect(() => {
    return () => {
      setCount(1);
    };
  });

  // useEffect 有第二个参数，第二个参数为数组，当数组中的数据发生改变是当前的Effect会执行一次

  useEffect(() => {
    console.log("xxxpz");
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>button</button>
    </div>
  );
}

export default EffectHook;
