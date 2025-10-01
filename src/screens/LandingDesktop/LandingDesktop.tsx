 import React, { useState } from "react";
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
    image: "https://c.animaapp.com/mg6v8zwbkxJVkD/img/0cancha-basketball.png",
  },
  {
    id: 2,
    title: "🩰 Ballet",
    description:
      "Expresa tu cuerpo con gracia y disciplina. Contamos con clases para todas las edades y niveles.",
    image: "https://c.animaapp.com/mg6v8zwbkxJVkD/img/estudioballet.png",
  },
  {
    id: 3,
    title: "🏊 Natación",
    description:
      "Fortalece tu cuerpo y mente con entrenamientos acuáticos en una alberca equipada para tu comodidad.",
    image: "https://c.animaapp.com/mg6v8zwbkxJVkD/img/0cancha-alberca.png",
  },
  {
    id: 4,
    title: "⚽ Fútbol",
    description:
      "Vive la pasión del deporte más popular con entrenamientos, ligas y torneos para todas las categorías.",
    image: "https://c.animaapp.com/mg6v8zwbkxJVkD/img/0cancha-soccer.png",
  },
];

const benefits = [
  {
    icon: "https://c.animaapp.com/mg6v8zwbkxJVkD/img/vector-11.svg",
    title: "Bienestar integral",
    description:
      "No solo es ejercicio, también es salud física, mental y emocional.",
  },
  {
    icon: "https://c.animaapp.com/mg6v8zwbkxJVkD/img/vector-12.svg",
    title: "Comunidad activa",
    description:
      "Comparte tu pasión por el deporte en un ambiente familiar y seguro.",
  },
  {
    icon: "https://c.animaapp.com/mg6v8zwbkxJVkD/img/vector-9.svg",
    title: "Flexibilidad de horarios",
    description: "Entrena en el momento que mejor se adapte a tu rutina.",
  },
  {
    icon: "https://c.animaapp.com/mg6v8zwbkxJVkD/img/vector-14.svg",
    title: "Metas alcanzables",
    description:
      "Contamos con entrenadores y programas para ayudarte a mejorar cada día.",
  },
];

