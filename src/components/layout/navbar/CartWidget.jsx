import { ShoppingCart } from "@mui/icons-material";
import styles from "./CartWidget.module.css";
import { Badge } from "@mui/material";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <ul className={styles.cartwidget}>
        <li className={styles.cart}>
          <Link to="/cart" className={styles.cartIcon}>
            <Badge badgeContent={cart.length} color="secondary">
              <ShoppingCart fontSize="large" />
            </Badge>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CartWidget;
