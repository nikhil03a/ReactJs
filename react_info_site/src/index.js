import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const element= (
  <div>
    <img src="logo192.png" alt="" width="100px" height="100px"></img>
    <h1>Fun Facts About React</h1>
    <ol>
      <li>Was First Released in 2013</li>
      <li>Was Originally created by Jordan Walker</li>
      <li>Has well over 100k stars on GitHub</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ol>
  </div>
)
root.render(element);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
