import React from 'react';
import FormularioCreaUsuario from '../../componentes/FormularioCreaUsuario';
import './estilos.css'; 

function AltaUsuarioPage() {
    return (
        <div className='cont-alta-usuario'>
            <h1>Alta de Usuario</h1>
            <FormularioCreaUsuario />
        </div>
    )
}

export default AltaUsuarioPage;