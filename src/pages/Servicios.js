import { servicios } from "../data/servicios";

function Servicios() {
  return (
    <section className="servicios">
      <h1>Servicios</h1>
      <div className="grid">
        {servicios.map((s) => (
          <article key={s.id} className="card">
            <img src={s.imagen} alt={s.nombre} />
            <h2>{s.nombre}</h2>
            <p><strong>Tecnologías:</strong> {s.tecnologias}</p>
            <p>{s.descripcion}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Servicios;