import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const customClassName = ({ isActive }) =>
    "menu__link" + (isActive ? " menu__link_active" : "");

  return (
    <nav className="menu">
      <NavLink to="/" className={customClassName}>
        Inicio
      </NavLink>
      <NavLink to="/reviews" className={customClassName}>
        Reseñas de emojis
      </NavLink>
      <NavLink to="/about-me" className={customClassName}>
        Sobre mí
      </NavLink>
      <NavLink to="/about-us" className={customClassName}>
        Sobre nosotros
      </NavLink>
    </nav>
  );
}

export default NavBar;
