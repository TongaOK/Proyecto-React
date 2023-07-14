import styles from "./ItemListContainer.module.css";
import { Item } from "../ItemCards/Item";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase/config";
import Spinner from "../spinner/spinner";

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();

  const [itemsByCategory, setItemsByCategory] = useState([]);

  useEffect(() => {
    const productosRef = collection(db, "productos");
    const q = categoryId
      ? query(productosRef, where("categoria", "==", categoryId))
      : productosRef;

    getDocs(q).then((resp) => {
      setItemsByCategory(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, [categoryId]);

  return (
    <div>
      <h1 className={styles.greeting}>{greeting}</h1>
      <h3 className={styles.mainTitle}>
        Somos una web dedicada a la venta de joyeria para OGs
      </h3>

      <div className={styles.itemGrid}>
        {itemsByCategory.length ? (
          itemsByCategory.map((item) => <Item item={item} key={item.id} />)
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
