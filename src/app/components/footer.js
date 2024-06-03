import { Text, Link, Divider } from "@chakra-ui/react";
import Image from "next/image";
import { links } from "../shared/links";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg_dark sm:grid sm:grid-cols-2 pt-3">
      <Image
        src="/BurokaBit_FO_logo_transparent.png"
        width={200}
        height={200}
        alt="Birukabit logo"
      />
      <Text fontSize="xs" color="white" align="center" className="ps-5 pe-5">
        LA PLATAFORMA MÁS RÁPIDA PARA REALIZAR TUS OPERACIONES
      </Text>
      <Divider className="mt-7"/>
      <div className="flex justify-around pt-6 pb-6 w-full">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="sm:ms-6"
            color="whiteScheme.50"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </footer>
  );
}
