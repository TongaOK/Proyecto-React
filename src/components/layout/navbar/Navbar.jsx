import styles from "./Navbar.module.css";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.nombre}>
        2CHAINS
      </Link>
      <Link className={styles.secciones} to="/category/cadenas">
        Cadenas
      </Link>
      <Link className={styles.secciones} to="/category/aretes">
        Aretes
      </Link>
      <ul>
        <li>
          <NavLink className={styles.secciones} to="/ubicacion">
            Ubicación
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.secciones} to="/contacto">
            Contacto
          </NavLink>
        </li>
        <CartWidget />
      </ul>
    </div>
  );
};

export default Navbar;
