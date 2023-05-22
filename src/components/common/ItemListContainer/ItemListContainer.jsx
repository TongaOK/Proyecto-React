import styles from "./ItemListContainer.module.css"

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
        <h1 className={styles.greeting}>{greeting}</h1>
    </div>
  )
}

export default ItemListContainer
