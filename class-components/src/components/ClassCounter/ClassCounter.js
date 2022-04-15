import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  // It does not add 1 twice, because after setState-ing,
  // it does it again, which cancels the first setState()
  addOne = () => {
    this.setState({ ...this.state, counter: this.state.counter + 1 });
    this.setState({ ...this.state, counter: this.state.counter + 1 });
  };

  minusOne = () => {
    this.setState({ ...this.state, counter: this.state.counter - 1 });
  };

  reset = () => {
    this.setState({ ...this.state, counter: 0 });
  };

  alerter = () => {
    //  Changed alert(counter) to alert(countRef.current)
    setTimeout(() => alert(this.state.counter), 3000);
  };

  render() {
    return (
      <div className="counter">
        <h2>Class Component </h2>
        <div className="counter__form">
          <input type="text" value={this.state.counter} />
          <button onClick={this.addOne}>Add 1</button>
          <button onClick={this.alerter}>Alerter</button>
          <button onClick={this.minusOne}>Minus 1</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default ClassCounter;
