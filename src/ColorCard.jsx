const ColorCard = (props) => {
  const {nombre, colores = [], likes, fecha, } = props
  return (
    <div className="colorCard">
      <h3>{nombre}</h3>
      <div>
        {colores}
      </div>
      <p>{likes}</p>
      <p>{fecha}</p>
    </div>
  )
}

export { ColorCard }