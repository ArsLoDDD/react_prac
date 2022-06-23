import React, { Component } from "react";
import Input from "./Input";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, statusButton: true };
  }
  addNum = () => {
    this.setState({ count: this.state.count + 1 });
  };
  minusNum = () => {
    this.setState({ count: this.state.count - 1 });
  };
  changeButton = () => {
    this.setState({
      statusbar: (this.state.statusButton = !this.state.statusButton),
    });
  };
  render() {
    const { count, statusButton,inputValue } = this.state;
    return (
      <article>
        <p>Count: {count}</p>
        <p>Step: {inputValue}</p>
        <h2>{count}</h2>
        <button onClick={statusButton ? this.addNum : this.minusNum}>
          {statusButton ? "Add" : "Minus"}
        </button>
        <button onClick={this.changeButton}>Change</button>
      </article>
    );
  }
}

export default Counter;
