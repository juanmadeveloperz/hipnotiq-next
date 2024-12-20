import React from 'react';
import { FaMicrophone, FaCogs, FaPalette, FaHandsHelping, FaDollarSign } from 'react-icons/fa'; // Importa los íconos necesarios

const Services: React.FC = () => {
  return (
    <div className="p-8 bg-custom-black text-custom-white">
      <h2 className="text-3xl font-bold mb-4 text-custom-purple text-center">Nuestros Servicios</h2>
      <ul className="space-y-4 text-center list-none">
        <li className="text-lg font-medium tracking-wider text-custom-purple-medium">
          <FaMicrophone className="inline-block mr-2" /> Grabación profesional en estudio
          <p className="text-sm text-custom-white mt-1">Obtén grabaciones de alta calidad con nuestro equipo profesional.</p>
        </li>
        <li className="text-lg font-medium tracking-wider text-custom-purple-darker">
          <FaCogs className="inline-block mr-2" /> Mezcla y mastering de alta calidad
          <p className="text-sm text-custom-white mt-1">Mejoramos tus grabaciones para que suenen impecables.</p>
        </li>
        <li className="text-lg font-medium tracking-wider text-custom-purple-darkest">
          <FaPalette className="inline-block mr-2" /> Producción musical completa
          <p className="text-sm text-custom-white mt-1">Desde la concepción hasta la creación final de tu música.</p>
        </li>
        <li className="text-lg font-medium tracking-wider text-custom-purple-medium">
          <FaHandsHelping className="inline-block mr-2" /> Asesoramiento técnico y artístico
          <p className="text-sm text-custom-white mt-1">Te ayudamos a sacar el máximo partido a tu proyecto.</p>
        </li>
        <li className="text-lg font-medium tracking-wider text-custom-purple-darker">
          <FaDollarSign className="inline-block mr-2" /> Edición y postproducción de audio
          <p className="text-sm text-custom-white mt-1">Pulimos tus grabaciones para que brillen como nunca.</p>
        </li>
      </ul>
      <h2 className="text-5xl font-bold mt-8 mb-4 text-custom-purple-dark text-center">Paquetes y Precios</h2>
      <div className="flex flex-col items-center space-y-4">
        <div className="neon p-6 border-2 border-custom-purple rounded-lg bg-custom-black text-center w-full md:w-1/2 lg:w-1/3 shadow-lg animate-pulse">
          <h3 className="text-2xl font-bold text-custom-purple mb-2">Paquete Básico</h3>
          <p className="text-lg text-custom-white mb-2">Incluye grabación de una pista y mezcla básica.</p>
          <p className="text-lg font-bold text-custom-white">Precio: 100€</p>
        </div>
        <div className="neon p-6 border-2 border-custom-purple rounded-lg bg-custom-black text-center w-full md:w-1/2 lg:w-1/3 shadow-lg animate-pulse">
          <h3 className="text-2xl font-bold text-custom-purple mb-2">Paquete Premium</h3>
          <p className="text-lg text-custom-white mb-2">Incluye grabación de hasta tres pistas, mezcla avanzada y mastering.</p>
          <p className="text-lg font-bold text-custom-white">Precio: 300€</p>
        </div>
        <div className="neon p-6 border-2 border-custom-purple rounded-lg bg-custom-black text-center w-full md:w-1/2 lg:w-1/3 shadow-lg animate-pulse">
          <h3 className="text-2xl font-bold text-custom-purple mb-2">Paquete Completo</h3>
          <p className="text-lg text-custom-white mb-2">Incluye grabación ilimitada, mezcla avanzada, mastering y producción completa.</p>
          <p className="text-lg font-bold text-custom-white">Precio: 500€</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
