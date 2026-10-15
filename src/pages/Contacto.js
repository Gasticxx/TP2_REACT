function Contacto() {
  return (
    <section>
      <h1>Contacto</h1>
      <div className="contacto-layout">
        <form className="formulario">
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Mensaje" rows="5" required />
          <button type="submit">Enviar</button>
        </form>

        <iframe
            title="Mapa UCASAL"
            src="https://www.google.com/maps?q=Universidad+Cat%C3%B3lica+de+Salta&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
        />
      </div>
    </section>
  );
}

export default Contacto;