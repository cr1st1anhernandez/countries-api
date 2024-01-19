"use client"
import {Link, Image, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Nav():JSX.Element {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Navbar className=" keppel-light bg-[#eef2ff] dark:bg-[#111113] dark:keppel-dark" maxWidth="full" onMenuOpenChange={setIsMenuOpen}>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className="md:hidden"
      />
      <NavbarBrand>
        <Link href="/" className="flex gap-2">
          <Image width={30} height={30} src="/countries.svg" alt="" />
          <p className="font-bold text-inherit">NUCLEUS CHAT</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="gap-4" justify="center">
        <NavbarItem className="hidden md:flex">
          Documentación
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="hidden sm:flex">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-indigo-50 dark:bg-[#000]">
        <NavbarMenuItem>
          <Link color="primary" className="w-full" href="/">
            Documentación
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}
