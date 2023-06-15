import { useState } from "react";
import styles from "./ItemCount.module.css"

const ItemCount = ({stock, initial}) => {
  console.log("stock:", stock)  
  const [quantity, setQuantity] = useState(initial)

    const increment = () => {
      if (quantity + 1 > stock) return
      const newQuantity = quantity + 1
      setQuantity((newQuantity))}

    const decrement = () => {
      if (quantity - 1 < 0) return
      const newQuantity = quantity - 1
      setQuantity((newQuantity))}
    
   /*  const [quantityAdded, setQuantityAdded] = useState(0)

    const handledOnAdd = (quantity) => {setQuantityAdded(quantity)} */
  return <div>
    <button className={styles.buttonCount} onClick={decrement}>-</button>
    <span className={styles.countNumber}>{quantity}</span>
    <button className={styles.buttonCount} onClick={increment}>+</button>
  </div>;
};

export default ItemCount;
