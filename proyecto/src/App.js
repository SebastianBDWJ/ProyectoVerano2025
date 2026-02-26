import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ListaHabitos from "./Components/ListaHabitos";
import NuevoHabito from "./Components/NuevoHabito";
import HabitosDashboard from "./Components/HabitosDashboard";
import BarraI from "./Components/BarraIzquierda.jsx";
import Perfil from "./Components/Perfil.jsx";
import { useState, useEffect } from "react";

function App() {
  const [seccionActiva, setSeccionActiva] = useState("Home");
  const [areaFiltro, setAreaFiltro] = useState("Todas");

  const datosUsuario = {
    nombre: "Sebastian",
    correo: "sebastian@email.com",
    habitosActivos: 4,
    rachaMasLarga: 12,
    ultimoHabito: "Leer 20 minutos"
  };

  const usuario = {
    nombre: "Sebastian"
  };

  const [habitos, setHabitos] = useState(() => {
    const datosGuardados = localStorage.getItem("habitos");
    return datosGuardados ? JSON.parse(datosGuardados) : [];
  });

  useEffect(() => {
    localStorage.setItem("habitos", JSON.stringify(habitos));
  }, [habitos]);

  const agregarHabito = (nombre, frecuencia, area) => {
    const nuevoHabito = {
      id: Date.now(),
      nombre,
      frecuencia,
      area,
      activo: true,
      rachaActual: 0,
      rachaMasAlta: 0,
      ultimaFecha: null,
      fechaCreacion: new Date().toISOString()
    };

    setHabitos([...habitos, nuevoHabito]);
  };

  const eliminarHabito = (id) => {
    const nuevosHabitos = habitos.filter(h => h.id !== id);
    setHabitos(nuevosHabitos);
  };

  const toggleHabito = (id) => {
    const nuevosHabitos = habitos.map(h =>
      h.id === id ? { ...h, activo: !h.activo } : h
    );

    setHabitos(nuevosHabitos);
  };

  const marcarComoCumplido = (id) => {
    const hoy = new Date().toDateString();

    const nuevosHabitos = habitos.map((h) => {
      if (h.id !== id) return h;

      if (h.ultimaFecha === hoy) return h;

      const nuevaRacha = h.rachaActual + 1;

      return {
        ...h,
        rachaActual: nuevaRacha,
        rachaMasAlta: Math.max(h.rachaMasAlta, nuevaRacha),
        ultimaFecha: hoy
      };
    });

    setHabitos(nuevosHabitos);
  };

  const habitosFiltrados =
    areaFiltro === "Todas"
      ? habitos
      : habitos.filter(h => h.area === areaFiltro);

  return (
    <>
      <Header cambiarSeccion={setSeccionActiva} />

      <div className="app">
        <BarraI
          cambiarSeccion={setSeccionActiva}
          setAreaFiltro={setAreaFiltro}
        />

        <div className="content">

          {seccionActiva === "Habito y Rutinas" && (
            <HabitosDashboard
              usuario={usuario}
              habitos={habitos}
              cambiarSeccion={setSeccionActiva}
            />
          )}

          {seccionActiva === "NuevoHabito" && (
            <NuevoHabito
              agregarHabito={agregarHabito}
              cambiarSeccion={setSeccionActiva}
            />
          )}

          {seccionActiva === "Perfil" && (
            <Perfil datosUsuario={datosUsuario} />
          )}

          {seccionActiva === "Lista de Habitos" && (
            <ListaHabitos
              habitos={habitosFiltrados}
              marcarComoCumplido={marcarComoCumplido}
              eliminarHabito={eliminarHabito}
              toggleHabito={toggleHabito}
            />
          )}

        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
