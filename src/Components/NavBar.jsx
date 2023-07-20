import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'
import "../index.css"

const NavBar = () => {
  return (
    <div className="navDiv">
      <h1>
        HeavyFitness
      </h1>
      <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Actions
          </MenuButton>
          <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
      </Menu>
      <CartWidget />
    </div>
  )
}

export default NavBar