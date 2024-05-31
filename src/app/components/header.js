"use client";

import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  DrawerHeader,
  DrawerBody,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import { links } from "../shared/links";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <nav className="flex justify-between">
      <IconButton
        variant="ghost"
        onClick={onOpen}
        aria-label="Search database"
        icon={<HamburgerIcon />}
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Burokabit</DrawerHeader>

          <DrawerBody></DrawerBody>
        </DrawerContent>
      </Drawer>
      <div className="pt-2">
        {links.map((link) => (
          <Link key={link.name} href={link.href} className="me-3">
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
