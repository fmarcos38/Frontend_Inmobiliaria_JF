import React from 'react';
import './estilos.css';

function ContactoPAntallaCH() {

    const handleCall = () => {
        window.location.href = `tel:${+5490228115359060}`;
    };

    //efecto para iniciar la pagina en la parte superior
    React.useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <div className='cont-pantalla-chica'>
            <h2 className='titulo-contactanos'>Contáctanos</h2>
            <p className='texto-contactanos'>Si tienes alguna consulta, no dudes en contactarnos.</p>
            <p className='texto-contactanos'>Estamos a tu disposición.</p>
            <div>
                <button className='btn-contacto'>
                    <a
                        href="https://wa.me/2281359060"
                        className="whatsapp-button-contacto"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        WhatsApp
                    </a>
                </button>
                <button 
                    className='btn-contacto'
                    onClick={handleCall}
                >
                    Llamar
                </button>
            </div>
        </div>
    )
}

export default ContactoPAntallaCH