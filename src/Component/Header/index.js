import logo from "../../assets/logo.png";

function Header() {
  return (
    <header className="d-flex-space-btwn header">
      <a href="/" className="fw-600 logo-cont">
        <img className="logo" src={logo} />
        <div className="name">SAJAN CHOUHAN</div>
      </a>
      <ul className="d-flex header-options">
        <li>Home</li>
        <li>About</li>
        <li>Blogs</li>
        <li>Contact</li>
      </ul>
    </header>
  );
}

export default Header;
