import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-[50px] py-6 w-full bg-[#2596BE]">
      <motion.img
        className="w-20 h-[97px] object-cover"
        alt="Logo Deportivo Aztlán"
        src="/IMG/logo.png"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />

      <nav className="flex items-center gap-[50px]">
        <Link to="/" className="text-white hover:text-neutral-100 transition-colors">
          Inicio
        </Link>
        <Link to="/about" className="text-white hover:text-neutral-100 transition-colors">
          Nosotros
        </Link>
        <Link to="/contact" className="text-white hover:text-neutral-100 transition-colors">
          Contacto
        </Link>

        <Button className="bg-white text-[#2596BE] hover:bg-[#00c0e8] hover:text-black transition">
          Inicia sesión
        </Button>
        <Button className="bg-[#00c0e8] hover:bg-[#00a8d0] text-white transition">
          Regístrate
        </Button>
      </nav>
    </header>
  );
};

export default Header;
