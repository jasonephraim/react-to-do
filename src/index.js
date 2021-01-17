import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import './index.scss';
import history from './utils/history';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureFakeBackend } from './utils/fakeBackend';

configureFakeBackend();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
