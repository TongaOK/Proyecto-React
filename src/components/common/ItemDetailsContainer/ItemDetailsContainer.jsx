import { useParams } from "react-router-dom";
import data from "../../../data/data.json";
import { useEffect, useState } from "react";

const ItemDetailsContainer = () => {
  const { itemId } = useParams();

  const [itemById, setItemById] = useState([]);

  useEffect(() => {
    console.log(itemId);
    console.log(data);
    const findedItem = data.find((item) => item.id.toString() === itemId);
    setItemById(findedItem);
    console.log(findedItem);
  }, [itemId]);

  return <div>{itemById && itemById.titulo}</div>;
};

export default ItemDetailsContainer;
