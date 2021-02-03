import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import applicationStore from "./reducers/applicationStore";
import {Provider} from "react-redux";

ReactDOM.render(
  <Provider store={applicationStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
