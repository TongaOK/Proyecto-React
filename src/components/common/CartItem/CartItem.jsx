import styles from "./CartItem.module.css";

const CartItem = ({ itemInfo, removeItem }) => {
  console.log(itemInfo);

  const handleRemove = () => removeItem(itemInfo.id);
  return (
    <div className={styles.cartItem}>
      <h2 className={styles.text}>Titulo: {itemInfo.titulo}</h2>
      <h2 className={styles.text}>Cantidad: {itemInfo.quantity}</h2>
      <h2 className={styles.text}>Precio: {itemInfo.precio}</h2>
      <button className={styles.remove} onClick={handleRemove}>
        X
      </button>
    </div>
  );
};

export default CartItem;
