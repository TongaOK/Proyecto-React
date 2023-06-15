import styles from "./ItemListContainer.module.css";
import { Item } from "../ItemCards/Item";
import { useParams } from "react-router-dom";
import { getProducts } from "../../../data/asyncMock.js";
import { useEffect, useState } from "react";

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();

  const [itemsByCategory, setItemsByCategory] = useState([]);

  const [data, setData] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error(error);
      });
    const filteredItems = categoryId
      ? data.filter((item) => item.categoria === categoryId)
      : data;
    setItemsByCategory(filteredItems);
  }, [categoryId, data]);

  return (
    <div>
      <h1 className={styles.greeting}>{greeting}</h1>
      <div className={styles.itemGrid}>
        {itemsByCategory.length &&
          itemsByCategory.map((item) => <Item item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default ItemListContainer;
