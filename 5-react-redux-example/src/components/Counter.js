import React from "react";
import { connect } from "react-redux";
import { incrementAction, increment } from "../reducers/index";

const Counter = ({ counter, increment }) => {
  return (
    <div className="counter">
      <h1 className="counter__title">
        Управление состоянием с помощью react-redux
      </h1>
      <p className="counter__text">
        Счетчик: <span className="counter__number">{counter}</span>
      </p>
      <div className="counter__btn-container">
        <button className="counter__btn" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

// const mapDispatchToProps = { increment };

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(incrementAction)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
