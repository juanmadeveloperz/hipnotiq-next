import React from 'react';

const About: React.FC = () => {
  return (
    <div className="p-8">
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Nuestra Historia</h2>
        <p className="text-lg mb-8">El estudio comenzó en...</p>
      </section>
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Nuestro Equipo</h2>
        <div className="flex justify-center flex-wrap">
          <div className="w-1/3 p-4 relative group">
            <img src="/mvg.jpg" alt="Artist 1" className="rounded-full shadow-lg mx-auto"/>
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-bold">Productor: MVG</h3>
              <p className="text-lg">@mvg_official</p>
            </div>
          </div>
          <div className="w-1/3 p-4 relative group">
            <img src="/anthony.png" alt="Artist 2" className="rounded-full shadow-lg mx-auto"/>
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-bold">Artista: Anthony K</h3>
              <p className="text-lg">@anthony_k_oficial</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
