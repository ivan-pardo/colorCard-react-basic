import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ColorCard } from "./ColorCard.jsx";

const colores = [
  {
    nombre: "Sunset Vibes",
    colores: ["#ff9a8b", "#ff6a88", "#ff99ac", "#fad0c4"],
    likes: 123,
    fecha: "2025-07-27",
  },
  {
    nombre: "Ocean Breeze",
    colores: ["#00c9ff", "#92fe9d", "#a1f3d1", "#d4fc79"],
    likes: 88,
    fecha: "2025-07-20",
  },
  {
    nombre: "Lavender Dreams",
    colores: ["#e0c3fc", "#8ec5fc", "#d9afd9", "#fbc2eb"],
    likes: 142,
    fecha: "2025-07-15",
  },
  {
    nombre: "Vintage Rose",
    colores: ["#f6eec7", "#f2d7d5", "#e5989b", "#b5838d"],
    likes: 76,
    fecha: "2025-07-10",
  },
  {
    nombre: "Minty Fresh",
    colores: ["#a8edea", "#fed6e3", "#c2f0f7", "#a1ffce"],
    likes: 97,
    fecha: "2025-07-05",
  },
  {
    nombre: "Warm Autumn",
    colores: ["#ffb347", "#ffcc33", "#f67280", "#c06c84"],
    likes: 101,
    fecha: "2025-06-30",
  },
  {
    nombre: "Deep Space",
    colores: ["#2c3e50", "#34495e", "#1abc9c", "#16a085"],
    likes: 154,
    fecha: "2025-06-25",
  },
  {
    nombre: "Citrus Pop",
    colores: ["#f6d365", "#fda085", "#f9f586", "#d4fc79"],
    likes: 65,
    fecha: "2025-06-20",
  },
  {
    nombre: "Peach Sorbet",
    colores: ["#ff9a9e", "#fad0c4", "#fbc2eb", "#a1c4fd"],
    likes: 110,
    fecha: "2025-06-15",
  },
  {
    nombre: "Blue Lagoon",
    colores: ["#2193b0", "#6dd5ed", "#00c6ff", "#0072ff"],
    likes: 134,
    fecha: "2025-06-10",
  },
  {
    nombre: "Forest Calm",
    colores: ["#355c7d", "#6c5b7b", "#c06c84", "#f67280"],
    likes: 92,
    fecha: "2025-06-05",
  },
  {
    nombre: "Bubblegum Pop",
    colores: ["#fcb69f", "#ffdde1", "#ff9a9e", "#fad0c4"],
    likes: 87,
    fecha: "2025-06-01",
  },
  {
    nombre: "Evening Sky",
    colores: ["#e0c3fc", "#8ec5fc", "#a1c4fd", "#c2e9fb"],
    likes: 112,
    fecha: "2025-05-25",
  },
  {
    nombre: "Tropical Punch",
    colores: ["#fcb045", "#fd1d1d", "#833ab4", "#f5af19"],
    likes: 74,
    fecha: "2025-05-20",
  },
  {
    nombre: "Icy Pastel",
    colores: ["#a1c4fd", "#c2e9fb", "#e0c3fc", "#fbc2eb"],
    likes: 99,
    fecha: "2025-05-15",
  },
];

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="colorCards">
      {colores.map((color, index) => (
        <ColorCard key={index} colorCard={color} />
      ))}
    </div>
  </StrictMode>
);
