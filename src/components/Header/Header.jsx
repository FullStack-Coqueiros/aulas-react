import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import './styles.css';

function Header() {

  const { theme, toggleTheme } = useContext(ThemeContext)
    
  return (
    <nav className="menu-nav">
      <ul className="menu-header">        
        <li onClick={toggleTheme}>Alterar Tema ({theme})</li>
      </ul>
    </nav>
  )
}

export default Header;