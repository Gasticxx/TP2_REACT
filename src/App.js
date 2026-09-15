import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Inicio from './pages/Inicio';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';
import NoExiste from './pages/NoExiste';
import './App.css'; // Importamos los estilos

function App() {
  return (
    <BrowserRouter>
      {/* El menú se coloca en la raíz, antes de las rutas, para que siempre sea visible */}
      <Menu />
      
      {/* Aquí React Router decide qué página mostrar dependiendo de la URL */}
      <div className="contenedor-principal">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NoExiste />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
/*
Aqui ocurre la "magia" que une todo. En los apuntes que anoto que dijo el profesor, mencionó que todo debe ir dentro del componente BrowserRouter y las rutas dentro de Routes. El elemento a renderizar se llama con la propiedad element. Para la página que no existe, usamos un asterisco (*) en el path
*/
export default App;