import React from 'react';

const Lanzamientos: React.FC = () => {
  const releases = [
    {
      image: '/assets/release1.png',
      date: '20-11-24',
      artist: 'Hezman feat Xavi Lantaron',
      song: 'Shelby'
    },
    {
      image: '/assets/release2.png',
      date: '20-06-24',
      artist: 'Vanilla Karr & Romy So Love',
      song: 'TOTORY'
    },
    {
      image: '/assets/release3.png',
      date: '19-04-24',
      artist: 'Sanxxe & El Fale & Seni 520 & Adictivio & You Lili & Blessed Bermudez',
      song: 'Chulaka'
    },
    {
      image: '/assets/release4.png',
      date: '23-12-22',
      artist: 'Papi Paler & Yomel El Meloso',
      song: 'Quiere otra mas'
    },
    {
      image: '/assets/release5.png',
      date: '30-09-22',
      artist: 'Papi Paler & Fito La R',
      song: 'Calle y joseo'
    },
    {
      image: '/assets/release6.png',
      date: '17-06-22',
      artist: 'Adictivio & Young Lili & Moises Justito',
      song: 'Chulaka'
    }
    // Añade más lanzamientos según sea necesario
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Lanzamientos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {releases.map((release, index) => (
          <div 
            key={index} 
            className="release-card relative p-4 border rounded bg-white shadow"
            style={{ backgroundImage: `url(${release.image})`, backgroundSize: 'cover' }}
          >
            <div className="info absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white opacity-0 hover:opacity-100 transition-opacity">
              <p>Fecha de lanzamiento: {release.date}</p>
              <p>Artista: {release.artist}</p>
              <p>Canción: {release.song}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lanzamientos;
