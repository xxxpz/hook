react hook 的使用方法

> useState

```
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
```

> useEffect

```
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
```

> useContext

```
// 父组件
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

// 子组件
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

// reducer
export const handleAdd = (state, action) => {
  const stateClone = Object.assign({}, state);
  switch (action.type) {
    case actionType.ADD_TYPE:
      stateClone.count = state.count + 10;
      console.log(stateClone);
      return stateClone;
    case actionType.JIAN_TYPE:
      stateClone.count = state.count - 10;
      return stateClone;
  }
};

// action
const actionType = {
  ADD_TYPE: "ADD_TYPE",
  JIAN_TYPE: "JIAN_TY"
};

export { actionType };
```

> useMemo | useCallback

```
// useMemo
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

// useCallback
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
```

> useRef 配合 useImperativeHandle 和 forwardRef

```
// 父组件
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
// 子组件
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
```
