import React, { useState } from "react";

const Counter = () => {
  const [sum, setSum] = useState(0);
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);

  const onChangeValue = (event, setValFunc) => {
    setValFunc(event.currentTarget.value);
  };

  const onSetSum = () => {
    setSum(Number(firstNumber) + Number(secondNumber));
  };

  return (
    <div className="sum">
      <h1 className="sum__title">
        Управление состоянием в React c помощью хука useState
      </h1>
      <p className="sum__text">Сложение двух чисел</p>
      <div className="sum__form">
        <input
          className="sum__input"
          type="number"
          value={firstNumber}
          onChange={(event) => onChangeValue(event, setFirstNumber)}
        />
        {" + "}
        <input
          className="sum__input"
          type="number"
          value={secondNumber}
          onChange={(event) => onChangeValue(event, setSecondNumber)}
        />
      </div>
      <button className="sum__btn" onClick={onSetSum}>
        Посчитать
      </button>
      <p className="sum__text">Сумма: {sum}</p>
    </div>
  );
};

export default Counter;
