import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
// import { BrowserRouter } from "react-browser-router";
import { Router } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from './Redux/ConfigureStore';
import history from './history';

var store= configureStore();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router  history={history}>
      <App />
    </Router >
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
