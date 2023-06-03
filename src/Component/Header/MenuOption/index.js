import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";

export default function MenuOption({ open, onClose }) {
  const navigate = useNavigate();

  const clickMenu = (event) => {
    const { id } = event.target;
    navigate(id);
  };
  return createPortal(
    <div className="menu-option-wrapper">
      {open && <div onClick={() => onClose(false)} className="backdrop"></div>}
      <div className={`menu-option ${open ? "open" : ""}`}>
        <ul onClick={clickMenu}>
          <li id="/">Home</li>
          <li id="/about">About</li>
          <li id="/blogs">Blogs</li>
          <li id="/projects">Projects</li>
          <li id="/contact">Contact</li>
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
