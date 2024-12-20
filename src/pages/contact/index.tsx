import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4 text-custom-red">Contacto</h2>
      <form>
        <div className="mb-4 text-custom-purple">
          <label htmlFor="name" className="block text-lg font-bold">Nombre</label>
          <input type="text" id="name" className="w-full border rounded px-3 py-2" required/>
        </div>
        <div className="mb-4 text-custom-purple">
          <label htmlFor="email" className="block text-lg font-bold">Correo Electrónico</label>
          <input type="email" id="email" className="w-full border rounded px-3 py-2" required/>
        </div>
        <div className="mb-4 text-custom-purple">
          <label htmlFor="phone" className="block text-lg font-bold">Teléfono (Opcional) </label>
          <input type="tel" id="phone" className="w-full border rounded px-3 py-2"/>
        </div>
        <div className="mb-4 text-custom-purple">
          <label htmlFor="message" className="block text-lg font-bold">Mensaje</label>
          <textarea id="message" className="w-full border rounded px-3 py-2" required></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
