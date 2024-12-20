import React from 'react';
import { FaWhatsapp, FaInstagram, FaEnvelope, FaUser } from 'react-icons/fa'; // Importa íconos

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-bold mb-2">Contacto</h4>
          <p className="neon">
            <FaWhatsapp className="inline-block mr-2 text-green-400" />
            <a href="https://wa.me/34123456789" target="_blank" rel="noopener noreferrer" className="text-green-400">
              +34 123 456 789
            </a>
          </p>
          <p className="neon">
            <FaEnvelope className="inline-block mr-2 text-blue-400" />
            <a href="mailto:hipnotiqsoundrecords@gmail.com" className="text-blue-400">
              hipnotiqsoundrecords@gmail.com
            </a>
          </p>
          <p className="neon">
            <FaInstagram className="inline-block mr-2 text-pink-400" />
            <a href="https://www.instagram.com/hipnotiqsoundrecords" target="_blank" rel="noopener noreferrer" className="text-pink-400">
              @hipnotiqsoundrecords
            </a>
          </p>
        </div>
        <div className="mb-4 md:mb-0 text-center">
          <h4 className="text-lg font-bold mb-2">Productor</h4>
          <p className="neon">
            <FaUser className="inline-block mr-2 text-custom-purple" />
            <span className="text-custom-white">MVG</span>
          </p>
          <button className="neon-button bg-custom-purple text-white py-2 px-4 rounded-full mt-2">
            <FaInstagram className="inline-block mr-2 text-white" />
            <a href="https://www.instagram.com/mvg_official" target="_blank" rel="noopener noreferrer" className="text-white">
              Sígueme en Instagram
            </a>
          </button>
          <h4 className="text-lg font-bold mb-2 mt-4">Artista</h4>
          <p className="neon">
            <FaUser className="inline-block mr-2 text-custom-purple" />
            <span className="text-custom-white">Anthony K</span>
          </p>
          <button className="neon-button bg-custom-purple text-white py-2 px-4 rounded-full mt-2">
            <FaInstagram className="inline-block mr-2 text-white" />
            <a href="https://www.instagram.com/anthony_k_oficial" target="_blank" rel="noopener noreferrer" className="text-white">
              Sígueme en Instagram
            </a>
          </button>
        </div>
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-bold mb-2">Ubicación</h4>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093857!2d144.95373631531695!3d-37.81627977975154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577ed2f12345678!2sFederation+Square!5e0!3m2!1sen!2sau!4v1554254017824!5m2!1sen!2sau" 
            width="300" 
            height="200" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy"
            className="rounded"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
