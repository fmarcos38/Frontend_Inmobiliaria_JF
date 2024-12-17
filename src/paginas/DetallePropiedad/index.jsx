import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {  getPropiedad, resetProperty } from '../../redux/actions';
import { formatMoney } from '../../Helps';
import { InmobiliariaContext } from '../../context';
import Carrusel from '../../componentes/Carrusel';
import MapProp from '../../componentes/MapaProp';
import ModalVideo from '../../componentes/ModalVideo';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BotonWhatsApp from '../../componentes/BotonWhastApp';
import './estilos.css';


function DetalleProp(){

    const { id } = useParams();  //let id = props.match.params.id 
    const propiedad = useSelector(state => state.propiedad);    
    const navigate = useNavigate();
    const dispatch = useDispatch();    
    const contexto = useContext(InmobiliariaContext); 
    //estado para el tooltipText
    const [showTooltipVideo, setShowTooltipVideo] = useState(false);
    //estado para el tooltipText
    const [showTooltipVolver, setShowTooltipVolver] = useState(false);
    const tooltipTextVideo = "Ver video propiedad";
    const tooltipTextVolver = "Volver atrás";

    // Función para reemplazar puntos por saltos de línea
    function formatTextWithLineBreaks(text) {
        // Divide el texto por los puntos seguidos, eliminando espacios extra
        const sentences = text.split('.').filter(sentence => sentence.trim() !== '');
        return sentences.map((sentence, index) => (
            <div key={index} className="list-item">
                {sentence.trim()}.
            </div>
        ));
    }
    //ejecuto la fuccion para formatear el texto
    const formattedItems  = propiedad?.descripcion
        ? formatTextWithLineBreaks(propiedad.descripcion)
        : "";

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
        dispatch(getPropiedad(id));
        // Desplazarse hacia la parte superior de la página al cargar el componente
        window.scrollTo(0, 0);

        return () => { dispatch(resetProperty()); }
    }, [dispatch, id]);


    return(
        <div className='contGralDetalle'>
            <div className='cont-detail'>
                {/* Titulo prop y botones atrás y video*/}
                <div className='info-1'>
                    <div className='cont-titulo-detalle'>
                        <span className='detalle-titulo-prop'>{propiedad.tituloPublicacion}</span>
                        {/* dirección */}
                        <div className='cont-titulo-icono-direcc'>
                            <LocationOnIcon sx={{'marginLeft':'10px'}}/>
                            <p className='detalle-titulo-direccion'>
                                {propiedad.ubicacion?.direccionPublicacion}
                            </p>
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

                {/* carrusel y detalle prop */}
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

                    <div className='cont-detalle'>
                        <p className='titulo-detalle-prop'>Detalle Propiedad</p>
                        <div className='cont-p-col-1'>
                            <p className='p-col-1'>Tipo Operacio:</p>
                            <p className='p-col-1'>{ propiedad.operacion }</p>
                        </div>
                        <div className='cont-p-col-1'>
                            <p className='p-col-1'>Tipo de Prop:</p>
                            <p className='p-col-1'>{propiedad.tipoPropiedad}</p>
                        </div>
                        <div className='cont-p-col-1'>
                            <p className='p-col-1'>Precio:</p>
                            <p className='p-col-1'>{propiedad.moneda} {formatMoney(propiedad.precio)}</p>
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
                        <div className='cont-p-col-1'>
                            <p className='p-col-1'>Ambientes:</p>
                            <p className='p-col-1'>{propiedad.ambientes}</p>
                        </div>
                        <div className='cont-p-col-1'>
                            <p className='p-col-1'>Baños:</p>
                            <p className='p-col-1'>{propiedad.baños}</p>
                        </div>
                        <div className='cont-p-col-1 ultimo'>
                            <p className='p-col-1'>Cochera:</p>
                            <p className='p-col-1'>{propiedad.cantCocheras}</p>
                        </div>
                    </div>
                </div>

                {/* descrip prop */}
                <div className='cont-titulo-descripcion-form'>
                    <div className='cont-descrip'>
                        <p className='titulo-descrip-prop'>Descripción Propiedad</p>
                        {/* Renderizar HTML dentro de la descripción */}
                        <div className="description-list">
                            {formattedItems}
                        </div>
                    </div>

                    
                </div>
                
                {/* google map */}
                <div className='cont-map'>
                    <p className='p-titulo-mapa'>Ubicacion Propiedad</p>
                    <MapProp 
                        address={propiedad.ubicacion?.direccionReal + ' ' + propiedad.ubicacion?.ciudad + ', ' + propiedad.ubicacion?.provincia}
                    />
                </div>

                {/* Modal Video */}                
                {
                    contexto.isOpenModalVideo && <ModalVideo video={propiedad.video}/>
                }

                {/* btn whatsapp */}
                <BotonWhatsApp />
            </div>
        </div>
    )
}

export default DetalleProp;