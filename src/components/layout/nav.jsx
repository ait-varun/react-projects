"use client";
import { useState } from "react";
import Link from "next/link";
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

  const getLinkClassName = (href) => {
    const baseClass =
      "block mt-4 md:inline-block md:mt-0 text-white hover:text-white mr-4";
    if (pathname === href) {
      return `${baseClass} active`;
    }
    return baseClass;
  };

  return (
    <nav className="bg-teal-500 p-6">
      <div className="flex justify-between items-center">
        <div className="text-white font-bold md:hidden"> Logo</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="md:flex-grow md:flex md:justify-between text-center">
        <span className="text-white font-bold mr-4 hidden md:inline-block">
          Logo
        </span>
        <div className="flex gap-4">
          <Link href="/" onClick={closeMenu} className={getLinkClassName("/")}>
            Home
          </Link>
          <Link
            href="/about"
            onClick={closeMenu}
            className={getLinkClassName("/about")}>
            About
          </Link>
          <Link
            href="/contact"
            onClick={closeMenu}
            className={getLinkClassName("/contact")}>
            Contact
          </Link>
        </div>
        <div className="mt-4 md:mt-0">
          <span>Icon</span>
        </div>
      </div>
    </nav>
  );
}
