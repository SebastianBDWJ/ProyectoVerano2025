const Perfil = ({ datosUsuario }) => {
  return (
    <div>
      <h1>Perfil</h1>
      <p><strong>Nombre:</strong> {datosUsuario.nombre}</p>
      <p><strong>Correo:</strong> {datosUsuario.correo}</p>
    </div>
  );
};

export default Perfil;