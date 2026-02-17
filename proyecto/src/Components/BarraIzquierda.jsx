import React from "react";
import "./BarraIzquierda.css";

const Sidebar = ({ cambiarSeccion, setAreaFiltro }) => {
  return (
    <div className="sidebar">
      <div className="profile">
        <img
          src=""
          alt="profile"
          className="profile-img"
        />
        <span onClick={() => cambiarSeccion("Perfil")} style={{ cursor: "pointer" }}>
          Perfil
        </span>
      </div>

      <div className="menu">
        <h4>AREAS</h4>
        <ul>
          <li onClick={() => {
            setAreaFiltro("Cuidado Personal");
            cambiarSeccion("Lista de Habitos");
          }}>
            Cuidado Personal
          </li>

          <li onClick={() => {
            setAreaFiltro("Salud");
            cambiarSeccion("Lista de Habitos");
          }}>
            Salud
          </li>

          <li onClick={() => {
            setAreaFiltro("Estudio");
            cambiarSeccion("Lista de Habitos");
          }}>
            Estudio
          </li>
        </ul>

        <h4>MORE</h4>
        <ul>
          <li onClick={() => cambiarSeccion("Habito y Rutinas")}>Habito y Rutinas</li>
          <li onClick={() => {
            setAreaFiltro("Todas");
            cambiarSeccion("Lista de Habitos");
          }}>
            Lista de Habitos
          </li>
          <li onClick={() => cambiarSeccion("Manage Areas")}>Manage Areas</li>
          <li onClick={() => cambiarSeccion("Resourse")}>Resourse</li>
        </ul>
      </div>

      <button
        className="add-btn"
        onClick={() => cambiarSeccion("NuevoHabito")}
      >
        + Add New
      </button>
    </div>
  );
};

export default Sidebar;