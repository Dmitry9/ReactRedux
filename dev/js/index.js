import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from "./reducers/index";
import App from "./components/app";

const store = createStore();
ReactDOM.render(<App />,document.getElementById('root'));
