import React from "react";
import ReactDOM from "react-dom";
import { ThemeContextProvider } from "./ThemeContextProvider";
// import HooksContextProvider from "./ThemeContextProviderWithHooks";
import App from "./App";

import "./styles.scss";

ReactDOM.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <HooksContextProvider>
//     <App />
//   </HooksContextProvider>,
//   document.getElementById("root")
// );
