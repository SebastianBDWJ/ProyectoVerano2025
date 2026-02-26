const HabitosDashboard = ({ usuario, habitos, cambiarSeccion }) => {

  const habitosActivos = habitos.filter(h => h.activo).length;

  const rachaMasLarga = habitos.length > 0
    ? Math.max(...habitos.map(h => h.rachaActual))
    : 0;

  const ultimoHabito = habitos.length > 0
    ? habitos.reduce((prev, current) =>
        new Date(prev.ultimaFecha) > new Date(current.ultimaFecha)
          ? prev
          : current
      )
    : null;

  return (
    <div>
      <h1>Bienvenido, {usuario.nombre}</h1>

      <h3>Hábitos activos: {habitosActivos}</h3>

      <h3>Racha más larga: {rachaMasLarga} días</h3>

      <h3>
        Último hábito cumplido:{" "}
        {ultimoHabito ? ultimoHabito.nombre : "Ninguno todavía"}
      </h3>

      <div style={{ marginTop: "20px" }}>
        <button style={{ marginRight: "10px" }}>
          Registrar Hábito
        </button>

        <button onClick={() => cambiarSeccion("MisHabitos")}>
          Mis Hábitos
        </button>
      </div>
    </div>
  );
};

export default HabitosDashboard;