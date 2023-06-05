import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import menuOptions from "../../../Constants/menuOption.json";
import { onKeyPress } from "../../../helper/commonFunction";

export default function MenuOption({ open, onClose }) {
  const navigate = useNavigate();

  const clickMenu = (event) => {
    const { id } = event.target;
    navigate(id);
  };
  return createPortal(
    <div className="menu-option-wrapper">
      {open && <div className="backdrop"></div>}
      <div className={`menu-option ${open ? "open" : ""}`}>
        <ul onClick={clickMenu}>
          {menuOptions.map((el) => (
            <li id={el.route}>{el.title}</li>
          ))}
        </ul>
        <span
          onClick={() => onClose(false)}
          className="material-symbols-outlined"
        >
          close
        </span>
      </div>
    </div>,
    document.body
  );
}
