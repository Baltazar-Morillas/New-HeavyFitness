import React from 'react'
import Item from "./Item.jsx"
//Este va a mapear
const ItemList = ({productos}) => {
  return (
    <div className='items'>
     {productos.map((u)=><Item productos={u}/>)}
    </div>
  )
}

export default ItemList