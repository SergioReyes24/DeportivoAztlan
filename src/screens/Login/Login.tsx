import React, { useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { Button } from "../../components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [alert, setAlert] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false); // <--- controla si el menú está abierto
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((u: any) => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      setAlert("✅ Inicio de sesión exitoso. Redirigiendo al inicio...");
      setTimeout(() => navigate("/"), 2000);
    } else {
      setAlert("❌ Credenciales incorrectas.");
    }

    setTimeout(() => setAlert(""), 3000);
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Header con control del menú */}
      <Header onMenuToggle={setMenuOpen} />

      {/* Contenedor del formulario con padding dinámico */}
      <main
        className={`flex-grow flex items-center justify-center bg-gray-50 px-4 sm:px-6 transition-all duration-300`}
        style={{ paddingTop: menuOpen ? 300 : 40, paddingBottom: 40 }}
      >
        <motion.div
          className="bg-white border border-gray-200 rounded-2xl shadow-lg w-full max-w-md p-8 sm:p-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center font-bold text-2xl mb-8 text-[#219EBC]">Inicia Sesión</h2>

          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico*"
              className="border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-[#00c0e8]"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Contraseña*"
              className="border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-[#00c0e8]"
              required
            />
            <a href="#" className="text-sm text-gray-500 text-right hover:underline">
              ¿Olvidaste tu contraseña?
            </a>
            <Button
              type="submit"
              className="bg-[#00c0e8] hover:bg-[#00a8d0] text-white text-base py-3"
            >
              Iniciar sesión
            </Button>
          </form>

          <AnimatePresence>
            {alert && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`mt-4 text-center text-sm font-medium ${
                  alert.includes("✅") ? "text-green-600" : "text-red-600"
                }`}
              >
                {alert}
              </motion.div>
            )}
          </AnimatePresence>

          <p className="text-center text-sm mt-6 text-gray-600">
            ¿Aún no eres parte del Deportivo Aztlán?{" "}
            <Link to="/register" className="text-[#00a8d0] font-semibold hover:underline">
              Regístrate
            </Link>
          </p>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
