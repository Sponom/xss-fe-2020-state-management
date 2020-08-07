import React from "react";

const CounterText = ({ value }) => {
  return (
    <p className="counter__text">
      Счетчик: <span className="counter__number">{value}</span>
    </p>
  );
};

export default CounterText;
