import { useState } from "react";

const NuevoHabito = ({ agregarHabito, cambiarSeccion }) => {
  const [nombre, setNombre] = useState("");
  const [frecuencia, setFrecuencia] = useState("diario");
  const [area, setArea] = useState("Cuidado Personal");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = () => {
  if (!nombre.trim()) return;

  agregarHabito(nombre, frecuencia, area);

  setMensaje("Hábito guardado con éxito");

  setTimeout(() => {
    cambiarSeccion("Lista de Habitos");
  }, 1500);
};

  return (
    <div>
      <h1>Registrar Nuevo Hábito</h1>

      <input
        type="text"
        placeholder="Nombre del hábito"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <br /><br />

      <select
        value={frecuencia}
        onChange={(e) => setFrecuencia(e.target.value)}
      >
        <option value="diario">Diario</option>
        <option value="semanal">Semanal</option>
      </select>

      <br /><br />

      <select
        value={area}
        onChange={(e) => setArea(e.target.value)}
      >
        <option value="Cuidado Personal">Cuidado Personal</option>
        <option value="Salud">Salud</option>
        <option value="Estudio">Estudio</option>
      </select>

      <br /><br />

      <button onClick={handleSubmit}>
        Guardar Hábito
      </button>

      {mensaje && (
        <p style={{ color: "green", marginTop: "10px" }}>
          {mensaje}
        </p>
      )}
    </div>
  );
};

export default NuevoHabito;