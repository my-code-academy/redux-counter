import counterReducer from './counterReducer';

describe('counterReducer', () => {
  it ('should return prev state + 1 if action dispatched is "INCREMENT"', () => {
    let state = 0;
    expect(counterReducer(state, {type: 'INCREMENT'})).toEqual(1);
  });

  it ('should return prev state - 1 if action dispatched is "DECREMENT"', () => {
    let state = 0;
    expect(counterReducer(state, {type: 'DECREMENT'})).toEqual(-1);
  });
});