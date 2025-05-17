"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaSailboat } from "react-icons/fa6";
import { MdMenu, MdClose } from "react-icons/md";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Gallery", link: "/gallery" },
    { name: "Reviews", link: "/reviews" },
    { name: "Contact", link: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header>
      <nav className="flex justify-between px-10 items-center px-6 p-8 text-white bg-rich-black shadow-md relative z-50">
        {/* Logo */}
        <div className="flex items-center gap-3 text-2xl font-semibold">
          <FaSailboat />
          <h1 className="hidden md:block text-lg sm:text-xl">HOGENAKKAL BOATING</h1>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-center bg-primary">
          {links.map(({ name, link }) => (
            <li key={name}>
              <Link href={link} className="hover:text-cinereous transition">
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Icon */}
        <div className="md:hidden text-3xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <MdClose /> : <MdMenu />}
        </div>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-eerie-black text-center px-6 py-4 absolute top-16 w-full shadow-md animate-slideDown z-40">
          <ul className="grid gap-4 text-lg">
            {links.map(({ name, link }) => (
              <li key={name} className="bg-secondary border-1 p-2 rounded-md">
                <Link
                  href={link}
                  className="block w-full hover:text-cinereous transition"
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
