import React  from 'react';
import { Link } from 'react-router-dom';
import logo from '../../imagenes/Logo_Y_nombre.jpg';
import './estilos.css';

function LandingPage2() {

    return (
        <div className='contGralLanding'>   
            {/* cont logo */}
            <div className='cont-logo-landing'>
                <div className='sub-cont-logo-landing sub-cont-sup left-slide'>
                    <img src={logo} alt='' className='logo-landing'/>
                </div>
            </div>            
            
            {/* cont texto 2 */}            
            <div className='cont-inf'>
                <div className="sub-cont-infe right-slide">
                    <Link to={'/venta'}>
                        <button className='btn-landing'>Quiero Comprar</button>
                    </Link>
                    <Link to={'/alquiler'}>
                        <button className='btn-landing'>Quiero Alquilar</button>
                    </Link>
                    <Link to={'/contacto'}>
                        <button className='btn-landing'>Quiero Vender</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default LandingPage2;

