import React, { useEffect } from "react";
import { connect } from "react-redux";
import { incrementAction, increment, fetcheExampleData } from "../reducers/index";

const Counter = ({ counter, data, loading, increment, getData }) => {
  useEffect(() => {
    getData();
  }, [getData]);
  
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
      <br/>

      <code>{loading ? 'Loading...' : JSON.stringify(data)}</code>
    </div>
  );
};

const mapStateToProps = ({ counter, data, loading }) => {
  return {
    counter,
    data,
    loading
  };
};

// const mapDispatchToProps = { increment, fetchData };

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(incrementAction),
    getData: () => dispatch(fetcheExampleData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
