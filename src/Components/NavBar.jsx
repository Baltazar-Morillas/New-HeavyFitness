import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
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
      <ul>
        <Link to={"/category/suplementos"}>
          Suplementos
        </Link>
        <Link to={"/category/accesorios"}>
          Accesorios
        </Link>
        <Link to={"/category/ropa"}>
          Ropa
        </Link>
        <Link to={"/contacto"}>
          Contacto
        </Link>
      </ul>
      <Link to={"/cart"}>
        <CartWidget />
      </Link>
    </div>
  )
}

export default NavBar