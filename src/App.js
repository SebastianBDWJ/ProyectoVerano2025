import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ListaHabitos from "./Components/ListaHabitos";
import NuevoHabito from "./Components/NuevoHabito";
import HabitosDashboard from "./Components/HabitosDashboard";
import BarraI from "./Components/BarraIzquierda.jsx";
import Perfil from "./Components/Perfil.jsx";
import { useState, useEffect } from "react";
import RegistroUsuario from "./Components/RegistroUsuario";

function App() {
  const [seccionActiva, setSeccionActiva] = useState("Habito y Rutinas");
  const [areaFiltro, setAreaFiltro] = useState("Todas");

  const [usuario, setUsuario] = useState(() => {
    const usuarioGuardado = localStorage.getItem("usuario");
    return usuarioGuardado
      ? JSON.parse(usuarioGuardado)
      : { nombre: "Invitado" };
  });

  const datosUsuario = {
    nombre: usuario.nombre,
    correo: usuario.correo,
    habitosActivos: usuario.habitosActivos,
    rachaMasLarga: usuario.rachaMasLarga,
    ultimoHabito: "Leer 20 minutos"
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
          usuario={usuario}  
        />

        <div className="content">

          {seccionActiva === "Habito y Rutinas" && (
            <HabitosDashboard
              usuario={usuario}
              habitos={habitos}
              cambiarSeccion={setSeccionActiva}
              setAreaFiltro={setAreaFiltro}
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

          {seccionActiva === "RegistroUsuario" && (
            <RegistroUsuario
              cambiarSeccion={setSeccionActiva}
              setUsuario={setUsuario}
            />
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