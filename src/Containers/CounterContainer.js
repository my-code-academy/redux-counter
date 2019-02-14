import Counter from '../Components/Counter/Counter';
import React from 'react';
import { connect } from 'react-redux';
import {incrementCounter, decrementCounter} from '../actions/counterIncrementDecrement';

const mapStateToProps = state => {
  return {
    count: state,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => {
      dispatch(incrementCounter());
    },
    onDecrement: () => {
      dispatch(decrementCounter());
    }
  }
};

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default CounterContainer;
