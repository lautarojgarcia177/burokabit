import {
  Button,
  Heading,
  OrderedList,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-around pt-20 pb-20 ps-5 pe-5 text-center h-85dvh">
        <Heading as="h1" size="xl">
          TUS PESOS A CRYPTO, EN MINUTOS.
        </Heading>
        <Heading as="h2" size="lg">
          EXPERIENCIA RÁPIDA, FÁCIL Y SEGURA
        </Heading>
        <Heading as="h2" size="md">
          FINTECH ARGENTINA, CREADA POR Y PARA ARGENTINOS.
        </Heading>
      </section>
      <section className="flex flex-col items-center justify-between pt-20 pb-20 ps-5 pe-5 text-center bg_primary h-85dvh">
        <Heading as="h1" size="xl">
          EMPEZAR A OPERAR CON NOSOTROS: ES MUY SIMPLE
        </Heading>
        <OrderedList className="text-start">
          <ListItem>Completa el formulario de contacto con tus datos.</ListItem>
          <ListItem>
            Transferí las 24hs desde tu banco o billetera virtual.
          </ListItem>
          <ListItem>LISTO, OPERÁ SIN LÍMITES!</ListItem>
        </OrderedList>
      </section>
      <section className="flex flex-col items-center justify-between pt-20 pb-20 ps-5 pe-5 text-center bg_gold h-85dvh">
        <Heading as="h1" size="xl">
          CON BUROKABIT PODÉS:
        </Heading>
        <UnorderedList className="text-start">
          <ListItem>
            Comprar y vender todas las criptomonedas disponibles con pesos y
            dólares.
          </ListItem>
          <ListItem>
            Generar rendimientos diarios en tus criptomonedas favoritas
          </ListItem>
          <ListItem>Transferencias gratuitas e inmediatas en ARS</ListItem>
        </UnorderedList>
        <Heading as="h1" size="xl">
          Y PRÓXIMAMENTE PODRÁS:
        </Heading>
        <UnorderedList className="text-start">
          <ListItem>Pagar tus impuestos o servicios con criptomonedas</ListItem>
          <ListItem>Invertir en DeFi</ListItem>
          <ListItem>
            {" "}
            Tarjeta prepaga, internacional y contactless (sin costo de envío ni
            mantenimiento, para usarla en cualquier lugar del mundo)
          </ListItem>
        </UnorderedList>
      </section>
    </>
  );
}
