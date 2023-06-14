import { ShoppingCart } from "@mui/icons-material";
import styles from "./Navbar.module.css";
import { Badge } from "@mui/material";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.nombre}>
        2CHAINS
      </Link>
      <ul>
        <li>
          <NavLink to="/tienda">tienda</NavLink>
        </li>
        <li>
          <NavLink to="/ubicacion">ubicación</NavLink>
        </li>
        <li>
          <NavLink to="/contacto">contacto</NavLink>
        </li>
        <li>
          <Badge badgeContent={4} color="primary">
            <ShoppingCart fontSize="large" />
          </Badge>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
