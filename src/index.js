import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import './index.scss';
import history from './utils/History';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
