import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProperty, resetProperty } from '../../redux/actions';
import { formatMoney } from '../../Helps';
import { InmobiliariaContext } from '../../context';
import Carrusel from '../../componentes/Carrusel';
import MapProp from '../../componentes/MapaProp';
import FormularioContacto from '../../componentes/FormularioContacto';
import ModalVideo from '../../componentes/ModalVideo';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './estilos.css';


function DetalleProp(){

    const { id } = useParams();  //let id = props.match.params.id 
    const propiedad = useSelector(state => state.propiedad); console.log('propiedad:', propiedad);
    //obt el tipo de moneda
    const moneda =  propiedad?.operacion?.[0]?.moneda; 
    //otengo el precio de la prop
    const precio =  propiedad?.operacion?.[0]?.precio; 
    const navigate = useNavigate();
    const dispatch = useDispatch();    
    const contexto = useContext(InmobiliariaContext); 
    //estado para el tooltipText
    const [showTooltipVideo, setShowTooltipVideo] = useState(false);
    //estado para el tooltipText
    const [showTooltipVolver, setShowTooltipVolver] = useState(false);
    const tooltipTextVideo = "Ver video propiedad";
    const tooltipTextVolver = "Volver atrás";


    const handleMouseEnter = () => {
        setShowTooltipVideo(true);
    };
    const handleMouseLeave = () => {
        setShowTooltipVideo(false);
    };
    const handleMouseEnterVolver = () => {
        setShowTooltipVolver(true);
    };
    const handleMouseLeaveVolver = () => {
        setShowTooltipVolver(false);
    };

    const handleClickAtras = () => {
        navigate('/');
    };

    useEffect(() => { 
        dispatch(getProperty(id));
        // Desplazarse hacia la parte superior de la página al cargar el componente
        window.scrollTo(0, 0);

        return () => { dispatch(resetProperty()); }
    }, [dispatch, id]);


    return(
        <div className='contGralDetalle'>
            <div className='cont-detail'>
                {/* datos principales */}
                <div className='info-1'>
                {/* Titulo prop */}
                    <div className='cont-titulo-detalle'>
                        <span className='detalle-titulo-prop'>{propiedad.tituloPublicacion}</span>
                        {/* dirección */}
                        <div className='cont-titulo-icono-direcc'>
                            <LocationOnIcon sx={{'marginLeft':'10px'}}/>
                            <p className='detalle-titulo-direccion'>
                                {propiedad.ubicacion?.direccionPublicacion}
                            </p>
                        </div>
                        <div className='cont-moned-precio-detalle'>
                            <p className='detalle-precio'>{moneda}</p>
                            <p className='detalle-precio'>{precio}</p>
                        </div>
                    </div>
                    
                    <div className='cont-btns-direccion'>
                            {/* btn-atrás */}
                            <button
                                onClick={() => handleClickAtras()}
                                className='btn-volver'
                                onMouseEnter={handleMouseEnterVolver}
                                onMouseLeave={handleMouseLeaveVolver}
                            >
                                <ArrowBackIcon />
                            </button>
                            {/* msj toolTip */}
                            {
                                showTooltipVolver && <div className="tooltipVolver">{tooltipTextVolver}</div>
                            }
                            
                            {/* btn-video */}
                            <button
                                onClick={() => contexto.handleIsOpen()}
                                className='btn-video'
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <OndemandVideoIcon className='icono-video' />
                            </button>
                            {/* msj toolTip */}
                            {
                                showTooltipVideo && <div className="tooltip">{tooltipTextVideo}</div>
                            }
                    </div>
                </div>

                {/* carrusel y formulario */}
                <div className='cont-imgs-info'>
                    <div className='cont-imagenes'>
                        {
                            propiedad?.imagenes?.length > 0
                                ?
                                <Carrusel imagenes={propiedad.imagenes} />
                                :
                                <p>No img</p>
                        }
                    </div>

                    <div className='cont-form-contacto-detalle'>
                        <FormularioContacto 
                            tituloPublicacion={propiedad.tituloPublicacion}
                            codigoReferencia={propiedad.codigoReferencia}
                        />
                    </div>
                </div>

                {/* descrip prop */}
                <div className='cont-titulo-descripcion-form'>
                    <div className='cont-descrip'>
                        <p className='titulo-descrip-prop'>Descripción Propiedad</p>
                        {/* Renderizar HTML dentro de la descripción */}
                        <p
                            className='p-descrip-detalle'
                            dangerouslySetInnerHTML={{ __html: propiedad.descripcion }}
                        />
                    </div>

                    <div className='cont-descrip'>
                        <p className='titulo-descrip-prop'>Detalle Propiedad</p>
                        <div className='col-descrip-prop'>
                            <div className='col-descrip-prop-1'>
                                <div className='cont-p-col-1'>
                                    <p className='p-col-1'>Precio:</p>
                                    <p className='p-col-1'>{moneda}{formatMoney(precio)}</p>
                                </div>
                                <div className='cont-p-col-1'>
                                    <p className='p-col-1'>Sup. Cubierta:</p>
                                    <p className='p-col-1'>{propiedad.supCubierta}m2</p>
                                </div>
                                <div className='cont-p-col-1'>
                                    <p className='p-col-1'>Sup. Total:</p>
                                    <p className='p-col-1'>{propiedad.supTotal}m2</p>
                                </div>
                                <div className='cont-p-col-1'>
                                    <p className='p-col-1'>Dormitorios:</p>
                                    <p className='p-col-1'>{propiedad.dormitorios}</p>
                                </div>
                            </div>
                            <div className='col-descrip-prop-1'>
                                <div className='cont-p-col-1'>
                                    <p className='p-col-1'>Ambientes:</p>
                                    <p className='p-col-1'>{propiedad.ambientes}</p>
                                </div>
                                <div className='cont-p-col-1'>
                                    <p className='p-col-1'>Baños:</p>
                                    <p className='p-col-1'>{propiedad.baños}</p>
                                </div>
                                <div className='cont-p-col-1'>
                                    <p className='p-col-1'>Tipo Operacio:</p>
                                    {
                                        propiedad.operacion?.map(o => {
                                            return (
                                                <div key={o.operacion_id}>
                                                    <p className='p-col-1'>{propiedad.operacion[0]?.tipoOperacion}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className='cont-p-col-1'>
                                    <p className='p-col-1'>Tipo:</p>
                                    <p className='p-col-1'>{propiedad.tipoPropiedad}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                
                {/* google map */}
                <div className='cont-map'>
                    <p className='p-titulo-mapa'>Ubicacion Propiedad</p>
                    <MapProp 
                        lat={propiedad.geoLat} 
                        lng= {propiedad.geoLong}
                    />
                </div>

                {/* Modal Video */}
                
                    {
                        contexto.isOpenModalVideo && <ModalVideo />
                    }
                
            </div>
        </div>
    )
}

export default DetalleProp;