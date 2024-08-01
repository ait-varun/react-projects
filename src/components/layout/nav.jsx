"use client";
import { useState } from "react";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const getLinkClass = (href) => {
    const isActive = pathname.includes(href);
    return `${isActive ? "text-black" : ""} hover:text-white`;
  };

  const links = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
  ];

  return (
    <nav className="bg-teal-500 p-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Logo</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center items-center gap-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={getLinkClass(link.href)}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu Icon */}
        <button
          className="text-white w-10 h-10 relative focus:outline-none bg-transparent md:hidden"
          onClick={toggleMenu}>
          <span className="sr-only">Open main menu</span>
          <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                isOpen ? "rotate-45" : "-translate-y-1.5"
              }`}></span>
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                isOpen ? "opacity-0" : ""
              }`}></span>
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                isOpen ? "-rotate-45" : "translate-y-1.5"
              }`}></span>
          </div>
        </button>

        <span className="hidden md:inline text-white">Icon</span>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-56 opacity-100" : "max-h-0 opacity-0"
        }`}>
        <ul className="pt-4 pb-3">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block py-2 ${getLinkClass(
                  link.href
                )} text-center hover:font-bold`}
                onClick={closeMenu}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
