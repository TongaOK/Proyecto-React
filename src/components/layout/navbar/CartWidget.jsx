import { ShoppingCart } from "@mui/icons-material";
import styles from "./CartWidget.module.css";
import { Badge } from "@mui/material";

const CartWidget = () => {
  return (
    <div>
      <ul className={styles.cartwidget}>
        <li>
          <Badge badgeContent={4} color="primary">
            <ShoppingCart fontSize="large" />
          </Badge>
        </li>
      </ul>
    </div>
  );
};

export default CartWidget;
