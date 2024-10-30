import React, { useContext } from 'react'
import { InmobiliariaContext } from '../../context'
import './estilos.css';


function ModalVideo() {

    const contexto = useContext(InmobiliariaContext);


    return (
        <div className='contModalVideo'>
            <div className='cont-btn-cierra-modalVideo'>
                <button
                    className='btn-close-modal'
                    onClick={() => contexto.handleIsClose()}
                >
                    <b>X</b>
                </button>
            </div>

            <iframe 
                width="80%" 
                height="80%" 
                src="https://www.youtube.com/embed/M6tLJTwcp1g?si=KwGiXd2BA_f_HULF" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen
            ></iframe>
        </div>
    )

}

export default ModalVideo;