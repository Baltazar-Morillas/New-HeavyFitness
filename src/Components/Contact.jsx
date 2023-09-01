import {
  Accordion,
  AccordionItem,
  Box,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import "../index.css";

const Contact = () => {
  return (
    <div>
      <div className="contacto">
        <div>
          <h4>Contactanos!</h4>
          <input type="text" placeholder="Nombre y apellido" name="Nombre" />
          <br />
          <br />
          <label>Edad</label>
          <br />
          <input type="date" name="Edad" />
          <br />
          <br />
          <textarea name="comentario" cols="25" rows="5" className="textarea"></textarea>
          <br />
          <br />
          <input type="submit" />
        </div>
      </div>
      <br/>
      <hr/>
      <div className="FAQ">
        <h2>FAQ</h2>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Devoluciones
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <strong>¿Como devuelvo mi producto?</strong>
              Actualmente en HeavyFitness no hay devoluciones de compras online. En el caso de que hayas comprado un producto en una de nuestras sucursales, tenes 30 dias para devolver tu compra y cambiarlo.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Entregas
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <strong>¿Las entregas son a domicilio?</strong>
              <p>Las entregas no son a domicilio, podes retirar tu producto en la sucursal mas cercana con un codigo que te enviamos al mail luego de efectuar la compra.</p>
              <strong>¿Como retiro si no hay ninguna sucursal donde vivo?</strong>
              <p>Si no hay ninguna sucursal de HeavyFitness donde vivis, entonces podes retirar tu compra por medio de una empresa de logistica o correo dependiendo de tu ubicacion geografica.</p>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Garantia
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <strong>¿Los productos tienen garantia?</strong>
            <p>Todos los productos de HeavyFitness tienen una garantia de 60 dias despues de efectuar la compra, si tuvo algun inconveniente puede devolver el articulo y sera reembolsado.</p>     
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Contact;
