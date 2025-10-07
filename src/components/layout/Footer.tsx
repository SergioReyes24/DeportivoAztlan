import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#F8F9FA] text-gray-600 text-xs py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 border-b pb-6">
        <div>
          <p className="mb-2">
            Recibe promociones, alertas de tarifas bajas y novedades.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Correo electrónico"
              className="border px-2 py-1 text-sm w-full"
            />
            <button className="bg-[#219EBC] text-white px-3 py-1 text-sm">
              Suscribirme
            </button>
          </form>
        </div>
        <div className="md:col-span-2 flex justify-end items-end space-x-8">
          <div>
            <h5 className="font-semibold mb-2 text-gray-800">Empresa</h5>
            <ul className="space-y-1">
              <li>
                <a href="/" className="hover:underline">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-4">
        © 2025 Deportivo Aztlán. Todos los derechos reservados. |
        <a href="#" className="hover:underline ml-1">
          Aviso de privacidad
        </a>
      </div>
    </footer>
  );
};

export default Footer;
