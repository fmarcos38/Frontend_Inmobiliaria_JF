import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { formatMoney } from '../../Helps';
import Favorito from '../Favoritos';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import IconoSup from '../../imagenes/Iconos/IconoSup';
import IconoAmb from '../../imagenes/Iconos/IconoAmb';
import IconoDormitorio from '../../imagenes/Iconos/IconoDormitorios';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import WcIcon from '@mui/icons-material/Wc';
import './styles.css'

function Card(
    {
        id,
        tituloPublicacion,
        operacion,
        moneda,
        precio,
        ubicacion,
        imagenes,
        cantCocheras,
        ambientes,
        dormitorios,
        tipoPropiedad,
        supTotal,
        supDescubierta,
        supCubierta,
        supSemiCub,
        baños,
        estadoActual
    }
) {

    //estado para el hover
    const [showDetail, setShowDetail] = useState(false);

    return (
        <div className='contCard'>
            {/* titulo */}
            <div className='card-title'>
                <h2 className='titulo-card'>
                    {
                        operacion === "Venta" && "Venta"
                    }
                    {
                        operacion === "Alquiler" && "Alquiler"
                    }
                    {
                        operacion === "Venta y Alquiler" && "Venta / Alquiler"
                    }
                </h2>
            </div>

            {/* img + animacion + abre detalle */}
            <NavLink to={`/detalle/${id}`} className='navLink-car'>
                <div
                    onMouseEnter={() => setShowDetail(true)}
                    onMouseLeave={() => setShowDetail(false)}
                >
                    {/* imagen */}
                    <div className='card-image'>
                        <img src={imagenes[0]} alt='not found' className='card-img' />
                    </div>

                    {/* mensaje Vendida */}
                    <p className={estadoActual ? 'p-estadoActual' : ''}>{estadoActual}</p>
                    {/* msj detalle si hay hover */}
                    <div className={`detail ${showDetail ? 'show' : ''}`}>
                        <p className='palabra-abre-detalle'>Detalle</p>
                    </div>
                </div>
            </NavLink>

            {/* Titulo - direcc -  precio - fav*/}
            <div className='card-info1'>
                <div className='cont-titulo-publicacion'>
                    <span className='tituloPublicacion'>{tituloPublicacion}</span>
                </div>
                <div className='cont-info1'>
                    <LocationOnIcon sx={{'color':'grey', 'marginRight':'3px'}}/>
                    <span className='direccion-card'>
                        {ubicacion?.direccionPublicacion}
                    </span>
                </div>

                <div className='cont-precio-fav'>
                    <div className='cont-precio'>
                        <p className='precio'>{moneda} {formatMoney(precio)}</p>
                    </div>
                    <div className='cont-fav'>
                        <Favorito
                            id={id}
                            tituloPublicacion={tituloPublicacion}
                            ubicacion={ubicacion}
                            operacion={operacion}
                            moneda={moneda}
                            precio={precio}
                            imagenes={imagenes}
                            cantCocheras={cantCocheras}
                            ambientes={ambientes}
                            dormitorios={dormitorios}
                            tipoPropiedad={tipoPropiedad}
                            supTotal={supTotal}
                            supDescubierta={supDescubierta}
                            supCubierta={supCubierta}
                            supSemiCub={supSemiCub}
                            baños={baños}
                        />
                    </div>
                </div>
            </div>
            
            {/* info 2 */}
            <div className='card-info2'>
                {/* sup total  común para todas las props*/}
                <div className='div-info2'>
                    <IconoSup />                    
                    <p className='info2'>Sup Tot</p>
                    <p className='info2'>{supTotal}m2</p>
                </div>
                {/* casa, depto, ph */}
                {
                    tipoPropiedad === "Casa" 
                    || tipoPropiedad === "Departamento"
                    || tipoPropiedad === "PH" 
                    || tipoPropiedad === "Oficina" ?
                        <>
                            <div className='div-info2'>
                                <IconoAmb />
                                <p className='info2'>Ambientes</p>
                                <p className='info2'>{ambientes}</p>
                            </div>

                            <div className='div-info2'>
                                <IconoDormitorio />
                                <p className='info2'>Dormitorios</p>
                                <p className='info2'>{dormitorios}</p>
                            </div>

                            <div className='div-info2'>
                                <DirectionsCarIcon sx={{ color: 'rgba(171, 132, 94, 1)', width: '28px', height: '28px' }} />
                                <p className='info2'>Cocheras</p>
                                <p className='info2'>{cantCocheras}</p>
                            </div>
                        </>
                        : null
                }
                {/* local, cochera, galpón */}
                {
                    tipoPropiedad === "Local" 
                    || tipoPropiedad === "Cocher"
                    || tipoPropiedad === "Galpón" ?
                        <>
                            <div className='div-info2'>
                                <IconoSup />
                                <p className='info2'>Sup Desc</p>
                                <p className='info2'>{supDescubierta}m2</p>
                            </div>
                            <div className='div-info2'>
                                <IconoSup />
                                <p className='info2'>Sup Cub</p>
                                <p className='info2'>{supCubierta}m2</p>
                            </div>
                            <div className='div-info2'>
                                <WcIcon sx={{'color': 'rgba(171, 132, 94, 1)'}}/>
                                <p className='info2'>Baños</p>
                                <p className='info2'>{baños}</p>
                            </div>                            
                        </> : null
                    
                }
                {/* terreno, quinta, campo */}
                {
                    tipoPropiedad === "Terreno" 
                    || tipoPropiedad === "Quinta"
                    || tipoPropiedad === "Campo" ?
                        <>
                            <div className='div-info2'>
                                <IconoSup />
                                <p className='info2'>Sup Cub</p>
                                <p className='info2'>{supCubierta}m2</p>
                            </div>
                            <div className='div-info2'>
                                <IconoSup />
                                <p className='info2'>Sup SemiC</p>
                                <p className='info2'>{supSemiCub}m2</p>
                            </div>                            
                            <div className='div-info2'>
                                <IconoSup />
                                <p className='info2'>Sup SemiC</p>
                                <p className='info2'>{supSemiCub}m2</p>
                            </div>
                        </> : null
                }
            </div>
        </div>
    )
}

export default Card;
