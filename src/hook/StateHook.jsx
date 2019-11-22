import React, { useState } from "react";

// 引入的hook时，我们是不需要使用class
function StateHook() {
  // 声明一个count， setCount是用来改变count的，useState可以多个使用
  const [count, setCount] = useState(1); // useState() 中是用来初始化count
  // [count, setCount] 数组解构的方法
  // 可以在一个组件中多次使用useState
  // 调用setCount 如果count改变的话，会重新渲染
  return <div onClick={() => setCount(count + 1)}>{count}</div>;
  // 点击div 调用setCount 来改变count
}

export default StateHook;
