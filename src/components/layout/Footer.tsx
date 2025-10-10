import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("✅ Gracias, tu correo ha sido registrado.");
    setTimeout(() => setMessage(""), 3000); // mensaje desaparece tras 3s
  };

  return (
    <footer className="bg-[#F8F9FA] text-gray-600 text-xs sm:text-sm py-10 px-4 sm:px-6 mt-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 border-b pb-6">
        <div>
          <p className="mb-2 text-sm sm:text-base">
            Recibe promociones, alertas de tarifas bajas y novedades.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 sm:gap-0">
            <input
              type="email"
              placeholder="Correo electrónico"
              className="border px-2 py-2 text-sm w-full rounded"
              required
            />
            <button className="bg-[#219EBC] text-white px-3 py-2 text-sm rounded mt-2 sm:mt-0 sm:ml-2">
              Suscribirme
            </button>
          </form>
          {message && <p className="mt-2 text-green-600 text-sm">{message}</p>}

          {/* Redes sociales */}
          <div className="flex gap-4 mt-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="IMG/Facebook.svg" alt="Facebook" className="w-6 h-6 hover:opacity-80" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="IMG/Instagram.svg" alt="Instagram" className="w-6 h-6 hover:opacity-80" />
            </a>
          </div>
        </div>

        <div className="md:col-span-2 flex flex-col sm:flex-row justify-start sm:justify-end items-start sm:items-end space-y-4 sm:space-y-0 sm:space-x-8 mt-4 md:mt-0">
          <div>
            <h5 className="font-semibold mb-2 text-gray-800">Empresa</h5>
            <ul className="space-y-1">
              <li>
                <Link to="/about" className="hover:underline">Nosotros</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-6 text-sm sm:text-base">
        © 2025 Deportivo Aztlán. Todos los derechos reservados. |
        <a href="#" className="hover:underline ml-1">Aviso de privacidad</a>
      </div>
    </footer>
  );
};

export default Footer;
