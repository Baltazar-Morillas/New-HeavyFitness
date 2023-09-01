import { Button } from "@chakra-ui/react";
import { useState } from "react";

const ItemCount = ({onAdd}) => {
  const [count, setCount] = useState(1);

  const addQty = () => {
    setCount(count + 1);
  };

  const substractQty = (e) => {
    if (count == 0) {
      e.preventDefault();
    } else {
      setCount(count - 1);
    }
  };

  return (
    <>
      <button onClick={addQty}>+</button>
      <p>{count}</p>
      <button onClick={substractQty}>-</button>
      <Button onClick={()=>onAdd(count)}>Agregar al carrito</Button>
    </>
  );
};

export default ItemCount;
