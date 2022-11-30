import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
function Bnb() {
  return (
    <div>
      <nav>
        <ul className='navlist'>
          <li className='nav-items'><img src="logo.webp" width="200px" height="80px"></img></li>
          <li className='nav-items'><h2>airbnb</h2></li>
        </ul>
      </nav>
      <div className='top-content'>
        <img src="grid.png" className='grid-image'></img>
        <h2 className='heading-1'>Online Experiences</h2>
        <p className='heading-2'>Join unique interactive activities led by one-of-a-kind hosts all without 
          leaving home
        </p>
      </div>
    </div>
  )
}
root.render(<Bnb />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
