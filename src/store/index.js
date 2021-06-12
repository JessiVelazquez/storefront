import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import catReducer from './categories.js';
import prodReducer from './products.js';
import cartReducer from './simplecart.js';
import apiReducer from './api-reducer';
import detailReducer from './prodDetails.js';


let reducers = combineReducers({ catReducer, prodReducer, cartReducer, apiReducer, detailReducer });

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();

// we have currently configured the core of our redux based app but we don't have
// any dispatched actions at this point