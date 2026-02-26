const HabitosDashboard = ({ usuario, habitos, cambiarSeccion, setAreaFiltro }) => {

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

const hora = new Date().getHours();

let saludo = "";

if (hora < 12) {
  saludo = "Buenos días";
} else if (hora < 18) {
  saludo = "Buenas tardes";
} else {
  saludo = "Buenas noches";
}

  return (
  <div style={styles.container}>
      <div style={styles.welcomeBox}>
      <h1 style={styles.welcomeTitle}>
      {saludo}, {usuario.nombre} 
       </h1>
      <p style={styles.welcomeSubtitle}>
       Sigue construyendo disciplina todos los días!!
       </p>
  </div>

    <div style={styles.cardsContainer}>
      <div style={styles.card}>
        <h2>{habitosActivos}</h2>
        <p>Hábitos Activos</p>
      </div>

      <div style={styles.card}>
        <h2>{rachaMasLarga}</h2>
        <p>Racha Más Larga (días)</p>
      </div>

      <div style={styles.card}>
        <h2>
          {ultimoHabito ? ultimoHabito.nombre : "—"}
        </h2>
        <p>Último Hábito Cumplido</p>
      </div>
    </div>

    <p style={styles.motivation}>
      {habitosActivos === 0
      ? "Empieza hoy. Cada pequeño paso cuenta 💪"
      : `Tienes ${habitosActivos} hábitos activos. ¡Sigue así! 🔥`}
    </p>

    <div style={styles.buttonsContainer}>
      <button
        style={styles.primaryButton}
        onClick={() => cambiarSeccion("NuevoHabito")}
      >
        + Nuevo Hábito
      </button>

      <button
        style={styles.secondaryButton}
        onClick={() => {
          setAreaFiltro("Todas");
          cambiarSeccion("Lista de Habitos");
        }}
      >
        Ver Mis Hábitos
      </button>
    </div>
  </div>
);
};
const styles = {
  container: {
    padding: "40px",
    boxSizing: "border-box",
  },

  title: {
    marginBottom: "30px"
  },

  cardsContainer: {
    display: "flex",
    gap: "20px",
    marginBottom: "40px",
    flexWrap: "wrap"
  },

  card: {
    background: "white",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
    minWidth: "200px",
    textAlign: "center"
  },

  buttonsContainer: {
    display: "flex",
    gap: "15px"
  },

  primaryButton: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  },

  secondaryButton: {
  padding: "10px 20px",
  backgroundColor: "#2c3e50",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer"
}, // ✅ coma aquí

welcomeBox: {
  marginBottom: "30px"
},

welcomeTitle: {
  fontSize: "28px",
  marginBottom: "5px"
},

welcomeSubtitle: {
  color: "#555",
  fontSize: "16px"
},

motivation: {
  marginBottom: "30px",
  fontWeight: "bold",
  color: "#2c3e50"
},
};
export default HabitosDashboard;