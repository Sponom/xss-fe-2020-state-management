import React from "react";
import Image from "./components/Image";
// import ImageHooks from "./components/ImageHooks";

const App = () => {
  return (
    <div className="app">
      <h1 className="app__title">
        Управление состоянием с помощью Context API
      </h1>
      <Image />
    </div>
  );
};

export default App;
