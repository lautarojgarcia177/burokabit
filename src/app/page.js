"use client";

import {
  Button,
  Heading,
  OrderedList,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { fetchUsdtValue } from "./api/api";
import Image from "next/image";

export default function Home() {
  const precioCompra = 1225.98;
  const precioVenta = 1239.01;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usdtValue, setUsdtValue] = useState(null);

  useEffect(() => {
    const getUsdtValue = async () => {
      try {
        const value = await fetchUsdtValue();
        setUsdtValue(value);
      } catch (err) {
        setError("Failed to fetch USDT value");
      } finally {
        setLoading(false);
      }
    };

    getUsdtValue();
  }, []);

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
        <div>
          {(!loading || !error) && (
            <div className="grid grid-cols-2 grid-rows-2 gap-x-8">
              <div>
                <p className="text-3xl">AR$ {usdtValue?.bid}</p>
              </div>
              <div>
                <p className="text-3xl">AR$ {usdtValue?.ask}</p>
              </div>
              <div>
                <p className="text-lg">VENDÉS</p>
              </div>
              <div>
                <p className="text-lg">COMPRÁS</p>
              </div>
            </div>
          )}
          <p className="mt-2">
            USDT Sin limites. <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sin
            impuestos. <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sin
            comisiones
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center justify-between pt-20 pb-20 ps-5 pe-5 text-center bg_primary h-85dvh">
        <Heading as="h1" size="xl">
          EMPEZAR A OPERAR CON NOSOTROS: ES MUY SIMPLE
        </Heading>
        <Image
          src="/A_clean_and_modern_landing_page_image_for_a_crypto_cropped.png"
          width={500}
          height={500}
        />
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
