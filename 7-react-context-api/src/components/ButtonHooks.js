import React, { useContext } from "react";
import { ThemeHooksContext } from "../ThemeContextProviderWithHooks";

const Button = () => {
  const { toggleTheme } = useContext(ThemeHooksContext);

  return (
    <button className="app__btn" onClick={toggleTheme}>
      Switch
      <span role="img" aria-label="sun">
        🌞
      </span>
      <span role="img" aria-label="moon">
        🌚
      </span>
    </button>
  );
};

export default Button;
