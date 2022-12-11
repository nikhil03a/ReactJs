import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Temporary() {
  function toggle(){
    setDarkMode(prevMode => !prevMode);
  }
  const [darkMode,setDarkMode] = React.useState(false);
  return (
    <div>
      <Header mode={darkMode} modeToggle={toggle} />
      <MainContent mode={darkMode} />
      <Footer mode={darkMode} />
    </div>
  )
}

root.render(<Temporary />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
