import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux' // the react redux plugin

import store from './store'; // we haven't built the redux/react config yet - vanilla redux
import App from './app.js';


function Entry() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

const root = document.getElementById('root');
ReactDOM.render(<Entry />, root);