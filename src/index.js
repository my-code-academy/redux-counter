import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import counterReducer from './reducers/counterReducer';
import Counter from '../src/Components/Counter/Counter';

const store = createStore(counterReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister();
