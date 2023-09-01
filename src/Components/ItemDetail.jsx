import React, { useState, useContext } from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  // ButtonGroup,
  // Button,
} from "@chakra-ui/react";
import {CartContext} from '../context/ShopppingCartContext'
import {Button} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import ItemCount from "./ItemCount";
import "../index.css"

//import { Link } from "react-router-dom";

const ItemDetail = (props) => {
  const [goToCart, setGoToCart] = useState(false)
  const {addToCart} = useContext(CartContext)

  const onAdd = (quantity)=>{
    setGoToCart(true)
    addToCart(props.productos, quantity)
  }

  return (
    <Card maxW="sm" id={props.productos.nombre} className="elementosCard">
      <CardBody>
        <Image
          src={props.productos.img}
          alt={props.productos.nombre}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{props.productos.nombre}</Heading>
          <Text>{props.productos.descripcion}</Text>
          <Text color='blue.600' fontSize='2xl'>${props.productos.precio}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter className="contador">
        {
          goToCart
          ?
          <Link to={"/cart"}>
            <Button>Finalizar compra</Button>
          </Link>
          :
          <ItemCount onAdd={onAdd}/>
        }
      </CardFooter>
    </Card>
  );
};

export default ItemDetail;
