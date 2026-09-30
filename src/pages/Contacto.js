import React from 'react';
import FormularioContacto from '../components/FormularioContacto';

function Contacto() {
    return (
        <div className="pagina">
            <h1>Contacto</h1>
            <p> Para contactarme, por favor completa el siguiente formulario.Te tratare de responder a la brevedad.</p>
            {/* Aquí llamamos al componente extra que acabamos de crear */}
            <FormularioContacto />  
        </div>
    );
}

export default Contacto;