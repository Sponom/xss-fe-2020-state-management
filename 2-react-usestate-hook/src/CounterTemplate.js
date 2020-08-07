import React, { useState } from "react";

const Counter = () => {
  const [sum, setSum] = useState(0);
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);

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
          onChange={}
        />
        {" + "}
        <input
          className="sum__input"
          type="number"
          value={secondNumber}
          onChange={}
        />
      </div>
      <button className="sum__btn" onClick={}>
        Посчитать
      </button>
      <p className="sum__text">Сумма: {sum}</p>
    </div>
  );
};

export default Counter;
