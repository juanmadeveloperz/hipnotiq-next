import React from 'react';
import Head from 'next/head';
import { FaMicrophone, FaCogs, FaPalette, FaHandsHelping, FaDollarSign } from 'react-icons/fa'; // Importa los íconos necesarios

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Hipnotiq Sound Records</title>
        <meta name="description" content="Estudio de grabación profesional" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-custom-black text-custom-white">
        <section className="bg-cover bg-center h-96" style={{ backgroundImage: `url('/banner.png')` }}>
          <div className="bg-black bg-opacity-50 h-full flex items-center justify-center pt-16">
            <h1 className="neon-title text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center font-custom">Hipnotiq Sound Records</h1>
          </div>
        </section>
        <section className="p-8 bg-custom-black">
        <p className="text-4xl text-center font-medium text-custom-purple-dark font-mono animate-fadeIn">
          Descubre lo que hace único a nuestro estudio
        </p>

          <ul className="space-y-4 text-center list-none mt-4">
            <li className="text-lg font-medium tracking-wider text-custom-purple-medium">
              <FaMicrophone className="inline-block mr-2" /> Equipamiento de Alta Calidad
              <p className="text-sm text-custom-white mt-1">Grabaciones profesionales con equipos de última generación.</p>
            </li>
            <li className="text-lg font-medium tracking-wider text-custom-purple-darker">
              <FaCogs className="inline-block mr-2" /> Experiencia y Profesionales Capacitados
              <p className="text-sm text-custom-white mt-1">Nuestro equipo tiene años de experiencia en la industria.</p>
            </li>
            <li className="text-lg font-medium tracking-wider text-custom-purple-darkest">
              <FaPalette className="inline-block mr-2" /> Ambiente Creativo y Familiar
              <p className="text-sm text-custom-white mt-1">Un espacio cómodo y acogedor para estimular tu creatividad.</p>
            </li>
            <li className="text-lg font-medium tracking-wider text-custom-purple-medium">
              <FaHandsHelping className="inline-block mr-2" /> Asesoramiento Personalizado
              <p className="text-sm text-custom-white mt-1">Te guiamos en cada paso del proceso para alcanzar tus objetivos.</p>
            </li>
            <li className="text-lg font-medium tracking-wider text-custom-purple-darker">
              <FaDollarSign className="inline-block mr-2" /> Precios Competitivos
              <p className="text-sm text-custom-white mt-1">Ofrecemos paquetes adaptados a tu presupuesto.</p>
            </li>
          </ul>
          <div className="text-center mt-8 text-2xl">
            <button className="px-4 py-2 bg-custom-purple-darker text-black rounded hover:bg-custom-purple-medium animate-pulse">
              <a href="/services">Conoce Nuestros Servicios</a>
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
