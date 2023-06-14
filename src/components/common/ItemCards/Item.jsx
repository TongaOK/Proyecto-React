import { Link } from "react-router-dom";
import styles from "./Item.module.css";

export const Item = (props) => {
  return (
    <Link className={styles.itemCard} to={`/item/${props.item.id}`}>
      {props.item.titulo}
    </Link>
  );
};
