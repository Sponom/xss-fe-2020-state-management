import React from "react";
import Button from "./Button";
import { ThemeContextConsumer } from "../ThemeContextProvider";

const Image = () => {
  return (
    <ThemeContextConsumer>
      {({ theme }) => (
        <div className={`app__image app__image--${theme}`}>
          <div className={`app__ball app__ball--${theme}`} />
          <Button />
        </div>
      )}
    </ThemeContextConsumer>
  );
};

export default Image;
