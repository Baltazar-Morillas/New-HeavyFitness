import { useContext } from "react";
import { CartContext } from "../context/ShopppingCartContext";

const ComponenteA = () => {
  const { cart, setCart, longitud, comision } = useContext(CartContext);

  return (
    <div>
      <h1>{comision}</h1>
      <p>{cart}</p>
      <button onClick={()=>setCart("Nuevo valor")}>Cambiar valor</button>
      <p>Longitud:{longitud}</p>
    </div>
  );
};

export default ComponenteA;
