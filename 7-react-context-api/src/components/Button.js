import React from "react";
import { ThemeContextConsumer } from "../ThemeContextProvider";

const Button = () => {
  return (
    <ThemeContextConsumer>
      {({ toggleTheme }) => (
        <button className="app__btn" onClick={toggleTheme}>
          Switch
          <span role="img" aria-label="sun">
            🌞
          </span>
          <span role="img" aria-label="moon">
            🌚
          </span>
        </button>
      )}
    </ThemeContextConsumer>
  );
};

export default Button;
