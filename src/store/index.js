import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import catReducer from './categories.js';
import prodReducer from './products.js';

let reducers = combineReducers({ catReducer, prodReducer });

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store();

// we have currently configured the core of our redux based app but we don't have
// any dispatched actions at this point