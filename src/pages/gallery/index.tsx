import React from 'react';

const Gallery: React.FC = () => {
  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Galería</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Añade imágenes y videos del estudio */}
        <div className="p-4">
          <img src="/path/to/image.jpg" alt="Estudio" className="rounded shadow"/>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
