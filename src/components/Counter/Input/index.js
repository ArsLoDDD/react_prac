import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: 1, stepCount: 0 };
  }
  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value,
    });
  };
  sendInput = () => {
    const { inputValue, stepCount } = this.state;
    this.setState({ stepCount: stepCount + Number(inputValue) });
    this.setState({ inputValue: 0 });
  };
  render() {
    const { stepCount, inputValue } = this.state;

    return (
      <div>
        <p>Step: {stepCount}</p>
        <input
          type="text"
          name="inputValue"
          value={inputValue}
          onChange={this.handleChange}
        />
        <button onClick={this.sendInput}>Send</button>
      </div>
    );
  }
}
export default Input;
