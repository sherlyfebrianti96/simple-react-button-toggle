import React, { Component } from "react";
import ReactDOM from 'react-dom';

const ToggleStatusEnum = {
  On: 'ON',
  Off: 'OFF',
};

class Toggle extends Component {
  state = {
    status: ToggleStatusEnum.On,
  };

  handleClick() {
    let status;
    if (this.state.status === ToggleStatusEnum.On) {
      status = ToggleStatusEnum.Off;
    } else {
      status = ToggleStatusEnum.On;
    }
    this.setState({
      status
    });
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>{this.state.status}</button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);

export default Toggle;
