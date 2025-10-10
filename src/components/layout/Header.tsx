import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";
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
        if (parsed?.name && parsed?.email) setCurrentUser(parsed);
      } catch {
        setCurrentUser(null);
      }
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    onMenuToggle?.(!menuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    window.location.href = "/"; // redirige al inicio sin 404
  };

  return (
    <header className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-6 bg-[#2596BE] relative">
      {/* Logo */}
      <Link to="/">
        <motion.img
          src="IMG/logo.webp"
          alt="Logo Deportivo Aztlán"
          className="w-16 h-[80px] sm:w-20 sm:h-[97px] object-cover cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </Link>

      {/* Botón menú móvil */}
      <button className="sm:hidden text-white" onClick={toggleMenu}>
        <Menu size={28} />
      </button>

      {/* Menú de navegación */}
      <nav className="hidden sm:flex sm:gap-6">
        <Link to="/" className="text-white hover:text-neutral-100 transition">
          Inicio
        </Link>
        <Link to="/about" className="text-white hover:text-neutral-100 transition">
          Nosotros
        </Link>
        <Link to="/contact" className="text-white hover:text-neutral-100 transition">
          Contacto
        </Link>

        {currentUser ? (
          <div className="flex items-center gap-3 ml-4">
            <p className="text-white font-medium">
              👋 Bienvenido, <span className="font-semibold">{currentUser.name}</span>
            </p>
            <Button
              onClick={handleLogout}
              className="bg-white text-[#2596BE] hover:bg-[#00c0e8] hover:text-black"
            >
              Cerrar sesión
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-3 ml-4">
            <Link to="/login">
              <Button className="bg-white text-[#2596BE] hover:bg-[#00c0e8] hover:text-black">
                Inicia sesión
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-[#00c0e8] hover:bg-[#00a8d0] text-white">
                Regístrate
              </Button>
            </Link>
          </div>
        )}
      </nav>

      {/* Menú móvil animado */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-[#2596BE] shadow-lg z-10 flex flex-col text-center py-4 sm:hidden"
          >
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-white py-3 hover:bg-[#00a8d0] transition"
            >
              Inicio
            </Link>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="text-white py-3 hover:bg-[#00a8d0] transition"
            >
              Nosotros
            </Link>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-white py-3 hover:bg-[#00a8d0] transition"
            >
              Contacto
            </Link>

            {currentUser ? (
              <>
                <p className="text-white mt-3">
                  👋 Bienvenido, <span className="font-semibold">{currentUser.name}</span>
                </p>
                <Button
                  onClick={handleLogout}
                  className="bg-white text-[#2596BE] hover:bg-[#00c0e8] hover:text-black mt-3 mx-auto w-3/4"
                >
                  Cerrar sesión
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setMenuOpen(false)}>
                  <Button className="bg-white text-[#2596BE] hover:bg-[#00c0e8] hover:text-black mt-3 mx-auto w-3/4">
                    Inicia sesión
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setMenuOpen(false)}>
                  <Button className="bg-[#00c0e8] hover:bg-[#00a8d0] text-white mt-3 mx-auto w-3/4">
                    Regístrate
                  </Button>
                </Link>
              </>
            )}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
