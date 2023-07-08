import { NavLink } from "react-router-dom";
import './styles.css';
import { useContext } from "react";
import { ThemeContext } from '../../context/ThemeContext'
import { AuthContext } from "../../context/AuthContext";

function Header() {

  const { theme, toggleTheme } = useContext(ThemeContext)
  const { logout } = useContext(AuthContext)

  return (
    <nav className="menu-nav">
      <ul className="menu-header">
        
        <li className="menu-item">
          <NavLink to="/">Home</NavLink>
        </li>

        <li className="menu-item">
          <NavLink to="empresas">Empresas</NavLink>
        </li>

        {/* <li className="menu-item">
          <NavLink to="login">Login</NavLink>
        </li> */}

        <li className="menu-item">
          <NavLink to="semana-06">Semana 06 / 07</NavLink>
        </li>

        <li className="menu-item" onClick={toggleTheme}>
          Alterar Tema (Atual: {theme})
        </li>

        <li>
          <button onClick={logout}>Logout</button>
        </li>

      </ul>
    </nav>
  )
}

export default Header;