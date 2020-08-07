import React from "react";
import ReactDOM from "react-dom";

import Counter from "./components/Counter";
import "./styles.scss";

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
