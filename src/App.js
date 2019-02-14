import React, { Component } from 'react';
import './App.css';
import CounterContainer from './Containers/CounterContainer';

class App extends Component {
  render() {
    return (
      <div>
        <CounterContainer/>
      </div>
    );
  }
}

export default App;
