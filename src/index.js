import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector('#root'),
);
