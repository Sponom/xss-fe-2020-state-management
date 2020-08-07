import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import CounterHooks from "./components/CounterHooks";
import store from "./store";
import "./styles.scss";

// with react-redux

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  rootEl
);
