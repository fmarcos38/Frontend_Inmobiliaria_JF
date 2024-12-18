import React, { useContext } from 'react'
import FormularioUsuario from '../../componentes/FormularioCreaUsuario';
import './estilos.css';
import { InmobiliariaContext } from '../../context';

function EditaUsuarioPage() {

    const context = useContext(InmobiliariaContext);

    return (
        <div className='cont-edita-usuario'>
            {
                context.isAuthenticated ? (
                    <>
                        <h1>Edita Usuario</h1>
                        <FormularioUsuario operacion="edita" />
                    </>
                )           
                : 
                (
                    <h1>No está autorizado</h1>
                )
            }
        </div>
    )
}

export default EditaUsuarioPage;