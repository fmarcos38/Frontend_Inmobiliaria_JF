import React from 'react';
import Logo from '../../imagenes/Logo_Y_nombre.jpg';
import { NavLink } from 'react-router-dom';
import './estilos.css';


function LandingB() {
    return (
        <div className='cont-landing-B'>
                <p className="texto-somos">SOMOS</p>
                <img src={Logo} alt='' className='logo-landing-B' />
                <p className="texto-inf-landingB">
                    Nos dedicamos a realizar gestiones inmobiliarias, con un enfoque en propiedades de diseño único.
                    <br />
                    Creemos en la importancia de caminar juntos hacia el cumplimiento de tus objetivos, para que sientas nuestro respaldo en cada paso del proceso.
                </p>
                <NavLink to={'/contacto'}>
                    <button className='btn-contactanos-home'>Contactanos</button>
                </NavLink>
        </div>
    )
}

export default LandingB