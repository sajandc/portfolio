import React, { useEffect, useState } from "react";
import "./index.scss";
import logo from "../../assets/logo.svg";
import { useLocation } from "react-router-dom";
import MenuOption from "./MenuOption";
import { onKeyPress, scrollToTop } from "../../helper/commonFunction";
export default function NewHeader({ className }) {
  const [open, openMenu] = useState(false);
  const location = useLocation();
  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);

  const onKeyChange = (event) => {
    if (event.key === "Escape") {
      openMenu(false);
    } else if (event.key === "Enter") {
      openMenu(true);
    }
  };

  return (
    <>
      <div className={`new-header ${className}`}>
        <a href="/" className="name">
          <img src={logo} />
          SAJAN D CHOUHAN
        </a>
        <div
          tabIndex={0}
          onKeyDown={(e) => onKeyPress(e, () => onKeyChange(e))}
          onClick={() => openMenu(true)}
          className="menu"
        >
          <span> Menu</span>
          <span class="material-symbols-outlined">view_cozy</span>
        </div>
      </div>
      <MenuOption open={open} onClose={() => openMenu(false)} />
    </>
  );
}
