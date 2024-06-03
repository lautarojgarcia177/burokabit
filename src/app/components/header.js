"use client";

import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  DrawerHeader,
  DrawerBody,
  Divider
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import { links } from "../shared/links";
import Image from "next/image";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <nav className={`flex justify-between pe-8 h-14 sm:h-20 bg_dark sticky top-0`}>
      <div className="sm:hidden">
        <div className="flex items-center">
          <HamburgerIcon
            color="whiteScheme.50"
            onClick={onOpen}
            className="ms-2"
            boxSize={10}
          />
          <Image
            src="/BurokaBit_FO_logo_transparent.png"
            width={150}
            height={150}
            alt="Birukabit logo"
          />
        </div>
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              {" "}
              <Image
                src="/BurokaBit_logo_transparent.png"
                width={200}
                height={200}
                alt="Birukabit logo"
              />
            <Divider/>
            </DrawerHeader>
            <DrawerBody className="flex flex-col">
              {links.map((link) => (
                <Link key={link.name} href={link.href} className="mb-3">
                  {link.name}
                </Link>
              ))}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
      <div className="hidden sm:block pt-1">
        {" "}
        <Image
          src="/BurokaBit_FO_logo_transparent.png"
          width={200}
          height={200}
          alt="Birukabit logo"
        />
      </div>
      <div className="pt-7 hidden sm:block">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="ms-6"
            color="whiteScheme.50"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
