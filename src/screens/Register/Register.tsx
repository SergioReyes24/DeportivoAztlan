import React, { useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { Button } from "../../components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [alert, setAlert] = useState<string>(""); // Mensaje de alerta
  const navigate = useNavigate();

  // Función para manejar registro de usuario
  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const exists = users.some((u: any) => u.email === email);

    if (exists) {
      setAlert("⚠️ Este correo ya está registrado.");
    } else {
      users.push({ name, email, password });
      localStorage.setItem("users", JSON.stringify(users));
      setAlert("✅ Registro exitoso. Redirigiendo a login...");
      setTimeout(() => navigate("/login"), 2000); // Redirige al login
    }

    setTimeout(() => setAlert(""), 3000); // Limpia la alerta
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Header */}
      <Header />

      {/* Contenedor del formulario */}
      <main className="flex-grow flex items-center justify-center bg-gray-50 px-4 py-10 sm:px-6 sm:py-16">
        <motion.div
          className="bg-white border border-gray-200 rounded-2xl shadow-lg w-full max-w-md p-8 sm:p-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center font-bold text-2xl mb-8 text-[#219EBC]">Crea tu cuenta</h2>

          {/* Formulario */}
          <form onSubmit={handleRegister} className="flex flex-col gap-5">
            <input
              type="text"
              name="name"
              placeholder="Nombre completo*"
              required
              className="border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-[#00c0e8]"
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico*"
              required
              className="border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-[#00c0e8]"
            />
            <input
              type="password"
              name="password"
              placeholder="Contraseña*"
              required
              className="border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-[#00c0e8]"
            />
            <Button
              type="submit"
              className="bg-[#00c0e8] hover:bg-[#00a8d0] text-white text-base py-3"
            >
              Crear cuenta
            </Button>
          </form>

          {/* Alerta de registro */}
          <AnimatePresence>
            {alert && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`mt-4 text-center text-sm font-medium ${
                  alert.includes("✅") ? "text-green-600" : "text-yellow-600"
                }`}
              >
                {alert}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Link a login */}
          <p className="text-center text-sm mt-6 text-gray-600">
            ¿Ya tienes una cuenta?{" "}
            <Link to="/login" className="text-[#00a8d0] font-semibold hover:underline">
              Inicia sesión
            </Link>
          </p>
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Register;
