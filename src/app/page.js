import { Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Button colorScheme="pantone611">Gray</Button>

      <div className="flex flex-col items-center">
        <h1 className="text-xl">TUS PESOS A CRYPTO, EN MINUTOS.</h1>
        <h2 className=""> EXPERIENCIA RÁPIDA, FÁCIL Y SEGURA</h2>
        <h3 className="mt-2">
          FINTECH ARGENTINA, CREADA POR Y PARA ARGENTINOS.
        </h3>
      </div>
      <h3>EMPEZAR A OPERAR CON NOSOTROS: ES MUY SIMPLE</h3>
      <ol>
        <li>Completa el formulario de contacto con tus datos.</li>
        <li>Transferí las 24hs desde tu banco o billetera virtual.</li>
        <li>LISTO, OPERÁ SIN LÍMITES!</li>
      </ol>
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
    </>
  );
}
