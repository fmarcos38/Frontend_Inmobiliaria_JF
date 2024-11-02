import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../imagenes/ScreenShot146.jpg';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import './estilos.css';
import { InmobiliariaContext } from '../../context';

function Navbar() {

    //estado menú hambur
    const [isOpen, setIsOpen] = useState(false);
    //estado menú Admin
    const [muestraMenuAdmin, setMuestraMenuAdmin] = useState(false);
    const context = useContext(InmobiliariaContext);

    const handleMouseEnterAdmin = () => {
        setMuestraMenuAdmin(true);
    };
    const handleMouseLeaveAdmin = () => {
        setMuestraMenuAdmin(false);
    };
    //abre/cierra menú Hambur
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <div className='nav-cont-columnas'>
                {/* Logo */}
                <div className='nav-col1'>
                    <NavLink to='/'>
                        <img src={logo} alt='img not found' className='nav-logo' />
                    </NavLink>
                </div>
                {/* barra sup */}
                <div className='nav-col2'>
                    <div className='nav-cont-sup'>
                        <ul className='lista-sup'>
                            <li className='li-nav-sup-direcc'>
                                <LocationOnIcon sx={{ 'color': 'white', 'fontSize': '20px' }} />
                                <p className='texto-barra-sup'>De paula 569</p>
                            </li>
                            <li className='li-nav-sup-tel'>
                                <LocalPhoneIcon sx={{ 'color': 'white', 'fontSize': '20px' }} />
                                <p className='texto-barra-sup'>2281 359060</p>
                            </li>
                            <li className='li-nav-sup-email'>
                                <MailIcon sx={{ 'color': 'white', 'fontSize': '20px' }} />
                                <p className='texto-barra-sup'>Forastieri.Propiedades@hotmail.com</p>
                            </li>
                            <li className='li-nav-sup-insta'>
                                <a href='https://www.instagram.com/jf.negociosinmobiliarios/' className='etiqta-a-nav-sup'>
                                    <InstagramIcon sx={{ 'color': 'white', 'fontSize': '20px' }} />
                                </a>
                            </li>
                            <li className='li-nav-sup-insta'>
                                <a href='http://api.whatsapp.com/send?phone=2281359060' className='etiqta-a-nav-sup'>
                                    <WhatsAppIcon sx={{ 'color': 'white', 'fontSize': '20px' }} />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='nav-cont-inf'>
                        <ul className='ul-nav-inf'>
                            <li>
                                <NavLink to='/venta' >
                                    Venta
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/alquiler' >
                                    Alquileres
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/contacto' >
                                    Contacto
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/nosotros' >
                                    Nosotros
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/favoritos' >
                                    Favoritos
                                </NavLink>
                            </li>
                            {
                                context.nombreUser &&
                                <li
                                    className='navbar-item-admin'
                                    onMouseEnter={handleMouseEnterAdmin}
                                    onMouseLeave={handleMouseLeaveAdmin}
                                >
                                    Admin
                                    {/* menú admin */}
                                    {
                                        muestraMenuAdmin && (
                                            <ul className="dropdown-menu">
                                                <li className="dropdown-item">
                                                    <NavLink to='/creaPropiedad' className='link-menu' >
                                                        Crea Propiedad                                        
                                                    </NavLink>
                                                </li>
                                                <li className="dropdown-item">
                                                    <NavLink to='/listaPropiedadesAdmin' className='link-menu' >
                                                        Lista Propiedades                                        
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        )
                                    }
                                </li>
                            }
                            {/* login */}
                            <li>
                                {
                                    context.nombreUser ? (
                                        <>
                                            <LogoutIcon sx={{'fontSize':'18px'}}/>
                                        </>
                                    ) : (
                                        <NavLink 
                                            to='/login' 
                                            style={{'display':'flex', 'justifyContent':'center', 'alignItems':'center'}}>
                                                <LoginIcon sx={{'fontSize':'18px'}}/>
                                        </NavLink>
                                    )
                                }
                            </li>                            
                        </ul>
                    </div>
                </div>
                {/* menu hambur y desplegable P.Chica */}
                <div className='nav-col3'>
                    {/* menu hambur P.Chica */}
                    <div
                        className={`menu-icon ${isOpen ? 'open' : ''}`}
                        onClick={toggleMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    {/* menu desplegable P.chica*/}
                    <div className="menu-desplegable">
                        {
                            isOpen && (
                                <ul className='ul-lista-pChica'>
                                    <li className='items-pChica'>
                                        <NavLink to='/' className='link-navbar'>Home</NavLink>
                                    </li>
                                    <li className='items-pChica'>
                                        <Link to='/venta' className='link-navbar'>Venta</Link>
                                    </li>
                                    <li className='items-pChica'>
                                        <NavLink to='/alquiler' className='link-navbar'>Alquiler</NavLink>
                                    </li>
                                    <li className='items-pChica'>
                                        <NavLink to='/favoritos' className='link-navbar'>Favoritos</NavLink>
                                    </li>
                                    <li className='items-pChica'>
                                        <NavLink to='/contacto' className='link-navbar'>Contacto</NavLink>
                                    </li>
                                    <li className='items-pChica'>
                                        <NavLink to='/nosotros' className='link-navbar'>Nosotros</NavLink>
                                    </li>
                                </ul>
                            )
                        }
                    </div>
                </div>                
            </div>
        </nav>
    )
}

export default Navbar