import { ShoppingCart } from "@mui/icons-material";
import styles from "./Navbar.module.css";
import { Badge } from "@mui/material";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.nombre}>2CHAINS</h1>
      <ul>
        <li>
          <button>tienda</button>
        </li>
        <li>
          <button>ubicación</button>
        </li>
        <li>
          <button>contacto</button>
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
