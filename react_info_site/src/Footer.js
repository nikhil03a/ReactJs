import React from "react";
export default function Footer(props) {
  const temp = props.mode ? 'dark' : 'light';
  return (
    <div className={temp}>
      <footer className='footer' style={props.style_props}>
        ©️ 2022 Web Development Team. All rights reserved.
      </footer>
    </div>

  )
}