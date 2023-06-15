import { useParams } from "react-router-dom";
import { getProducts } from "../../../data/asyncMock.js";
import { useEffect, useState } from "react";
import styles from "./ItemDetailsContainer.module.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetailsContainer = () => {
  const { itemId } = useParams();

  const [itemById, setItemById] = useState([]);

  const [data, setData] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error(error);
      });
    const findedItem = data.find((item) => item.id.toString() === itemId);
    setItemById(findedItem);
    console.log(findedItem);
  }, [itemId, data]);

  return (
    <div className={styles.itemDetailsCard}>
      <h1 className={styles.itemInfo}>{itemById && itemById.titulo}</h1>
      <img
        src={itemById && itemById.imagen}
        alt={itemById && itemById.titulo}
        className={styles.imagenItem}
      />
      <h1 className={styles.itemInfo}>Precio:{itemById && itemById.precio}</h1>
      <h2 className={styles.itemInfo}>Stock:{itemById && itemById.stock}</h2>
      {itemById && <ItemCount initial={1} stock={itemById.stock} />}
      <a className={styles.botonComprar} href="#">
        CASH IN
      </a>
    </div>
  );
};

export default ItemDetailsContainer;
