import React from 'react'
import CarruselModal from '../CarruselModal';
import './styles.css';

function Modal({imagenes}) {

    return (
        <div className='contModal'>
            <p className='mesaj-pos-horizontal'>Gira el telefono a posición horizontal</p>

            {/* carrusel de imgs */}
            <div className='cont-carrusel-modal'>
                <CarruselModal imagenes={imagenes} />
            </div>
        </div>
    )
}

export default Modal