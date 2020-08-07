import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button className="counter__btn" onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
