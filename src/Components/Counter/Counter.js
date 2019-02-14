import React, { Component } from 'react';
// import './counter.css';
import Button from '../Button/Button';

class Counter extends Component {

  render() {
    const { count, onIncrement, onDecrement} = this.props;
    return (
      <div className='counter'>
        <p>Counter: { Number(count)} </p><br/>
        <Button caption='add' onClick={onIncrement}></Button>  
        <Button caption='minus' onClick={onDecrement}></Button>
      </div>
    );
  }
}

export default Counter;