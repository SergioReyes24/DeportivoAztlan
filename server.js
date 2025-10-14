import express from "express";
import compression from "compression";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware básicos
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Permitir solicitudes del frontend
app.use(
  cors({
    origin: ["http://localhost:5173", "https://tusuario.github.io"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Compresión Gzip para respuestas
app.use(compression());

// Cacheo de recursos estáticos
const oneDay = 86400000;
app.use(
  express.static(path.join(__dirname, "public"), {
    maxAge: oneDay,
    setHeaders: (res, filePath) => {
      if (filePath.endsWith(".html")) res.setHeader("Cache-Control", "no-cache");
      else if (filePath.endsWith(".json")) res.setHeader("Cache-Control", "public, max-age=3600");
      else res.setHeader("Cache-Control", "public, max-age=31536000");
    },
  })
);

// Ruta base
app.get("/api", (req, res) => {
  res.json({
    message: "Bienvenido a la API del Deportivo Aztlán",
    version: "1.0.0",
  });
});

// Ejemplo de endpoint GET
app.get("/api/actividades", (req, res) => {
  res.json([
    { id: 1, nombre: "Básquetbol", horario: "Lunes a Viernes 8am-6pm" },
    { id: 2, nombre: "Natación", horario: "Martes y Jueves 10am-4pm" },
    { id: 3, nombre: "Ballet", horario: "Sábados 9am-2pm" },
  ]);
});

// Ejemplo de endpoint POST
app.post("/api/inscripciones", (req, res) => {
  const { nombre, correo, disciplina } = req.body;
  if (!nombre || !correo || !disciplina)
    return res.status(400).json({ error: "Faltan datos" });
  res.status(201).json({ message: "Registro exitoso", data: req.body });
});

// Manejo de rutas no encontradas
app.use((req, res) => res.status(404).json({ error: "Ruta no encontrada" }));

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`);
});
