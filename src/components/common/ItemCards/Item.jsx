import { Link } from "react-router-dom";
import styles from "./Item.module.css";

export const Item = (props) => {
  return (
    <Link to={`/item/${props.item.id}`}>
      <div className={styles.itemCard}>
        <div className={styles.imageContainer}>
          <img
            src={props.item.imagen}
            alt={props.item.titulo}
            className={styles.image}
          />
        </div>
        <h3>{props.item.titulo}</h3>
      </div>
    </Link>
  );
};
