import React, { useState } from "react";
import "./index.scss";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import MenuOption from "./MenuOption";
export default function NewHeader({ className }) {
  const [open, openMenu] = useState(false);

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
      <MenuOption open={open} onClose={() => openMenu(false)} />
    </>
  );
}
