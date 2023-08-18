import {createContext, useState} from 'react'

export const CartContext = createContext(null)

export const ShoppingCartProvider = ({children})=>{
    const [cart, setCart]=useState([])
    const comision = "React en CoderHouse"
    const longitud = cart.length
    return(
        <CartContext.Provider value={{cart, setCart, comision, longitud}}>
            {children}
        </CartContext.Provider>
    )
}

export default ShoppingCartProvider