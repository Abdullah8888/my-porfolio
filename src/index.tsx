import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/index.scss'
import App from './components/App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import * as serviceWorker from './serviceWorker.js';

ReactDOM.render(
  <BrowserRouter>
        <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();