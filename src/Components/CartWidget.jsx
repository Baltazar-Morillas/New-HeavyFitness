import carrito from '../../public/carrito.svg'
import "../index.css"

const CartWidget = () => {
  return (
    <>
      <div className='carrito'>
        <img src={carrito} width="30px" height="30px"/>
        5
      </div>
    </>
  )
}

export default CartWidget