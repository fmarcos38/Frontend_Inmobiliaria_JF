import React, { useContext } from 'react'
import { InmobiliariaContext } from '../../context'
import './estilos.css';


function ModalVideo({video}) {

    //"https://www.youtube.com/embed/M6tLJTwcp1g?si=KwGiXd2BA_f_HULF"
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

            {
                video ? (
                    <iframe
                        width="80%"
                        height="80%"
                        src={video}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    ></iframe>
                ) : (
                    <h2 style={{color:'white'}}>Por el momento no hay Viedo</h2>
                )
            }
        </div>
    )

}

export default ModalVideo;