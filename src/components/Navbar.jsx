import "../css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="/">Home</a>
        </li>
        <li className="navbar-item">
          <a href="/articles">All Articles</a>
        </li>
        <li className="navbar-item">
          <a href="/topics">Topics</a>
        </li>
        <li className="navbar-item">
          <a href="/account/login">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

let test = 1