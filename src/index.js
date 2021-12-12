/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { combineReducers, createStore } from 'redux';
import clientReducer from './reducers/clientReducer';
import userInfoReducer from './reducers/userinfo';

const rootReducer = combineReducers({
  client: clientReducer,
  user: userInfoReducer,
});

const store = createStore(rootReducer);

//console.log(store.getState());

const unSubscribe = store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch({ type: 'newClient' });

unSubscribe();

store.dispatch({ type: 'newClient' });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
