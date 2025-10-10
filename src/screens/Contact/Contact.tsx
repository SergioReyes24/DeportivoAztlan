import React, { useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { Button } from "../../components/ui/button";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [messageSent, setMessageSent] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessageSent("✅ Gracias, tu mensaje ha sido recibido.");
    e.currentTarget.reset(); // limpia el formulario
    setTimeout(() => setMessageSent(""), 3000); // mensaje desaparece tras 3s
  };

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800">
      {/* HEADER */}
      <Header onMenuToggle={setMenuOpen} />

      <div className={`transition-all duration-300 ${menuOpen ? "pt-[250px] sm:pt-[100px]" : "pt-0"}`}>
        {/* HERO */}
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative w-full h-[50vh] sm:h-[60vh] flex items-center justify-center bg-[#219EBC]"
        >
          <img
            src="IMG/cancha-soccer.webp"
            alt="Atención al cliente"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <motion.div
            className="relative z-10 text-center text-white px-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Contáctanos
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Estamos aquí para ayudarte. Completa el formulario y te responderemos lo antes posible.
            </p>
          </motion.div>
        </motion.section>

        {/* FORMULARIO */}
        <section className="flex flex-col items-center justify-center py-16 sm:py-20 bg-gray-50 px-4 sm:px-6">
          <motion.div
            className="bg-white p-8 sm:p-10 md:p-14 rounded-2xl shadow-xl w-full max-w-[600px] border border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-center text-[#219EBC] mb-6 sm:mb-8 font-bold text-2xl">
              Formulario de contacto
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
              <input
                className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00c0e8]"
                type="text"
                placeholder="Nombre*"
                required
              />
              <input
                className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00c0e8]"
                type="email"
                placeholder="Correo electrónico*"
                required
              />
              <input
                className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00c0e8]"
                type="tel"
                placeholder="Teléfono"
              />
              <input
                className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00c0e8]"
                type="text"
                placeholder="Asunto*"
                required
              />
              <textarea
                className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00c0e8] h-28 sm:h-32 resize-none"
                placeholder="Mensaje*"
                required
              ></textarea>
              <Button
                type="submit"
                className="bg-[#00c0e8] hover:bg-[#00a8d0] text-white text-base py-3 transition"
              >
                Enviar mensaje
              </Button>
            </form>

            {messageSent && (
              <p className="mt-4 text-center text-green-600 font-medium">{messageSent}</p>
            )}
          </motion.div>

          <div className="mt-8 sm:mt-10 text-center text-gray-600 text-sm sm:text-base leading-relaxed">
            <p>📅 Lunes a Viernes, 9:00 - 18:00 hrs</p>
            <p>
              📧 Escríbenos a{" "}
              <strong className="text-[#219EBC]">soporte@deportivoaztlan.com</strong>
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Contact;
