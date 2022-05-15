import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { ToastProvider } from './context/toast';

import Routes from './routes';

import { GlobalStyle } from './assets/css/global';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

ReactDOM.render(
  <Router>
    <ToastProvider>
      <GlobalStyle />
      <Routes />
    </ToastProvider>
  </Router>,
  document.getElementById('root'),
);
