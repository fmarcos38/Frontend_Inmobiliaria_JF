import React from 'react'
import FormularioContacto from '../../componentes/FormularioContacto';
import './estilos.css';


function Contactanos() {
    return (
        <div className='contGralFormulario'> 
            <div className='cont-titulo-y-formulario'>
            <div className='cont-titulo'>
                <p className='titulo'>CONTACTO</p>
                <p className='texto-titulo'>Lo invitamos a dejarnos sus datos y nos contactaremos con usted a la brevedad.</p>
            </div>
            <div className='cont-formulario'>
                <FormularioContacto />
            </div>
            </div>
        </div>
    )
}

export default Contactanos