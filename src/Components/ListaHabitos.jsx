import "./ListaHabitos.css";

const ListaHabitos = ({ 
  habitos, 
  marcarComoCumplido, 
  eliminarHabito,
  toggleHabito
}) => {
  if (habitos.length === 0) {
    return <h2>No tienes hábitos todavía 😅</h2>;
  }

  const hoy = new Date().toDateString();

  return (
    <div className="lista-container">
      <h1>Mis Hábitos</h1>

      <div className="cards-container">
        {habitos.map((habito) => {
          const cumplidoHoy = habito.ultimaFecha === hoy;

          return (
            <div
              key={habito.id}
              className={`card 
                ${cumplidoHoy ? "card-cumplido" : ""} 
                ${!habito.activo ? "card-disabled" : ""}`
              }
            >
              <h3>{habito.nombre}</h3>

              <p>Frecuencia: {habito.frecuencia}</p>
              <p>Racha actual: {habito.rachaActual} días</p>
              <p>Récord: {habito.rachaMasAlta} días</p>

              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <button onClick={() => marcarComoCumplido(habito.id)}>
                  Cumplido
                </button>

                <button onClick={() => toggleHabito(habito.id)}>
                  {habito.activo ? "Deshabilitar" : "Activar"}
                </button>

                <button
                  onClick={() => eliminarHabito(habito.id)}
                  style={{ backgroundColor: "red", color: "white" }}
                >
                  Eliminar
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListaHabitos;