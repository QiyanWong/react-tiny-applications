import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {number: 1};
  }
  addOne = () => {
    this.setState({number: this.state.number + 1});
  };
  reduceOne = () => {
    this.setState({number: this.state.number - 1});
  };
  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={this.addOne}>Increase s</button>
        <button onClick={this.reduceOne}> Decrease </button>
      </div>
    );
  }
}


export default App;
