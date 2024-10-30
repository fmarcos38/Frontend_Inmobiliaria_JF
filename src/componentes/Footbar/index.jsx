import React from 'react';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Logo from '../../imagenes/LogoNombre.jpg';

import './styles.css';

function Footbar() {
    return (
        <footer className='contFooter'>
            <div className="footer">
                <div className='divF'>
                    {/* logo */}
                    <a href='/home'>
                        <img src={Logo} alt='' className='logo-footbar' />
                    </a>
                    <ul>
                        {/* Contactanos */}
                        <li>
                            <div className='divLinks'>
                                <h2>
                                    <p className='titulo-col-foot'>Encontranos en</p>
                                </h2>
                                <p className='info-contactos'>
                                    De paula 569 - Azul
                                </p>

                                <p className='info-contactos'>
                                    Whatsapp +54 9 2281 359060
                                </p>

                                <p className='info-contactos'>
                                    Forastieri.Propiedades@hotmail.com
                                </p>
                            </div>
                        </li>
                        {/* Redes */}
                        <li>
                            <div className='divLinks'>
                            <h2>
                                <p className='titulo-col-foot'>Seguinos</p>
                            </h2>
                            <div className='cont-iconos-redes'>
                                <a href='https://www.instagram.com/jf.negociosinmobiliarios/'>
                                    <InstagramIcon sx={{'color':'rgba(255, 255, 255, 1)'}}/>
                                </a>
                                <a href='http://api.whatsapp.com/send?phone=2281359060'>
                                    <WhatsAppIcon sx={{'color':'rgba(255, 255, 255, 1)'}}/>
                                </a>
                                </div>
                            </div>
                        </li>
                        {/* Links */}
                        <li>
                            <div className='divLinks'>
                                <h2>
                                    <p className='titulo-col-foot'>Links</p>
                                </h2>

                                <Link to={'/venta'} className='link-footbar'>Ventas</Link>
                                <Link to={'/alquiler'} className='link-footbar'>Alquileres</Link>
                                <Link to={'/destacadas'} className='link-footbar'>Destacadas</Link>
                                <Link to={'/contacto'} className='link-footbar'>Contacto</Link>
                                <Link to={'/nosotros'} className='link-footbar'>Nosotros</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>    
            
            <div className='cont-info-derechos'>
                <p className='info-derechos'>
                    Todas las medidas enunciadas son meramente orientativas, 
                    las medidas exactas serán las que se expresen en el respectivo 
                    título de propiedad de cada inmueble. Todas las fotos, 
                    imagenes y videos son meramente ilustrativos y no contractuales. 
                    Los precios enunciados son meramente orientativos y no contractuales..
                    © 2024 Juan Forastieri Negocios Inmobiliario. DESARROLLO WEB: Marcos Forastiere
                </p>
            </div>
        </footer>
    )
}

export default Footbar;