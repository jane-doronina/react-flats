import React from 'react';
import ReactDOM from 'react-dom/client';

import "./assets/stylesheets/index.css";

import App from './components/App';
import reportWebVitals from './reportWebVitals';

import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";

import flatsReducer from "./reducers/flats-reducer";
import selectedFlatReducer from "./reducers/selected-flat-reducer";

const reducers = combineReducers({
  flats: flatsReducer,
  selectedFlat: selectedFlatReducer
});

const middlewares = applyMiddleware(reduxPromise);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
