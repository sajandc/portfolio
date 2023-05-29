import React, { useState } from "react";
import "./index.scss";
import logo from "../../assets/logo.svg";
export default function NewHeader({ className }) {
  const [menu, openMenu] = useState(false);
  return (
    <>
      <div className={`new-header ${className}`}>
        <a href="/" className="name">
          <img src={logo} />
          SAJAN D CHOUHAN
        </a>
        <div onClick={() => openMenu(true)} className="menu">
          <span> Menu</span>
          <span class="material-symbols-outlined">view_cozy</span>
        </div>
      </div>
      <div className={`menu-option ${menu ? "open" : "close"}`}>
        <ul>
          <li>
            <a href="/">Home </a>
          </li>
          <li>
            <a href="about">About </a>
          </li>
          <li>
            <a href="blogs">Blogs </a>
          </li>
          <li>
            <a href="contact">Contact </a>
          </li>
        </ul>

        <span
          onClick={() => openMenu(false)}
          className="material-symbols-outlined"
        >
          close
        </span>
      </div>
    </>
  );
}
