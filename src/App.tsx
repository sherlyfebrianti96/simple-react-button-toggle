import React, { Component } from "react";

class App extends Component {
  state = {
    count: 0
  };

  // change code below this line

  increment() {
    console.log("this.state.count : ", this.state.count);
    this.setState({
      count: this.state.count + 1
    });
  }

  decrement() {
    this.setState({
      count: this.state.count - 1
    });
  }

  reset() {
    this.setState({
      count: 0
    });
  }

  // change code above this line
  render() {
    return (
      <div>
        <button className="inc" onClick={this.increment.bind(this)}>
          Increment!
        </button>
        <button className="dec" onClick={this.decrement.bind(this)}>
          Decrement!
        </button>
        <button className="reset" onClick={this.reset.bind(this)}>
          Reset
        </button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
}

export default App;
