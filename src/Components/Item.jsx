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
import { Link } from "react-router-dom";

//Este imprime la card
const Item = (props) => {
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
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Link to={`/item/${props.productos.id}`}>
            <Button variant="solid" colorScheme="blue">
              Details
            </Button>
          </Link>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Item;
