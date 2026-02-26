import { useState } from "react";

const RegistroUsuario = ({ cambiarSeccion, setUsuario }) => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [error, setError] = useState("");

  const manejarRegistro = (e) => {
    e.preventDefault();

    if (!nombre.trim() || !correo.trim()) {
      setError("Todos los campos son obligatorios");
      return;
    }

    const nuevoUsuario = {
      nombre,
      correo,
      fechaRegistro: new Date().toISOString()
    };

    // 1. Guardar en localStorage
    localStorage.setItem("usuario", JSON.stringify(nuevoUsuario));

    // 2. ACTUALIZAR estado global (esto es lo que te falta)
    setUsuario(nuevoUsuario);

    // 3. Volver al dashboard
    cambiarSeccion("Habito y Rutinas");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Crear Cuenta</h1>
        <p style={styles.subtitle}>Comienza a construir mejores hábitos hoy </p>

        <form onSubmit={manejarRegistro} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Nombre</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ingrese su nombre"
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Correo</label>
            <input
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="Ingrese su correo"
              style={styles.input}
            />
          </div>

          {error && <p style={styles.error}>{error}</p>}

          <div style={styles.buttonContainer}>
            <button type="submit" style={styles.primaryButton}>
              Guardar Usuario
            </button>

            <button
              type="button"
              style={styles.secondaryButton}
              onClick={() => cambiarSeccion("Habito y Rutinas")}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "70vh"
  },

  card: {
    background: "white",
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    width: "100%",
    maxWidth: "420px"
  },

  title: {
    marginBottom: "5px"
  },

  subtitle: {
    color: "#666",
    marginBottom: "30px",
    fontSize: "14px"
  },

  form: {
    display: "flex",
    flexDirection: "column"
  },

  inputGroup: {
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column"
  },

  label: {
    marginBottom: "6px",
    fontWeight: "500"
  },

  input: {
    padding: "10px 14px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "14px",
    outline: "none",
    transition: "0.2s",
  },

  error: {
    color: "#e74c3c",
    fontSize: "14px",
    marginBottom: "15px"
  },

  buttonContainer: {
    display: "flex",
    gap: "10px",
    marginTop: "10px"
  },

  primaryButton: {
    flex: 1,
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold"
  },

  secondaryButton: {
    flex: 1,
    padding: "10px",
    backgroundColor: "#2c3e50",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  }
};

export default RegistroUsuario;