import './index.css';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';

dotenv.config();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
