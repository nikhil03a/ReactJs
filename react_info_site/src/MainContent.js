import React from "react";
export default function MainContent(props) {
  const temp = props.mode ? 'dark' : 'light';
    return (
      <div className={temp}>
      <div className='content'>
        <h1>Fun Facts About React</h1>
        <ul>
          <li>Was First Released in 2013</li>
          <li>Was Originally created by Jordan Walker</li>
          <li>Has well over 100k stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
      </div>
    )
  }