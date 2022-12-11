import React from "react";
import MainContent from "./MainContent";
import Footer from "./Footer";
export default function Header(props) {
  const temp = props.mode ? 'dark' : 'light';
  return (
      <header className={temp}>        
      <nav className='nav'>
        <img src="logo192.png" alt="" className='logo'></img>
        <h3 className="heading">React Facts</h3>
        <ul className="nav-items">
          <li><input type="checkbox" id="switch"
            className="checkbox" name="switch" onChange={props.modeToggle} />
            <label for="switch" class="toggle" >Dark Mode</label></li>
        </ul>
      </nav>
    </header>    
  )
}