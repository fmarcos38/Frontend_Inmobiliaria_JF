import React, { useContext, useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { InmobiliariaContext } from '../../context';
import { resetLogin } from '../../redux/actions';
import { logout } from '../../localStorage';
import logo from '../../imagenes/ScreenShot146.jpg';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import Swal from 'sweetalert2';
import './estilos.css';


function Navbar() {

    //estado menú hambur
    const [isOpen, setIsOpen] = useState(false);
    //estado menú Admin
    const [muestraMenuAdmin, setMuestraMenuAdmin] = useState(false);
    const context = useContext(InmobiliariaContext);
    const dispatch = useDispatch();
    const menuRef = useRef(null); // Referencia para el menú hamburguesa
    const menuItemsRef = useRef([]); // Referencia para los elementos del menú

    // Abre/cierra menú hamburguesa
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Cierra el menú hamburguesa al hacer clic o tocar fuera de él
    useEffect(() => {
        function handleClickOutside(event) {
            // Verificar si el clic o toque es fuera del menú
            if (
                menuRef.current && !menuRef.current.contains(event.target) && 
                !menuItemsRef.current.some(item => item.contains(event.target))
            ) {
                setIsOpen(false); // Cierra el menú si no es clic en el menú
            }
        }

        // Escuchar el evento pointerdown (compatible con mouse y táctil)
        document.addEventListener('pointerdown', handleClickOutside);
        return () => {
            // Limpiar el evento cuando el componente se desmonta
            document.removeEventListener('pointerdown', handleClickOutside);
        };
    }, []);

    const handleMouseEnterAdmin = () => {
        setMuestraMenuAdmin(true);
    };
    const handleMouseLeaveAdmin = () => {
        setMuestraMenuAdmin(false);
    };
    
    //logout
    const handleLogOut = () => {
        Swal.fire({
            title: "Salir?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si!"
        }).then((result) => {
            if (result.isConfirmed) {
                logout();
                context.setUserLog(null);
                context.logout();
                dispatch(resetLogin());
            }
            //redirijo a home
            window.location.href = '/';
        });        
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
                    {/* items */}
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
                                                    <NavLink to='/admin/creaPropiedad' className='link-menu' >
                                                        Crea Propiedad                                        
                                                    </NavLink>
                                                </li>
                                                <li className="dropdown-item">
                                                    <NavLink to='/admin/listaPropsAdmin' className='link-menu' >
                                                        Lista Propiedades                                        
                                                    </NavLink>
                                                </li>
                                                <li className="dropdown-item">
                                                    <NavLink to='/admin/creaUsuario' className='link-menu' >
                                                        Crea Usuario                                        
                                                    </NavLink>
                                                </li>
                                                <li className="dropdown-item">
                                                    <NavLink to='/admin/listaUsuarios' className='link-menu' >
                                                        Lista Usuarios
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
                                            <button onClick={()=>{handleLogOut()}} style={{border:'none', backgroundColor:'transparent'}}>
                                                <LogoutIcon sx={{'fontSize':'18px', 'color':'white'}} />
                                            </button>
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
                        ref={menuRef}
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
                                    {
                                        context.nombreUser && (
                                            <>
                                            <li className='items-pChica'>
                                                <NavLink to='/admin/creaPropiedad' className='link-navbar' ref={el => menuItemsRef.current[0] = el}>Crea Propiedad</NavLink>
                                            </li>
                                            <li className='items-pChica'>
                                            <NavLink to='/admin/listaPropsAdmin' className='link-navbar' ref={el => menuItemsRef.current[1] = el}>Lista Propiedades</NavLink>
                                            </li>
                                            <li className='items-pChica'>
                                                <NavLink to='/admin/creaUsuario' className='link-navbar' ref={el => menuItemsRef.current[2] = el}>Crea Usuario</NavLink>
                                            </li>
                                            <li className='items-pChica'>
                                            <NavLink to='/admin/listaUsuarios' className='link-navbar' ref={el => menuItemsRef.current[3] = el}>Lista Usuarios</NavLink>
                                            </li>
                                            </>
                                        )
                                    }
                                    <li className='items-pChica'>
                                        <NavLink to='/' className='link-navbar' ref={el => menuItemsRef.current[4] = el}>Home</NavLink>
                                    </li>
                                    <li className='items-pChica'>
                                        <Link to='/venta' className='link-navbar' ref={el => menuItemsRef.current[5] = el}>Venta</Link>
                                    </li>
                                    <li className='items-pChica'>
                                        <NavLink to='/alquiler' className='link-navbar' ref={el => menuItemsRef.current[6] = el}>Alquiler</NavLink>
                                    </li>
                                    <li className='items-pChica'>
                                        <NavLink to='/favoritos' className='link-navbar' ref={el => menuItemsRef.current[7] = el}>Favoritos</NavLink>
                                    </li>
                                    <li className='items-pChica'>
                                        <NavLink to='/nosotros' className='link-navbar' ref={el => menuItemsRef.current[8] = el}>Nosotros</NavLink>
                                    </li>
                                    <li className='items-pChica'>
                                        <NavLink to='/contacto' className='link-navbar' ref={el => menuItemsRef.current[9] = el}>Contacto</NavLink>
                                    </li>
                                    {
                                        context.nombreUser ? (
                                            <li className='items-pChica'>
                                                <button onClick={()=>{handleLogOut()}} style={{border:'none', backgroundColor:'transparent'}}>
                                                    <LogoutIcon sx={{'fontSize':'18px', 'color':'white'}} />
                                                </button>
                                            </li>
                                        ) : (
                                            <li className='items-pChica'>
                                                <NavLink to='/login' className='link-navbar' ref={el => menuItemsRef.current[10] = el}>Login</NavLink>
                                            </li>
                                        )
                                    }
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