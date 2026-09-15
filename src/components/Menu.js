import React from 'react';
import { NavLink } from 'react-router-dom';
// usamos una lista desornenada para crear el menú de navegación, y cada elemento de la lista es un enlace a una ruta específica. 
// Y la lista ordenada se encuentra dentro de un elemento <nav> que representa la barra de navegación en la página.
// nav> es un elemento semántico que indica que el contenido dentro de él es un bloque de navegación.
function Menu() {
    return (
        <nav className="menu">
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/servicios">Servicios</NavLink></li>
                <li><NavLink to="/contacto">Contacto</NavLink></li>
            </ul>
        </nav>
    );
}

export default Menu;