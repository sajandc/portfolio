import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [activeRoute, setActiveRoute] = useState("/");
  let location = useLocation();

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location.pathname]);

  return (
    <header className="d-flex-space-btwn header">
      <a href="/" className="fw-600 logo-cont">
        <img className="logo" src={logo} />
        <div className="name">SAJAN CHOUHAN</div>
      </a>
      <ul className="d-flex header-options">
        <li>
          <Link className={location.pathname === "/" ? "active" : ""} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={location.pathname === "/blogs" ? "active" : ""}
            to="/blogs"
          >
            Blogs
          </Link>
        </li>
        <li>
          <Link
            className={location.pathname === "/contact" ? "active" : ""}
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
