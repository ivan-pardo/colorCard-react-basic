import "./colorCard.css";

const ColorCard = (props) => {
  const { nombre, colores = [], likes, fecha } = props.colorCard;
  return (
      <div className="colorCard">
        <h3>{nombre}</h3>
        <div className="colorContainers">
          {
            colores.map((color, index) =>{
              const sizeClass = `size${index+1}`
              return (
                <div key={index} style={{backgroundColor: color}} className={sizeClass}></div>
              )
            })
          }
        </div>
        <p>{likes}</p>
        <p>{fecha}</p>
      </div>
  );
};

export { ColorCard };
