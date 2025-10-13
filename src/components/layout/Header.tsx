import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";

interface HeaderProps {
  onMenuToggle?: (isOpen: boolean, resetPadding?: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<{ name: string; email: string } | null>(null);
  const navigate = useNavigate();

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

  const handleNavClick = (path: string) => {
    setMenuOpen(false);
    if (onMenuToggle) {
      if (path === "/" || path === "/login" || path === "/register") {
        onMenuToggle(false, true);
      } else {
        onMenuToggle(false);
      }
    }
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    handleNavClick("/");
  };

  return (
    <header className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-6 bg-[#0077a3] relative">
      {/* Logo */}
      <Link to="/" onClick={() => handleNavClick("/")}>
        <motion.img
          src="IMG/logo.webp"
          alt="Logo Deportivo Aztlán"
          className="w-16 h-[80px] sm:w-20 sm:h-[97px] object-cover cursor-pointer drop-shadow-[0_0_5px_black]"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </Link>

      {/* Botón menú móvil */}
      <button className="sm:hidden text-white" onClick={toggleMenu}>
        <Menu size={28} />
      </button>

      {/* Menú escritorio */}
      <nav className="hidden sm:flex sm:gap-6">
        <button onClick={() => handleNavClick("/")} className="text-white hover:text-neutral-100 transition">
          Inicio
        </button>
        <button onClick={() => handleNavClick("/about")} className="text-white hover:text-neutral-100 transition">
          Nosotros
        </button>
        <button onClick={() => handleNavClick("/contact")} className="text-white hover:text-neutral-100 transition">
          Contacto
        </button>

        {currentUser ? (
          <div className="flex items-center gap-3 ml-4">
            <p className="text-white font-medium">
              👋 Bienvenido, <span className="font-semibold">{currentUser.name}</span>
            </p>
            <Button
              onClick={handleLogout}
              className="bg-white text-[#0077a3] hover:bg-[#00c0e8] hover:text-black"
            >
              Cerrar sesión
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-3 ml-4">
            <button onClick={() => handleNavClick("/login")}>
              <Button className="bg-white text-[#0077a3] hover:bg-[#00c0e8] hover:text-black">
                Inicia sesión
              </Button>
            </button>
            <button onClick={() => handleNavClick("/register")}>
              <Button className="bg-[#00c0e8] hover:bg-[#00a8d0] text-white">
                Regístrate
              </Button>
            </button>
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
            className="absolute top-full left-0 w-full bg-[#0077a3] shadow-lg z-10 flex flex-col text-center py-4 sm:hidden"
          >
            <button
              onClick={() => handleNavClick("/")}
              className="text-white py-3 hover:bg-[#00a8d0] transition"
            >
              Inicio
            </button>
            <button
              onClick={() => handleNavClick("/about")}
              className="text-white py-3 hover:bg-[#00a8d0] transition"
            >
              Nosotros
            </button>
            <button
              onClick={() => handleNavClick("/contact")}
              className="text-white py-3 hover:bg-[#00a8d0] transition"
            >
              Contacto
            </button>

            {currentUser ? (
              <>
                <p className="text-white mt-3">
                  👋 Bienvenido, <span className="font-semibold">{currentUser.name}</span>
                </p>
                <Button
                  onClick={handleLogout}
                  className="bg-white text-[#0077a3] hover:bg-[#00c0e8] hover:text-black mt-3 mx-auto w-3/4"
                >
                  Cerrar sesión
                </Button>
              </>
            ) : (
              <>
                <button onClick={() => handleNavClick("/login")}>
                  <Button className="bg-white text-[#0077a3] hover:bg-[#00c0e8] hover:text-black mt-3 mx-auto w-3/4">
                    Inicia sesión
                  </Button>
                </button>
                <button onClick={() => handleNavClick("/register")}>
                  <Button className="bg-[#00c0e8] hover:bg-[#00a8d0] text-white mt-3 mx-auto w-3/4">
                    Regístrate
                  </Button>
                </button>
              </>
            )}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
