import { useState, createContext } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart);

  const addItem = (item, quantity) => {
    console.log(quantity);
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.error("El producto ya fue agregado");
    }
  };

  const removeItem = (itemId) => {
    console.log(itemId);
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  const getTotal = () =>
    cart.reduce((accumulator, cartItem) => {
      console.log(cartItem);

      const precio = cartItem.quantity * cartItem.precio;
      console.log(precio);
      return accumulator + precio;
    }, 0);

  return (
    <CartContext.Provider
      value={{ getTotal, cart, addItem, removeItem, clearCart, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
