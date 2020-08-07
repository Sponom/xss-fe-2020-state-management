import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    helloString: "",
    showHelloBtn: true
  };

  onSayHello = () => {};

  render() {
    const { helloString, showHelloBtn } = this.state;
    return (
      <div className="hello">
        <h1 className="hello__title">
          Управление состоянием компонента-класса React
        </h1>
        <p className="hello__text">{helloString}</p>
        {showHelloBtn && (
          <button className="hello__btn" onClick={this.onSayHello}>
            Сказать "Привет!"
          </button>
        )}
      </div>
    );
  }
}
