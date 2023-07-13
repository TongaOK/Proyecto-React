const CartItem = ({ itemInfo, removeItem }) => {
  console.log(itemInfo);

  const handleRemove = () => removeItem(itemInfo.id);
  return (
    <div>
      <h2>Titulo: {itemInfo.titulo}</h2>
      <h2>Cantidad: {itemInfo.quantity}</h2>
      <h2>Precio: {itemInfo.precio}</h2>
      <button onClick={handleRemove}>remove</button>
    </div>
  );
};

export default CartItem;
