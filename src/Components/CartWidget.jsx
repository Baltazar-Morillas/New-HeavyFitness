import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {CartContext} from '../context/ShopppingCartContext'
import { Link } from 'react-router-dom'
import "../index.css"
import { useContext } from 'react'

const CartWidget = () => {
  const {totalCart} = useContext(CartContext)
  const total = totalCart()

  return (
    <>
    <Link to={"/cart"}>
      <div className='carrito'>
        <div>
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
        <div>
          <span>{total || ''} </span>
        </div>
      </div>
    </Link>
    </>
  )
}

export default CartWidget