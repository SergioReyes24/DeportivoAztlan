import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

interface HeaderProps {
  onMenuToggle?: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) {
      try {
        const parsed = JSON.parse(user);
        if (parsed && parsed.email && parsed.name) setCurrentUser({ name: parsed.name, email: parsed.email });
      } catch {
        setCurrentUser(null);
      }
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (onMenuToggle) onMenuToggle(!menuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    window.location.href = "/";
  };

  return (
    <header className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-6 bg-[#2596BE] relative">
      <motion.img
        src="/IMG/logo.png"
        alt="Logo Deportivo Aztlán"
        className="w-16 h-[80px] sm:w-20 sm:h-[97px] object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />

      <button className="sm:hidden text-white" onClick={toggleMenu}>
        <Menu size={28} />
      </button>

      <nav
        className={`${
          menuOpen ? "flex flex-col absolute top-full left-0 w-full bg-[#2596BE] shadow-lg z-10" : "hidden"
        } sm:flex sm:static sm:flex-row sm:gap-6`}
      >
        <Link to="/" className="text-white py-3 px-4 sm:p-0 hover:text-neutral-100 transition">Inicio</Link>
        <Link to="/about" className="text-white py-3 px-4 sm:p-0 hover:text-neutral-100 transition">Nosotros</Link>
        <Link to="/contact" className="text-white py-3 px-4 sm:p-0 hover:text-neutral-100 transition">Contacto</Link>

        {currentUser ? (
          <div className="flex flex-col sm:flex-row gap-3 py-3 sm:py-0 sm:ml-6 border-t sm:border-none border-white/20 sm:border-0">
            <p className="text-white font-medium text-center sm:text-left">
              👋 Bienvenido, <span className="font-semibold">{currentUser.name}</span>
            </p>
            <Button onClick={handleLogout} className="bg-white text-[#2596BE] hover:bg-[#00c0e8] hover:text-black w-full sm:w-auto">
              Cerrar sesión
            </Button>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row gap-3 py-4 sm:py-0 sm:ml-4">
            <Link to="/login">
              <Button className="bg-white text-[#2596BE] hover:bg-[#00c0e8] hover:text-black w-full sm:w-auto">
                Inicia sesión
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-[#00c0e8] hover:bg-[#00a8d0] text-white w-full sm:w-auto">
                Regístrate
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
