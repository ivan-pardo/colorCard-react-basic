import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ColorCard } from './ColorCard.jsx'

const colores = [
  {
    nombre: "Sunset Vibes",
    colores: ["#ff9a8b", "#ff6a88", "#ff99ac", "#fad0c4"],
    likes: 123,
    fecha: "2025-07-27",
  }
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {
      colores.map((color, index) => (
        <ColorCard key={index} colorCard = {color} />
      ))
    }
  </StrictMode>,
)
