import React, { Component } from "react";
import StateHook from "./hook/StateHook";
import EffectHook from "./hook/EffectHook";
import ReducerHook from "./hook/ReducerHook";
import ContextHook from "./hook/ContextHook";
import MemoHook from "./hook/MemoHook";
import CallbackHook from "./hook/CallbackHook";
import RefHook from "./hook/RefHook";
import "./App.css";

const initialState = { count: 1 };

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { count: state.count + 1 };
    case "jian":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const ThemeContext = React.createContext();
class App extends Component {
  // hook不可以在循环中 条件判断中， class中使用

  render() {
    return (
      <div className="App">
        <StateHook />
        <hr />
        <EffectHook />
        <hr />
        <ReducerHook defaultValue={initialState} reduceFn={reducer} />
        <hr />
        <MemoHook />
        <hr />
        <CallbackHook />
        <hr />
        <RefHook />
        <hr />
        <ContextHook />
      </div>
    );
  }
}

export default App;
