import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Proyectos Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Añade componentes o elementos para cada proyecto */}
        <div className="p-4 border rounded bg-white shadow">
          <h3 className="text-xl font-bold">Nombre del Proyecto</h3>
          <p className="text-lg">Descripción breve...</p>
        </div>
      </div>
      <h2 className="text-3xl font-bold mt-8 mb-4">Testimonios</h2>
      <p className="text-lg">Opiniones de clientes satisfechos.</p>
    </div>
  );
};

export default Portfolio;
