import React, { useState } from "react";
import "./index.scss";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
export default function NewHeader({ className }) {
  const [menu, openMenu] = useState(false);
  const navigate = useNavigate();

  const clickMenu = (event) => {
    const { id } = event.target;
    navigate(id);
  };
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
        <ul onClick={clickMenu}>
          <li id="/">Home</li>
          <li id="/about">About</li>
          <li id="/blogs">Blogs</li>
          <li id="/projects">Projects</li>
          <li id="/contact">Contact</li>
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
