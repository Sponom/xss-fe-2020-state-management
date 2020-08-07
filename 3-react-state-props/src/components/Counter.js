import React, { Component } from "react";
import Button from "./Button";
import CounterValue from "./CounterValue";

export default class Counter extends Component {
  state = {
    counter: 0
  };

  increment = () => {
    this.setState(({ counter }) => ({ counter: counter + 1 }));
  };
  resetCounter = () => {
    this.setState({ counter: 0 });
  };

  render() {
    const { counter } = this.state;
    const { increment, resetCounter } = this;
    return (
      <div className="counter">
        <h1 className="counter__title">React local state + props</h1>
        <CounterValue value={counter} />
        <Button onClick={() => increment()}>+</Button>
        <Button onClick={() => resetCounter()}>Сбросить счетчик</Button>
      </div>
    );
  }
}
