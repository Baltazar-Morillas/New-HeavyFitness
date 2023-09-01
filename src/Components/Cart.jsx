import { useContext } from "react";
import { CartContext } from "../context/ShopppingCartContext";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
import '../index.css'


const Cart = () => {
  const { totalPrecio, cart } = useContext(CartContext);
  if (cart.length === 0) {
    return (
      <div className="carritoVacio">
        <p>No se encuentran productos en el carrito.</p>
        <Link to={"/"}>
          <Button>Volver al Inicio</Button>
        </Link>
      </div>
    );
  }
  return (
    <div>
      {cart.map((producto) => (
        <ItemCart key={producto.id} producto={producto}/>
      ))}
      <div className="totalCarrito">
        <p>Total:${totalPrecio()}</p>
        <Link to={'/checkout'}>
          <Button>Finalizar compra</Button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
