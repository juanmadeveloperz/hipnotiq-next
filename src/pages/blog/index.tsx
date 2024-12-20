import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Blog y Noticias</h2>
      <div className="space-y-4">
        {/* Añade artículos y noticias */}
        <div className="p-4 border rounded bg-white shadow">
          <h3 className="text-xl font-bold">Título del Artículo</h3>
          <p className="text-lg">Resumen breve...</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
