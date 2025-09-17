import "./Header.css";
import { NavLink } from "react-router-dom";

function Header({ isVisible }) {
  return (
    <header className={`site-header ${isVisible ? '' : 'hidden'}`}>
      <div className="header-content">
        <nav className="nav-buttons">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/recipes">Recipes</NavLink>
          <NavLink to="/tracker">Tracker</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;