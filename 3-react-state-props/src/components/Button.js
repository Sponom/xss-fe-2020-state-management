import React from "react";

const Button = ({ children, onClickButton }) => {
  return (
    <button className="counter__btn" onClick={() => onClickButton()}>
      {children}
    </button>
  );
};
export default Button;
