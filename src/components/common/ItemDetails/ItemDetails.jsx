import { Link, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import styles from "./ItemDetails.module.css";
import ItemCount from "../ItemCount/ItemCount.jsx";
import { CartContext } from "../../../context/CartContext.jsx";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/config.js";

const ItemDetails = () => {
  const { itemId } = useParams();
  const [itemById, setItemById] = useState(null);
  const { addItem } = useContext(CartContext);
  const [addedQuantity, setAddedQuantity] = useState(0);

  const handleAdd = (quantity) => {
    setAddedQuantity(quantity);
    addItem(
      {
        id: itemById.id,
        precio: itemById.precio,
        titulo: itemById.titulo,
      },
      quantity
    );
  };

  useEffect(() => {
    const docRef = doc(db, "productos", itemId);
    getDoc(docRef).then((resp) => {
      setItemById({ ...resp.data(), id: resp.id });
    });
  }, [itemId]);

  return (
    <div className={styles.itemDetailsCard}>
      {itemById && (
        <>
          <h1 className={styles.itemInfo}>{itemById.titulo}</h1>
          <img
            src={itemById.imagen}
            alt={itemById.titulo}
            className={styles.imagenItem}
          />
          <h1 className={styles.itemInfo}>Precio: {itemById.precio}</h1>
          <h2 className={styles.itemInfo}>Stock: {itemById.stock}</h2>
          {addedQuantity === 0 ? (
            <ItemCount initial={1} stock={itemById.stock} onAdd={handleAdd} />
          ) : (
            <Link className={styles.goToCart} to="/cart">
              Carrito
            </Link>
          )}
        </>
      )}
    </div>
  );
};

export default ItemDetails;
