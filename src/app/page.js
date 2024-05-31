import { Button } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center pt-20 pb-20">
        <Heading as="h1" size="2xl">
          TUS PESOS A CRYPTO, EN MINUTOS.
        </Heading>
        <Heading as="h2" size="lg" className="mt-5">
          EXPERIENCIA RÁPIDA, FÁCIL Y SEGURA
        </Heading>
        <Heading as="h2" size="md" className="mt-10">
          FINTECH ARGENTINA, CREADA POR Y PARA ARGENTINOS.
        </Heading>
      </section>
      <section className="bg_primary">
        <h3>EMPEZAR A OPERAR CON NOSOTROS: ES MUY SIMPLE</h3>
        <ol>
          <li>Completa el formulario de contacto con tus datos.</li>
          <li>Transferí las 24hs desde tu banco o billetera virtual.</li>
          <li>LISTO, OPERÁ SIN LÍMITES!</li>
        </ol>
      </section>
      <section>
        <h3>CON BUROKABIT PODÉS:</h3>
        <ul>
          <li>
            Comprar y vender todas las criptomonedas disponibles con pesos y
            dólares.
          </li>
          <li>Generar rendimientos diarios en tus criptomonedas favoritas</li>
          <li>Transferencias gratuitas e inmediatas en ARS</li>
        </ul>
        <h3>Y PRÓXIMAMENTE PODRÁS:</h3>
        <ul>
          <li>Pagar tus impuestos o servicios con criptomonedas</li>
          <li>Invertir en DeFi</li>
          <li>
            Tarjeta prepaga, internacional y contactless (sin costo de envío ni
            mantenimiento, para usarla en cualquier lugar del mundo)
          </li>
        </ul>
      </section>
    </>
  );
}
