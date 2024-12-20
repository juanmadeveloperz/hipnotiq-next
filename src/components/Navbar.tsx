import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 text-white fixed w-full top-0 z-50 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/logo.jpg" alt="Logo" className="h-10 mr-2 rounded-full"/>
        <span className="text-xl font-bold"></span>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <ul className={`md:flex md:items-center md:space-x-4 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent ${isOpen ? 'block' : 'hidden'}`}>
        <li>
          <Link href="/" className="block md:inline hover:text-blue-500 p-4">Inicio</Link>
        </li>
        <li>
          <Link href="/about" className="block md:inline hover:text-blue-500 p-4">Sobre Nosotros</Link>
        </li>
        <li>
          <Link href="/services" className="block md:inline hover:text-blue-500 p-4">Servicios</Link>
        </li>
        <li>
          <Link href="/portfolio" className="block md:inline hover:text-blue-500 p-4">Portafolio</Link>
        </li>
        <li>
          <Link href="/gallery" className="block md:inline hover:text-blue-500 p-4">Galería</Link>
        </li>
        <li>
          <Link href="/blog" className="block md:inline hover:text-blue-500 p-4">Blog</Link>
        </li>
        <li>
          <Link href="/contact" className="block md:inline hover:text-blue-500 p-4">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
