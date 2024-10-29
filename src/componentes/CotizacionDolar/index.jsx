import React from 'react';
import './estilos.css';

function CotizacionDolar() {
    return (
        <div className='cont-grlCotizaciones'>
            <p>COTIZACIONES USD</p>
            <div className='cont-cotizaciones'>
                {/* dolar blue */}
                <div>
                    <iframe
                        title="dolar blue" /* se debe poner un titulo */
                        className='dolarBlue'
                        src="https://dolarhoy.com/i/cotizaciones/dolar-blue"
                        
                    >
                    </iframe>
                </div>

                {/* dolar oficial */}
                <div>
                    <iframe
                        title="dolar oficial"
                        className='dolarBlue'
                        src="https://dolarhoy.com/i/cotizaciones/dolar-bancos-y-casas-de-cambio"
                        
                    >
                    </iframe>
                </div>
                {/* dolar bolsa */}
                <div>
                    <iframe
                        title="dolar bolsa"
                        className='dolarBlue'
                        src="https://dolarhoy.com/i/cotizaciones/dolar-mep"
                        
                    >
                    </iframe>
                </div>

            </div>
        </div>
    )
}

export default CotizacionDolar