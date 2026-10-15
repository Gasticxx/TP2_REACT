import { useEffect, useState } from "react";

const API_URL = "https://thesimpsonsapi.com/api/characters";
const IMG_BASE = "https://cdn.thesimpsonsapi.com/500";

function Inicio() {
  const [personajes, setPersonajes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener los datos");
        return res.json();
      })
      .then((data) => setPersonajes(data.results))
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, []);

  return (
    <section>
      <h1>Personajes de Los Simpsons</h1>

      {cargando && <p>Cargando...</p>}
      {error && <p>{error}</p>}

      <div className="grid">
        {personajes.map((p) => (
          <article key={p.id} className="card">
            <img src={IMG_BASE + p.portrait_path} alt={p.name} />
            <h2>{p.name}</h2>
            <p><strong>Ocupación:</strong> {p.occupation || "Desconocida"}</p>
            <p><strong>Edad:</strong> {p.age ?? "Desconocida"}</p>
            <p><strong>Género:</strong> {p.gender || "No especificado"}</p>
            <p><strong>Estado:</strong> {p.status}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Inicio;