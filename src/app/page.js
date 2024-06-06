"use client";

import {
  Heading,
  OrderedList,
  ListItem,
  UnorderedList,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { fetchUsdtValue } from "./api/api";
import Image from "next/image";

const steps = [
  {
    title: "Primero",
    description: "Completa el formulario de contacto con tus datos.",
  },
  {
    title: "Segundo",
    description: "Transferí las 24hs desde tu banco o billetera virtual.",
  },
  { title: "Tercero", description: "LISTO, OPERÁ SIN LÍMITES!" },
];

export default function Home() {
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

  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <>
      <section className="parallax bg__img--arg-crypto flex flex-col items-center justify-around pb-20 ps-5 pe-5 text-center h-85dvh shadow-2xl">
        <div className="text-background--white shadow-2xl p-2">
          <Heading as="h1" size="xl" className="mb-3">
            TUS PESOS A CRYPTO, EN MINUTOS.
          </Heading>
          <Heading as="h2" size="md" className="mb-3">
            EXPERIENCIA RÁPIDA, FÁCIL Y SEGURA
          </Heading>
          <Heading as="h2" size="sm">
            FINTECH ARGENTINA, CREADA POR Y PARA ARGENTINOS.
          </Heading>
        </div>
        <div className="text-background--white p-2">
          {(!loading || !error) && (
            <div className="grid grid-cols-2 grid-rows-2 gap-x-4 h-60px">
              <div>
                <p className="text-2xl">
                  AR$<span className="text-4xl">{usdtValue?.totalBid}</span>
                </p>
              </div>
              <div>
                <p className="text-2xl">
                  AR$<span className="text-4xl">{usdtValue?.totalAsk}</span>
                </p>
              </div>
              <div>
                <p className="text-sm text-start ml-4 mt-1">VENDÉS</p>
              </div>
              <div>
                <p className="text-sm text-start ml-3 mt-1">COMPRÁS</p>
              </div>
            </div>
          )}
          <p className="text-sm">
            USDT Sin limites. Sin impuestos. Sin comisiones
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center justify-around pt-10 pb-20 ps-5 pe-5 text-center h-85dvh shadow-2xl">
        <Heading as="h1" size="md" className="mb-2">
          EMPEZAR A OPERAR CON NOSOTROS: ES MUY SIMPLE
        </Heading>
        <Image
          src="/A_clean_and_modern_landing_page_image_for_a_crypto_cropped.png"
          width={500}
          height={500}
          className="mb-10"
        />
        <Stepper
          index={activeStep}
          orientation="vertical"
          height="200px"
          gap="0"
        >
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={<StepNumber />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <div className="text-start">{step.description}</div>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      </section>
      <section className="parallax bg__img--crypto_operation flex flex-col items-center justify-between sm:justify-around pt-20 pb-20 ps-5 pe-5 text-center h-85dvh shadow-2xl">
        <div className="text-background--white p-3">
          <Heading as="h1" size="lg">
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
        </div>
        <div className="text-background--white p-3">
          <Heading as="h1" size="lg">
            Y PRÓXIMAMENTE PODRÁS:
          </Heading>
          <UnorderedList className="text-start">
            <ListItem>
              Pagar tus impuestos o servicios con criptomonedas
            </ListItem>
            <ListItem>Invertir en DeFi</ListItem>
            <ListItem>
              {" "}
              Tarjeta prepaga, internacional y contactless (sin costo de envío
              ni mantenimiento, para usarla en cualquier lugar del mundo)
            </ListItem>
          </UnorderedList>
        </div>
      </section>
    </>
  );
}
