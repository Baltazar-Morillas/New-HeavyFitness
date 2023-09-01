import "../index.css"
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
    <div className="cardsStyles">
      <Card maxW="sm" id={props.productos.id}>
      <CardBody className="cardItem">
        <Image
          src={props.productos.img}
          alt={props.productos.nombre}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{props.productos.nombre}</Heading>
          {/* <Text>{props.productos.descripcion}</Text> */}
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
    </div>
  );
};

export default Item;
