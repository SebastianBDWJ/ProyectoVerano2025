import React from "react";  

function Header({ cambiarSeccion }) {
  return (
    <header style={styles.header}>
      <h2 style={styles.logo}>Proyecto</h2>

      <nav style={styles.nav}>
        <button
          style={styles.button}
          onClick={() => cambiarSeccion("Habito y Rutinas")}
        >
          Home
        </button>

        <button
          style={styles.button}
          onClick={() => cambiarSeccion("NuevoHabito")}
        >
          Registrar
        </button>

        <button
          style={styles.button}
          onClick={() => cambiarSeccion("Lista de Habitos")}
        >
          Lista
        </button>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "15px 20px",
  },
  logo: {
    margin: 0,
  },
  nav: {
    display: "flex",
    gap: "10px",
  },
  button: {
    backgroundColor: "white",
    color: "#4CAF50",
    border: "none",
    padding: "8px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Header;
