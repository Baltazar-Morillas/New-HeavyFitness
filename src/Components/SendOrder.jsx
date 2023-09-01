import { useState, useContext } from 'react'
import {collection, addDoc, getFirestore } from "firebase/firestore"
import {CartContext} from "../context/ShopppingCartContext"
import "../index.css"

const SendOrder = () => {
    const {cart, totalPrecio, clearCart} = useContext(CartContext)
    const [telefono, setTelefono] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [orderId, setOrderId] = useState(null)

    const handleClick=(e)=>{
        setTimeout(()=>{
            clearCart()
        }, 2000)
    }

    const db = getFirestore()
    const handleSubmit = (e)=>{
        e.preventDefault()
        addDoc(ordersCollection, order).then(({id})=>
            setOrderId(id))
    }
    const order = {
        name,
        email,
        telefono,
        items: cart.map((producto)=>({id:producto.id, nombre:producto.nombre, precio:producto.precio, cantidad: producto.quantity})),
        total: totalPrecio()
    }

    const ordersCollection = collection(db, "orden")

  return (
    <div className='checkout'>
        <h1>Enviando ordenes</h1>
        <div>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Nombre y Apellido'
                onChange={(e)=>setName(e.target.value)}
            />
            <input type='text' placeholder='Email'
                onChange={(e)=>setEmail(e.target.value)}
            />
            <input type='text' placeholder='Ingrese nuevamente el Email'
                onChange={(e)=>setEmail(e.target.value)}
            />
            <input type='number' placeholder='Telefono'
                onChange={(e)=>setTelefono(e.target.value)}
            />
            <button type='submit' onClick={(e)=>handleClick(e)}>Enviar informacion</button>
        </form>
        </div>
        <p>Numero de orden: {orderId}</p>
    </div>
  )
}

export default SendOrder