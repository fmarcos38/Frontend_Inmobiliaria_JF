import React from 'react';
import logo from '../../imagenes/Logo_Y_nombre.jpg';
import './estilos.css';

function Loading() {
    return (
        <div className='cont-loading'>
            <img src={logo} alt='not found' className='logo-loading'/>            
            <p>Cargando props ...</p>
        </div>
    )
}

export default Loading