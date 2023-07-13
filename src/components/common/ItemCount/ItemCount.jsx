import { useState } from "react";
import styles from "./ItemCount.module.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1);
    {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className={styles.Counter}>
      <div className={styles.Controls}>
        <button className={styles.buttonCount} onClick={decrement}>
          -
        </button>
        <h4 className={styles.Number}>{quantity}</h4>

        <button className={styles.buttonCount} onClick={increment}>
          +
        </button>
      </div>
      <div>
        <button
          className={styles.botonComprar}
          onClick={() => onAdd(quantity)}
          disabled={!stock}
        >
          CASH IN
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
