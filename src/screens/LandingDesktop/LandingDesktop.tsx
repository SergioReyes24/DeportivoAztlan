import React, { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

// Actividades destacadas
const activities = [
  {
    id: 1,
    title: "🏀 Básquetbol",
    description:
      "Entrena tus reflejos, mejora tu coordinación y disfruta partidos llenos de energía en nuestras canchas.",
    image: "IMG/cancha-basketball.webp",
  },
  {
    id: 2,
    title: "🩰 Ballet",
    description:
      "Expresa tu cuerpo con gracia y disciplina. Contamos con clases para todas las edades y niveles.",
    image: "IMG/estudioballet.webp",
  },
  {
    id: 3,
    title: "🏊 Natación",
    description:
      "Fortalece tu cuerpo y mente con entrenamientos acuáticos en una alberca equipada para tu comodidad.",
    image: "IMG/cancha-alberca.webp",
  },
  {
    id: 4,
    title: "⚽ Fútbol",
    description:
      "Vive la pasión del deporte más popular con entrenamientos, ligas y torneos para todas las categorías.",
    image: "IMG/cancha-soccer.webp",
  },
];

// Preguntas frecuentes
const faqItems = [
  {
    question: "¿Necesito ser socio para poder entrenar?",
    answer:
      "No necesariamente. Puedes acceder a clases individuales o comprar pases por día, aunque las membresías te brindan beneficios exclusivos y descuentos.",
  },
  {
    question: "¿Qué tipos de membresía ofrecen?",
    answer:
      "Tenemos membresías mensuales, trimestrales y anuales, con opciones individuales, familiares y para estudiantes.",
  },
  {
    question: "¿Tienen clases para niños?",
    answer:
      "Sí, ofrecemos programas adaptados para niños desde los 4 años, con entrenadores especializados en cada disciplina.",
  },
  {
    question: "¿Es necesario llevar mi propio equipo?",
    answer:
      "No, contamos con el equipo básico disponible para préstamo. Sin embargo, puedes traer el tuyo si lo prefieres.",
  },
  {
    question: "¿Se pueden rentar las canchas?",
    answer:
      "Sí, puedes reservar nuestras canchas por hora o por evento. Te recomendamos hacerlo con anticipación.",
  },
  {
    question: "¿Ofrecen entrenadores o clases guiadas?",
    answer:
      "Sí, contamos con instructores especializados en cada disciplina para ayudarte a alcanzar tus metas.",
  },
];

const LandingDesktop: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);

  // Pre-cargar la imagen del hero para evitar parpadeo
  useEffect(() => {
    const img = new Image();
    img.src = "IMG/cancha-alberca.webp";
    img.onload = () => setHeroLoaded(true);
  }, []);

  return (
    <div className="bg-cover overflow-hidden w-full h-full relative">
      <Header onMenuToggle={setMenuOpen} />

      <div
        className={`transition-all duration-300 ${
          menuOpen ? "pt-[260px] sm:pt-[100px]" : "pt-0"
        }`}
      >
        {/* Hero optimizado con animación tipo AboutUs */}
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative h-[400px] sm:h-[400px] p-10 md:p-60 flex items-center justify-center text-center"
          style={{
            backgroundImage: heroLoaded
              ? "url('IMG/cancha-alberca.webp')"
              : "linear-gradient(135deg, #004b63, #007fa3)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black/40 absolute inset-0" />
          <div className="relative z-10 text-white px-6">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-lg"
            >
              Tu lugar para entrenar, convivir y crecer.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-lg sm:text-2xl mb-8"
            >
              Inscríbete hoy y empieza a disfrutar del deporte como nunca.
            </motion.p>
            <Link to="/register">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                <Button className="h-[50px] w-[250px] sm:w-[300px] bg-[#00c0e8] hover:bg-[#00a8d0] text-white transition">
                  Únete ya
                </Button>
              </motion.div>
            </Link>
          </div>
        </motion.section>

        {/* Actividades con lazy loading */}
        <section className="py-20 px-4 overflow-hidden">
          <h2 className="text-center text-3xl font-semibold mb-16 text-neutral-900">
            Actividades destacadas
          </h2>
          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{ x: ["0px", "-100%"] }}
              transition={{
                x: { repeat: Infinity, duration: 25, ease: "linear" },
              }}
            >
              {[...activities, ...activities].map((activity, index) => (
                <Card
                  key={index}
                  className="min-w-[250px] bg-[#2596be] border-none rounded-[10px] overflow-hidden"
                >
                  <CardContent className="p-0">
                    <Suspense
                      fallback={
                        <div className="w-full h-[200px] bg-gray-300 animate-pulse" />
                      }
                    >
                      <img
                        className="w-full h-[200px] object-cover rounded-t-[5px]"
                        alt={`Actividad de ${activity.title}`}
                        src={activity.image}
                        loading="lazy"
                        width="300"
                        height="200"
                      />
                    </Suspense>
                    <div className="p-6 text-center">
                      <h3 className="text-white font-semibold mb-2">
                        {activity.title}
                      </h3>
                      <p className="text-white text-sm">{activity.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <motion.section
          className="py-20 px-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-10 text-neutral-900">
              Preguntas Frecuentes (FAQ)
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-black rounded-[10px] px-4"
                >
                  <AccordionTrigger className="font-medium text-lg text-left py-4 transition-colors hover:bg-[#00c0e8] hover:text-black">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-black text-base pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.section>

        {/* CTA con logo animado */}
        <motion.section
          className="bg-neutral-900 py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center px-4 flex flex-col items-center gap-6">
            {/* Logo */}
            <motion.img
              className="w-[120px] sm:w-[188px] h-[145px] sm:h-[227px] object-cover mx-auto"
              alt="Logo Deportivo Aztlán"
              src="IMG/logo.webp"
              loading="lazy"
              width="180"
              height="200"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.2 } },
              }}
            />

            {/* Título */}
            <motion.h2
              className="text-white text-2xl sm:text-4xl font-bold"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.4 } },
              }}
            >
              Empieza hoy en el Deportivo Aztlán
            </motion.h2>

            {/* Texto */}
            <motion.p
              className="text-white text-base sm:text-lg"
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.6 } },
              }}
            >
              No esperes más para activarte, convivir y alcanzar tus metas.
            </motion.p>

            {/* Botón */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.8 } },
              }}
            >
              <Link to="/register">
                <Button className="h-[50px] w-[250px] sm:w-[695px] bg-[#00c0e8] hover:bg-[#00a8d0] text-white transition-colors">
                  Regístrate
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.section>

        <Footer />
      </div>
    </div>
  );
};

export default LandingDesktop;
