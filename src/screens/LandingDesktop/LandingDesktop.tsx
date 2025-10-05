import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

const activities = [
  {
    id: 1,
    title: "🏀 Básquetbol",
    description:
      "Entrena tus reflejos, mejora tu coordinación y disfruta partidos llenos de energía en nuestras canchas.",
    image: "/IMG/cancha-basketball.png",
  },
  {
    id: 2,
    title: "🩰 Ballet",
    description:
      "Expresa tu cuerpo con gracia y disciplina. Contamos con clases para todas las edades y niveles.",
    image: "/IMG/estudioballet.png",
  },
  {
    id: 3,
    title: "🏊 Natación",
    description:
      "Fortalece tu cuerpo y mente con entrenamientos acuáticos en una alberca equipada para tu comodidad.",
    image: "/IMG/cancha-alberca.png",
  },
  {
    id: 4,
    title: "⚽ Fútbol",
    description:
      "Vive la pasión del deporte más popular con entrenamientos, ligas y torneos para todas las categorías.",
    image: "/IMG/cancha-soccer.png",
  },
];

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

const navigationItems = [
  { label: "Nosotros", href: "#" },
  { label: "Contacto", href: "#" },
];

const footerLinks = [
  { label: "Empresa", href: "#" },
  { label: "Nosotros", href: "#" },
  { label: "Contacto", href: "#" },
];

const legalLinks = [
  {
    label: "© 2025 Deportivo Aztlán. Todos los derechos reservados.",
    href: "#",
  },
  { label: "Términos y condiciones", href: "#" },
  { label: "Aviso de privacidad", href: "#" },
];

const socialIcons = [
  { src: "/IMG/vector-17.svg", alt: "Social media" },
  { src: "/IMG/vector.svg", alt: "Social media" },
  { src: "/IMG/vector-5.svg", alt: "Social media" },
];

export const LandingDesktop = (): JSX.Element => {
  return (
    <div className="bg-cover overflow-hidden w-full h-full relative">
      {/* Hero Section */}
      <motion.section
        className="relative h-[800px] bg-[#2596BE] bg-cover bg-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Header */}
        <header className="flex items-center justify-between px-[50px] py-6 w-full">
          <motion.img
            className="w-20 h-[97px] object-cover"
            alt="Logoplataazucompleto"
            src="/IMG/logo.png"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />

          <nav className="flex items-center gap-[50px]">
            {navigationItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="text-white hover:text-neutral-100 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                {item.label}
              </motion.a>
            ))}
            <Button className="bg-white text-[#2596BE] hover:bg-[#00c0e8] hover:text-black transition">
              Inicia sesión
            </Button>
            <Button className="bg-[#00c0e8] hover:bg-[#00a8d0] text-white transition">
              Regístrate
            </Button>
          </nav>
        </header>

        {/* Hero Content */}
        <motion.div
          className="flex flex-col items-center justify-center text-center px-4 mt-[100px]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-white text-5xl font-bold mb-4 drop-shadow-md">
            Tu lugar para entrenar, convivir y crecer.
          </h1>
          <p className="text-white text-2xl mb-8">
            Inscríbete hoy y empieza a disfrutar del deporte como nunca.
          </p>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button className="h-[50px] w-[300px] bg-[#00c0e8] hover:bg-[#00a8d0] text-white transition">
              Únete ya
            </Button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Activities Section */}
      <section className="py-20 px-4 overflow-hidden">
        <h2 className="text-center text-3xl font-semibold mb-16 text-neutral-900">
          Actividades destacadas
        </h2>

        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...activities, ...activities].map((activity, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }}>
              <Card className="min-w-[250px] bg-[#2596be] border-none rounded-[10px] overflow-hidden transition-transform duration-300">
                <CardContent className="p-0">
                  <img
                    className="w-full h-[200px] object-cover rounded-t-[5px]"
                    alt={activity.title}
                    src={activity.image}
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-white font-semibold mb-2">
                      {activity.title}
                    </h3>
                    <p className="text-white text-sm">{activity.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FAQ Section */}
      <motion.section
        className="py-20 px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
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
                <AccordionTrigger
                  className="font-medium text-lg text-left py-4 transition-colors hover:bg-[#00c0e8] hover:text-black"
                  style={{ textDecoration: "none" }}
                >
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

      {/* CTA Section */}
      <motion.section
        className="bg-neutral-900 py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.img
            className="w-[188px] h-[227px] object-cover mx-auto mb-8"
            alt="Logoplataazucompleto"
            src="/IMG/logo.png"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />

          <h2 className="text-white text-4xl font-bold mb-4">
            Empieza hoy en el Deportivo Aztlán
          </h2>
          <p className="text-white text-lg mb-8">
            No esperes más para activarte, convivir y alcanzar tus metas.
          </p>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Button className="h-[50px] w-[695px] bg-[#00c0e8] hover:bg-[#00a8d0] text-white transition-colors">
              Regístrate
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="px-[110px] py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start justify-between mb-8">
            <div className="flex-1">
              <p className="text-neutral-900 mb-4">
                Recibe promos especiales, alertas de tarifas bajas y novedades.
              </p>

              <div className="flex items-center gap-2.5 mb-4">
                <span className="text-neutral-900">Correo electrónico</span>
                <span className="text-[#2596be]">*</span>
              </div>

              <div className="flex gap-2.5">
                <Input className="w-[250px] h-[35px] bg-white text-black rounded-[5px] border border-neutral-900" />
                <Button className="w-[250px] h-[35px] bg-[#00c0e8] hover:bg-[#00a8d0] text-white transition-colors">
                  Suscribirme
                </Button>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <h3 className="text-neutral-900 font-semibold mb-4">Empresa</h3>
              {footerLinks.slice(1).map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-neutral-900 hover:text-[#2596be] transition-colors mb-2"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <img className="w-full h-px mb-8" alt="Line" src="/IMG/line-19.svg" />

          <div className="flex items-center justify-between">
            <div className="flex gap-8">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-neutral-900 opacity-70 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex gap-4">
              {socialIcons.map((icon, index) => (
                <motion.img
                  key={index}
                  className="w-4 h-4 opacity-70 hover:opacity-100 cursor-pointer"
                  alt={icon.alt}
                  src={icon.src}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
