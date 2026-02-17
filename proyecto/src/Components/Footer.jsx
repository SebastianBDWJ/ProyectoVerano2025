function Footer() {
  return (
    <footer style={styles.footer}>
      <p>Todos los derechos reservados</p>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#222",
    color: "white",
    textAlign: "center",
    padding: "10px",
    marginTop: "20px",
  },
};

export default Footer;
