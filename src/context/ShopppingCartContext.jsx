import {createContext, useState} from 'react'

export const CartContext = createContext('')

export const ShoppingCartProvider = ({children})=>{
    const [cart, setCart]=useState([])

    const addToCart = (item, quantity)=>{
        if(isInCart(item.id)){
            setCart(cart.map(producto=>{
                return producto.id==item.id ? {...producto, quantity: producto.quantity + quantity} : producto
            }))
            console.log(cart)
        }else{
            setCart([...cart, {...item, quantity}])
        }
    }

    const totalCart = ()=>{
        let total = cart.reduce((acumulador,producto)=>acumulador+producto.quantity,0)
        return total
    }

    const totalPrecio = ()=>{
        let total = cart.reduce((acumulador,producto)=>acumulador + producto.quantity*producto.precio, 0)
        return total
    }

    const clearCart=()=>setCart([]);

    const isInCart=(id)=>cart.find(producto=>producto.id===id) ? true:false;

    const deleteItem=(id)=>{
        setCart(cart.filter(producto=>producto.id!==id))
    }

    return(
        <CartContext.Provider value={{cart, setCart, addToCart, clearCart, isInCart, deleteItem, totalCart, totalPrecio}}>
            {children}
        </CartContext.Provider>
    )
}

export default ShoppingCartProvider