const faqItems = [
  {
    question: "¿Necesito ser socio para poder entrenar?",
    answer: "",
  },
  {
    question: "¿Qué tipos de membresía ofrecen?",
    answer: "",
  },
  {
    question: "¿Tienen clases para niños?",
    answer: "",
  },
  {
    question: "¿Es necesario llevar mi propio equipo?",
    answer: "",
  },
  {
    question: "¿Se pueden rentar las canchas?",
    answer: "",
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
  {
    src: "https://c.animaapp.com/mg6v8zwbkxJVkD/img/vector-17.svg",
    alt: "Social media",
  },
  {
    src: "https://c.animaapp.com/mg6v8zwbkxJVkD/img/vector.svg",
    alt: "Social media",
  },
  {
    src: "https://c.animaapp.com/mg6v8zwbkxJVkD/img/vector-5.svg",
    alt: "Social media",
  },
  {
    src: "https://c.animaapp.com/mg6v8zwbkxJVkD/img/vector-7.svg",
    alt: "Social media",
  },
];

export const LandingDesktop = (): JSX.Element => {
  const [openFaq, setOpenFaq] = useState<string>("item-5");

  return (
    <div
      className="bg-[url(https://c.animaapp.com/mg6v8zwbkxJVkD/img/fondo.svg)] bg-[100%_100%] overflow-hidden w-full h-full relative scale-[0.9]"
  style={{ transformOrigin: "top left" }}
  data-model-id="78:45"
    >
      {/* Sección Principal */}
<section className="relative h-[800px] bg-[#2596BE] bg-cover bg-center">
  {/* Navigation Header */}
        <header className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] flex items-center justify-between px-[50px] py-6 w-full">
          <img
            className="w-20 h-[97px] object-cover"
            alt="Logoplataazucompleto"
            src="https://c.animaapp.com/mg6v8zwbkxJVkD/img/logoplataazucompleto-1-1.png"
          />

          <nav className="flex items-center gap-[50px]">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="font-16px-semibold font-[number:var(--16px-semibold-font-weight)] text-white text-[length:var(--16px-semibold-font-size)] text-center tracking-[var(--16px-semibold-letter-spacing)] leading-[var(--16px-semibold-line-height)] [font-style:var(--16px-semibold-font-style)] hover:text-neutral-100 transition-colors"
              >
                {item.label}
              </a>
            ))}

            <Button
              variant="outline"
              className="h-10 w-[150px] border-white text-white bg-transparent hover:bg-white hover:text-neutral-900 transition-colors"
            >
              Inicia sesión
            </Button>

            <Button className="h-10 w-[150px] bg-[#00c0e8] hover:bg-[#00a8d0] text-white transition-colors">
              Regístrate
            </Button>
          </nav>
        </header>

        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center text-center px-4 mt-[100px]">
          <h1 className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] [text-shadow:0px_4px_4px_#00000040] font-48px-bold font-[number:var(--48px-bold-font-weight)] text-white text-[length:var(--48px-bold-font-size)] tracking-[var(--48px-bold-letter-spacing)] leading-[var(--48px-bold-line-height)] [font-style:var(--48px-bold-font-style)] mb-4">
            Tu lugar para entrenar, convivir y crecer.
          </h1>

          <p className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] [text-shadow:0px_4px_4px_#00000040] font-28px-semibold font-[number:var(--28px-semibold-font-weight)] text-white text-[length:var(--28px-semibold-font-size)] tracking-[var(--28px-semibold-letter-spacing)] leading-[var(--28px-semibold-line-height)] [font-style:var(--28px-semibold-font-style)] mb-8">
            Inscríbete hoy y empieza a disfrutar del deporte como nunca.
          </p>

          <Button className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] h-[50px] w-[603px] bg-[#00c0e8] hover:bg-[#00a8d0] text-white font-20px-semibold font-[number:var(--20px-semibold-font-weight)] text-[length:var(--20px-semibold-font-size)] tracking-[var(--20px-semibold-letter-spacing)] leading-[var(--20px-semibold-line-height)] [font-style:var(--20px-semibold-font-style)] transition-colors">
            Únete ya
          </Button>
        </div>
      </section>

      {/* Featured Activities Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms] [font-family:'Work_Sans',Helvetica] font-semibold text-neutral-900 text-[32px] text-center tracking-[-0.25px] leading-[64px] mb-16">
            Actividades destacadas
          </h2>

          <div className="grid grid-cols-4 gap-8 max-w-6xl mx-auto">
            {activities.map((activity, index) => (
              <Card
                key={activity.id}
                className={`translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:${1000 + index * 200}ms] bg-[#2596be] border-none rounded-[10px] overflow-hidden hover:scale-105 transition-transform duration-300`}
              >
                <CardContent className="p-0">
                  <img
                    className="w-full h-[200px] object-cover rounded-t-[5px]"
                    alt={activity.title}
                    src={activity.image}
                  />
                  <div className="p-6 text-center">
                    <h3 className="font-14px-semibold font-[number:var(--14px-semibold-font-weight)] text-white text-[length:var(--14px-semibold-font-size)] tracking-[var(--14px-semibold-letter-spacing)] leading-[var(--14px-semibold-line-height)] [font-style:var(--14px-semibold-font-style)] mb-4">
                      {activity.title}
                    </h3>
                    <p className="font-14px-medium font-[number:var(--14px-medium-font-weight)] text-white text-[length:var(--14px-medium-font-size)] tracking-[var(--14px-medium-letter-spacing)] leading-[var(--14px-medium-line-height)] [font-style:var(--14px-medium-font-style)]">
                      {activity.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1800ms] [font-family:'Work_Sans',Helvetica] font-semibold text-[28px] tracking-[0] leading-[normal] mb-16">
            <span className="text-neutral-900">¿Por qué elegir el </span>
            <span className="text-[#2596be]">Deportivo Aztlán</span>
            <span className="text-neutral-900">?</span>
          </h2>

          <div className="grid grid-cols-2 gap-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:${2000 + index * 200}ms] text-center`}
              >
                <div className="flex items-center justify-center mb-4">
                  <img
                    className="w-6 h-6 mr-4"
                    alt="Benefit icon"
                    src={benefit.icon}
                  />
                  <h3 className="font-20px-semibold font-[number:var(--20px-semibold-font-weight)] text-neutral-900 text-[length:var(--20px-semibold-font-size)] tracking-[var(--20px-semibold-letter-spacing)] leading-[var(--20px-semibold-line-height)] [font-style:var(--20px-semibold-font-style)]">
                    {benefit.title}
                  </h3>
                </div>
                <p className="font-16px-medium font-[number:var(--16px-medium-font-weight)] text-neutral-900 text-[length:var(--16px-medium-font-size)] tracking-[var(--16px-medium-letter-spacing)] leading-[var(--16px-medium-line-height)] [font-style:var(--16px-medium-font-style)]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2800ms] [font-family:'Work_Sans',Helvetica] font-semibold text-neutral-900 text-[28px] tracking-[0] leading-[normal] text-center mb-16">
            Preguntas Frecuentes (FAQ)
          </h2>

          <Accordion
            type="single"
            collapsible
            value={openFaq}
            onValueChange={setOpenFaq}
            className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:3000ms] space-y-4"
          >
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-black rounded-[10px] px-4"
              >
                <AccordionTrigger className="[font-family:'Work_Sans',Helvetica] font-medium text-black text-lg text-left tracking-[0] leading-[normal] hover:no-underline py-6">
                  <span
                    className={index === 5 ? "text-[#2596be]" : "text-black"}
                  >
                    {item.question}
                  </span>
                </AccordionTrigger>
                {item.answer && (
                  <AccordionContent className="[font-family:'Work_Sans',Helvetica] font-medium text-black text-base tracking-[0] leading-[normal] pb-6">
                    {item.answer}
                  </AccordionContent>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-neutral-900 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <img
            className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:3200ms] w-[188px] h-[227px] object-cover mx-auto mb-8"
            alt="Logoplataazucompleto"
            src="https://c.animaapp.com/mg6v8zwbkxJVkD/img/logoplataazucompleto-1-1.png"
          />

          <h2 className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:3400ms] [text-shadow:0px_4px_4px_#0a0a0a1a] font-40px-bold font-[number:var(--40px-bold-font-weight)] text-white text-[length:var(--40px-bold-font-size)] tracking-[var(--40px-bold-letter-spacing)] leading-[var(--40px-bold-line-height)] [font-style:var(--40px-bold-font-style)] mb-4">
            Empieza hoy en el Deportivo Aztlán
          </h2>

          <p className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:3600ms] [text-shadow:0px_4px_4px_#0a0a0a1a] font-20px-semibold font-[number:var(--20px-semibold-font-weight)] text-white text-[length:var(--20px-semibold-font-size)] tracking-[var(--20px-semibold-letter-spacing)] leading-[var(--20px-semibold-line-height)] [font-style:var(--20px-semibold-font-style)] mb-8">
            No esperes más para activarte, convivir y alcanzar tus metas.
          </p>

          <Button className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:3800ms] h-[50px] w-[695px] bg-[#00c0e8] hover:bg-[#00a8d0] text-white font-20px-semibold font-[number:var(--20px-semibold-font-weight)] text-[length:var(--20px-semibold-font-size)] tracking-[var(--20px-semibold-letter-spacing)] leading-[var(--20px-semibold-line-height)] [font-style:var(--20px-semibold-font-style)] transition-colors">
            Regístrate
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-[110px] py-8">
        <div className="max-w-7xl mx-auto">
          {/* Newsletter Section */}
          <div className="flex items-start justify-between mb-8">
            <div className="flex-1">
              <p className="font-14px-regular font-[number:var(--14px-regular-font-weight)] text-neutral-900 text-[length:var(--14px-regular-font-size)] tracking-[var(--14px-regular-letter-spacing)] leading-[var(--14px-regular-line-height)] [font-style:var(--14px-regular-font-style)] mb-4">
                Recibe promos especiales, alertas de tarifas bajas y novedades.
              </p>

              <div className="flex items-center gap-2.5 mb-4">
                <span className="text-neutral-900 font-14px-regular [font-style:var(--14px-regular-font-style)] font-[number:var(--14px-regular-font-weight)] tracking-[var(--14px-regular-letter-spacing)] leading-[var(--14px-regular-line-height)] text-[length:var(--14px-regular-font-size)]">
                  Correo electrónico
                </span>
                <span className="text-[#2596be] font-14px-regular [font-style:var(--14px-regular-font-style)] font-[number:var(--14px-regular-font-weight)] tracking-[var(--14px-regular-letter-spacing)] leading-[var(--14px-regular-line-height)] text-[length:var(--14px-regular-font-size)]">
                  *
                </span>
              </div>

              <div className="flex gap-2.5">
                <Input
                  className="w-[250px] h-[35px] bg-white rounded-[5px] border-[0.5px] border-solid border-neutral-900"
                  placeholder=""
                />
                <Button className="w-[250px] h-[35px] bg-[#00c0e8] hover:bg-[#00a8d0] text-white font-14px-medium font-[number:var(--14px-medium-font-weight)] text-[length:var(--14px-medium-font-size)] tracking-[var(--14px-medium-letter-spacing)] leading-[var(--14px-medium-line-height)] [font-style:var(--14px-medium-font-style)] transition-colors">
                  Suscribirme
                </Button>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <h3 className="font-14px-semibold font-[number:var(--14px-semibold-font-weight)] text-neutral-900 text-[length:var(--14px-semibold-font-size)] tracking-[var(--14px-semibold-letter-spacing)] leading-[var(--14px-semibold-line-height)] [font-style:var(--14px-semibold-font-style)] mb-4">
                Empresa
              </h3>
              {footerLinks.slice(1).map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="font-14px-regular font-[number:var(--14px-regular-font-weight)] text-neutral-900 text-[length:var(--14px-regular-font-size)] tracking-[var(--14px-regular-letter-spacing)] leading-[var(--14px-regular-line-height)] [font-style:var(--14px-regular-font-style)] mb-2 hover:text-[#2596be] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <img
            className="w-full h-px mb-8"
            alt="Line"
            src="https://c.animaapp.com/mg6v8zwbkxJVkD/img/line-19.svg"
          />

          {/* Bottom Footer */}
          <div className="flex items-center justify-between">
            <div className="flex gap-8">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="opacity-70 font-14px-regular font-[number:var(--14px-regular-font-weight)] text-neutral-900 text-[length:var(--14px-regular-font-size)] tracking-[var(--14px-regular-letter-spacing)] leading-[var(--14px-regular-line-height)] [font-style:var(--14px-regular-font-style)] hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex gap-4">
              {socialIcons.map((icon, index) => (
                <img
                  key={index}
                  className="w-4 h-4 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                  alt={icon.alt}
                  src={icon.src}
                />
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
