import React from 'react';
import GroupIcon from '@mui/icons-material/Group';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import CampaignIcon from '@mui/icons-material/Campaign';
import BalanceIcon from '@mui/icons-material/Balance';
import './estilos.css';
import { Link } from 'react-router-dom';

function LandingC() {
    return (
        <div className='cont-landing-C'>
            <div className='cont-fila-1'>
                <p className="titulo-land-C">¿QUE HACEMOS?</p>
                <p className='texto-2-land-C'>Servicios inmobiliarios premium para ayudarte con la propiedad de tus sueños</p>
            </div>
            <div className='cont-fila-2'>
                <div className='col-1'>
                    <GroupIcon sx={{'fontSize':'60px'}}/>
                    <p className='texto-fila-2'>Asesoría personalizada en Bienes Raíces</p>
                </div>
                <div className='col-2'>
                    <MapsHomeWorkIcon sx={{'fontSize':'60px'}}/>
                    <p className='texto-fila-2'>Valoración de propiedades</p>
                </div>
                <div className='col-3'>
                    <CampaignIcon sx={{'fontSize':'60px'}}/>
                    <p className='texto-fila-2'>Marketing de propiedades</p>
                </div>
                <div className='col-4'>
                    <BalanceIcon sx={{'fontSize':'60px'}}/>
                    <p className='texto-fila-2'>Asesoría legal y gestión de transacciones</p>
                </div>
            </div>
            <div className='cont-fila-3'>
                <div className='cont-inf-fila-3'>
                    <p className='texto-1-fila-3'>ESTAMOS PARA ATENDERTE</p>
                    <p className='texto-2-fila-3'>Compra, vende o alquila tu propiedad con confianza</p>
                    <p className='texto-3-fila-3'>
                        ¿Tienes curiosidad sobre el valor exacto de tu casa o su precio de venta potencial? 
                        Benefíciate de nuestra amplia experiencia en el mercado de bienes raíces.
                    </p>
                    <Link to={'/contacto'}>
                        <button className='btn-fila-3'>Contacto</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LandingC