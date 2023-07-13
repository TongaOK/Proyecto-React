import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart, clearCart, removeItem } = useContext(CartContext);

  const purchaseConfirmation = () => {
    clearCart();
    alert("Tu compra ha sido confirmada");
  };
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
        <button onClick={clearCart}>Vaciar Carrito</button>
        <button onClick={purchaseConfirmation}>Terminar Compra</button>
      </div>
    </div>
  );
};

export default Cart;
