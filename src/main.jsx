import React from 'react';
import ReactDOM from 'react-dom'; // Corrigindo a importação para 'react-dom'

import App from './App.jsx';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);