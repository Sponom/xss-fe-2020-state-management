import React, { useReducer } from "react";
import reducer, {
  incrementAction,
  decrementAction,
  initialState
} from "./reducer";

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="counter">
      <h1 className="counter__title">
        Управление состоянием в React c помощью useReducer hook
      </h1>
      <p className="counter__text">
        Счетчик: <span className="counter__number">{state.counter}</span>
      </p>
      <div className="counter__btn-container">
        <button
          className="counter__btn"
          onClick={() => dispatch(incrementAction)}
        >
          +
        </button>
        <button
          className="counter__btn"
          onClick={() => dispatch(decrementAction)}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
