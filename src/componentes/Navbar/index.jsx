import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './estilos.css';


function Navbar() {
    return (
        <nav>
            <div className='nav-cont-columnas'>
            <div className='nav-col1'>
                logo
            </div>
            <div className='nav-col2'>
                <div className='nav-cont-sup'>
                    <ul className='lista-sup'>
                        <li className='li-nav-sup-direcc'>
                            <LocationOnIcon sx={{'color':'white', 'fontSize':'20px'}} />
                            <p className='texto-barra-sup'>De paula 569</p>
                        </li>
                        <li className='li-nav-sup-tel'>
                            <LocalPhoneIcon sx={{'color':'white', 'fontSize':'20px'}} />
                            <p className='texto-barra-sup'>2281 359060</p>
                        </li>
                        <li className='li-nav-sup-email'>
                            <MailIcon sx={{'color':'white', 'fontSize':'20px'}} />
                            <p className='texto-barra-sup'>Forastieri.Propiedades@hotmail.com</p>
                        </li>
                        <li className='li-nav-sup-insta'>
                            <InstagramIcon sx={{'color':'white', 'fontSize':'20px'}} />
                        </li>
                        <li className='li-nav-sup-insta'>
                            <WhatsAppIcon sx={{'color':'white', 'fontSize':'20px'}}/>
                        </li>
                    </ul>
                </div>
                <div className='nav-cont-inf'>inf</div>
            </div>
            <div className='nav-col3'>
                menu hamb 
            </div>
            </div>
        </nav>
    )
}

export default Navbar