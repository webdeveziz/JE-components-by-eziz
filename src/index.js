import React from 'react';
import ReactDOM from 'react-dom';
import Users from './components/users';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Users />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
