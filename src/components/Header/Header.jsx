import { NavLink } from "react-router-dom";
import './styles.css';

function Header() {

  return (
    <nav className="menu-nav">
      <ul className="menu-header">
        
        <li className="menu-item">
          <NavLink to="/">Home</NavLink>
        </li>

        <li className="menu-item">
          <NavLink to="empresas">Empresas</NavLink>
        </li>

        <li className="menu-item">
          <NavLink to="login">Login</NavLink>
        </li>

        <li className="menu-item">
          <NavLink to="semana-06">Semana 06 / 07</NavLink>
        </li>

      </ul>
    </nav>
  )
}

export default Header;