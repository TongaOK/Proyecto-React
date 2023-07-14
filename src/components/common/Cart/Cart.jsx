import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import styles from "./Cart.module.css";

const Cart = () => {
  const { cart, clearCart, removeItem, getTotal } = useContext(CartContext);

  /* const purchaseConfirmation = () => {
    clearCart();
    alert("Tu compra ha sido confirmada");
  }; */
  return (
    <div>
      <div>
        {cart.map((itemInfo) => (
          <CartItem
            key={itemInfo.id}
            itemInfo={itemInfo}
            removeItem={removeItem}
          />
        ))}
      </div>
      <div>
        <h3 className={styles.total}>TOTAL: {getTotal()}</h3>
        <div className={styles.botonesCompra}>
          <button className={styles.vaciar} onClick={clearCart}>
            Vaciar Carrito
          </button>
          <button className={styles.compra}>
            <Link to="/checkout">Terminar Compra</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
