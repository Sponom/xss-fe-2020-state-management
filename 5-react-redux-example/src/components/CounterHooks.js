import React, { useCallback } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { increment } from "../reducers/index";

const Counter = () => {
  const counter = useSelector(state => state.counter, shallowEqual);
  const dispatch = useDispatch();
  const onIncrement = useCallback(() => dispatch(increment()), [dispatch]);
  return (
    <div className="counter">
      <h1 className="counter__title">
        Управление состоянием с помощью redux + react hooks
      </h1>
      <p className="counter__text">
        Счетчик: <span className="counter__number">{counter}</span>
      </p>
      <div className="counter__btn-container">
        <IncrementButton onIncrement={onIncrement} />
      </div>
    </div>
  );
};

const IncrementButton = React.memo(({ onIncrement }) => (
  <button className="counter__btn" onClick={onIncrement}>
    +
  </button>
));

export default Counter;
