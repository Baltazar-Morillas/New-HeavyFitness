import React from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
//import { Link } from "react-router-dom";

const ItemDetail = (props) => {
  return (
    <Card maxW="sm" id={props.productos.id}>
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
      <CardFooter>
        <ButtonGroup spacing="2">
            <Button>Añadir al carrito</Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ItemDetail;
