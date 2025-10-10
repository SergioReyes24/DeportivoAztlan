import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

const AboutUs: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800">
      {/* Header con control de menú */}
      <Header onMenuToggle={setMenuOpen} />

      {/* Contenido principal con margen dinámico según menú */}
      <div className={`transition-all duration-300 ${menuOpen ? "mt-[250px] sm:mt-[150px]" : "mt-0"}`}>
        {/* Hero / Imagen principal */}
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative w-full h-[60vh] sm:h-[50vh] flex items-center justify-center bg-[#219EBC]"
        >
          <img
            src="IMG/estudioballet.webp" // Cambiado a .webp
            alt="Sobre nosotros"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="relative z-10 text-center text-white px-6">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-4xl sm:text-5xl font-bold mb-4"
            >
              Sobre Nosotros
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
            >
              En el Deportivo Aztlán fomentamos la salud, la disciplina y el sentido de comunidad
              a través del deporte y la convivencia.
            </motion.p>
          </div>
        </motion.section>

        {/* Valores */}
        <section className="bg-white py-16 text-center px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-10 text-[#023047]">Nuestros Valores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {["Comunidad", "Compromiso", "Disciplina"].map((valor, index) => (
              <motion.div
                key={valor}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-[#219EBC] text-white rounded-xl py-10 font-semibold shadow-md hover:scale-105 transition-transform"
              >
                {valor}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Misión y Visión */}
        <section className="bg-[#1A1A1A] text-white py-20 px-6 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold mb-12">Nuestra Esencia</h3>
          <div className="flex flex-col md:flex-row justify-center items-start gap-12 max-w-5xl mx-auto">
            {/* Misión */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 bg-[#219EBC]/10 rounded-xl p-6 sm:p-8"
            >
              <h4 className="text-xl sm:text-2xl font-bold mb-4">Misión</h4>
              <p className="text-sm sm:text-base leading-relaxed">
                Promover el bienestar físico y emocional a través del deporte,
                ofreciendo instalaciones adecuadas y programas que impulsen hábitos saludables.
              </p>
            </motion.div>

            {/* Línea divisoria */}
            <div className="hidden md:block w-px bg-white/40 h-40 self-center"></div>
            <div className="md:hidden w-2/3 h-px bg-white/40 mx-auto my-6"></div>

            {/* Visión */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 bg-[#219EBC]/10 rounded-xl p-6 sm:p-8"
            >
              <h4 className="text-xl sm:text-2xl font-bold mb-4">Visión</h4>
              <p className="text-sm sm:text-base leading-relaxed">
                Ser un referente deportivo en la ciudad, reconocido por fomentar la inclusión,
                la superación personal y la unión de la comunidad.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
