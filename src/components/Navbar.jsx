import { useState } from "react";

import "../css/Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="home-button">
        <a href="/">Home</a>
      </div>

      <div className="burger-menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`navbar-links ${isMenuOpen ? "nav-active" : ""}`}>
        <li>
          <a href="/articles">All Articles</a>
        </li>
        <li>
          <a href="/topics">Topics</a>
        </li>
        <li>
          <a href="/account/login">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

let test = 1;
