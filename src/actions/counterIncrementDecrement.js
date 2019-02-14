
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export function incrementCounter() {
  return { type: INCREMENT};
}

export function decrementCounter() {
  return { type: DECREMENT};
}