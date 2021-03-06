import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

import { breweryReducer } from './reducers/breweryReducer'

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';

const store = createStore(breweryReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

