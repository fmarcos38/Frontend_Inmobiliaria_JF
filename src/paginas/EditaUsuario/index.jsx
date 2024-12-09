import React from 'react'
import FormularioUsuario from '../../componentes/FormularioCreaUsuario';
import './estilos.css';

function EditaUsuarioPage() {
    return (
        <div className='cont-edita-usuario'>
            <h1>Edita Usuario</h1>
            <FormularioUsuario operacion="edita" />
        </div>
    )
}

export default EditaUsuarioPage;