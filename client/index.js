import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "./rootReducer";
import App from './components/App';

// style
// we also include in webpack.
import "./assets/css/style.css";

const store = createStore(
  rootReducer 
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

