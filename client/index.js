import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import rootReducer from "./rootReducer";
import App from './components/App';

// style
// we also include in webpack.
import "./assets/css/style.css";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, promise())
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

