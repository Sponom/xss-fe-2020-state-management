import React from "react";

import Button from "./Button";

const ButtonsWrapper = ({ onIncrement, onReset }) => {
  return (
    <>
      <Button onClickButton={onIncrement}>+</Button>
      <Button onClickButton={onReset}>Сбросить счетчик</Button>
    </>
  );
};

export default ButtonsWrapper;
