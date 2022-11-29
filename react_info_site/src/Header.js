import React from "react";

export default function Header() {
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