import { Button } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { CartContext } from '../context/ShopppingCartContext'

const ItemCart = ({producto}) => {
    const {deleteItem} = useContext(CartContext)
  return (
    <>
        <div className="itemCart">
            <img src={producto.img}/>
            <p>{producto.nombre}</p>
            <p>{producto.quantity}</p>
            <p>{producto.precio}</p>
            <div>
                <Button onClick={()=>deleteItem(producto.id)}>Eliminar</Button>
            </div>
       </div>
       <hr/>
    </>
  )
}

export default ItemCart