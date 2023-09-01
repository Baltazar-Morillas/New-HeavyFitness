import React from 'react'
import CartWidget from './CartWidget'
import "../index.css"
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navDiv">
      <Link to={"/"}>
        <img src="https://res.cloudinary.com/dbguo4alu/image/upload/v1664234663/HeavyFitness/Logo2_lcerdv.jpg" alt="Logo HeavyFitnes"/>
      </Link>
      <h1 className='navh1'>
        HeavyFitness
      </h1>
      <ul className='categorias'>
        <Link to={"/category/suplementos"}>
          <p>Suplementos</p>
        </Link>
        <Link to={"/category/accesorios"}>
          <p>Accesorios</p>
        </Link>
        <Link to={"/category/ropa"}>
          <p>Ropa</p>
        </Link>
        <Link to={"/contacto"}>
          <p>Contacto</p>
        </Link>
      </ul>
      <Link to={"/cart"}>
        <CartWidget />
      </Link>
    </div>
  )
}

export default NavBar