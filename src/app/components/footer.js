import { Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg_dark">
      <Image
        src="/BurokaBit_FO_logo_transparent.png"
        width={200}
        height={200}
        alt="Birukabit logo"
      />
      <Text fontSize="xs" color="white">
        LA PLATAFORMA MÁS RÁPIDA PARA REALIZAR TUS OPERACIONES
      </Text>
    </footer>
  );
}
