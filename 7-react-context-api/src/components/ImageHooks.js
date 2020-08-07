import React, { useContext } from "react";
import ButtonHooks from "./ButtonHooks";
import { ThemeHooksContext } from "../ThemeContextProviderWithHooks";

const Image = () => {
  const { theme } = useContext(ThemeHooksContext);
  return (
    <div className={`app__image app__image--${theme}`}>
      <div className={`app__ball app__ball--${theme}`} />
      <ButtonHooks />
    </div>
  );
};

export default Image;
