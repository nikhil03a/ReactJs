import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
function Header() {
  return (
    <header>
      <nav className='nav'>
        <img src="logo192.png" alt="" className='logo'></img>
        <ul className="nav-items">
          <li>About</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}
function Footer() {
  return (
    <footer className='footer'>
      ©️ 2022 Web Development Team. All rights reserved.
    </footer>
  )
}
function MainContent() {
  return (
    <div className='content'>
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
}
function Temporary() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

root.render(<Temporary />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
