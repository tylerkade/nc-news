import { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import "../../css/Navbar.css";

function Navbar() {
  const { user } = useContext(UserContext);
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
        <li className="profile">
          {user && user.username ? (
            <a href="/account/">
              <div id="navbar-logged-in-container">
                <div id="navbar-pfp-container">
                  <img
                    id="navbar-pfp"
                    src={user.avatar_url}
                    alt="profile picture"
                  />
                </div>
                <div id="navbar-user">{user.username}</div>
              </div>
            </a>
          ) : (
            <a href="/account/login">Login</a>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
