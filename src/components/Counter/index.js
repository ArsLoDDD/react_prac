import React, { Component } from "react";
import CounterLogic from "./CounterLogic";
import Input from "./Input";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
    };
  }
  stepCountHandler = () => {
    const {currentStep} = this.state
    this.setState((state, props) => ({
      currentStep: state.currentStep + props.stepCount,
    }));
    console.log(currentStep)
  };
  render() {
    const { currentStep, count} = this.state;
    return (
      <div>
        <p onChange={this.stepCountHandler}>Count: {currentStep}</p>
        <p>Step: {currentStep}</p>
        <h2>{count}</h2>
        <CounterLogic step={1} />
        <Input onChange={this.stepCountHandler} onClick={this.stepCountHandler}/>
      </div>
    );
  }
}

export default Counter;
