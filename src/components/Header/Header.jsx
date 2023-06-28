import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="menu-nav">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="contato">contato</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;