import React, { useState } from 'react';
import './estilos.css';

function FormularioProp() {

    const [data, setData] = useState({
        tituloPublicacion: '',
        descripcion: '',
        tipoPropiedad: '',
        expesnsas: '',       
        cantPisos: '',
        ambientes: '',
        dormitorios: '',
        baños: '',
        supCubierta: '',
        supSemiCub: '',
        supDescubierta: '',
        supTotal: '',
        unidadMedida: '',
        estado: '',
        antiguedad: '',
        cantCocheras: '',
    });
    //estado para vistas
    const [vista1, setVista1] = useState(true);  
    const [vista2, setVista2] = useState(false);
    const [vista3, setVista3] = useState(false);
    const [ubicacion, setUbicacion] = useState({
        direccion: '',
        barrio: ''
    });
    //estado tipos de operacion
    const [opVenta, setOpVenta] = useState(''); 
    const [opAlquiler, setOpAlquiler] = useState('');
    //estado moneda
    const [monedaVenta, setMonedaVenta] = useState('U$D');
    const [monedaAlq, setMonedaAlq] = useState('$');
    //estado precios
    const [precioVenta, setPrecioVenta] = useState();
    const [precioAlq, setPrecioAlq] = useState(); 
    //estado operacio
    const [operacion, setOperacion] = useState([]);
    const [imagenes, setImagenes] = useState([]); 
    const [vistaPrevia, setVistaPrevia] = useState([]);//vista previa
    const [video, setVideos] = useState();  
    const [vistaPreviaVideo, setVistaPreviaVideo] = useState([]);//vista previa
    const [servicios, setServicios] = useState([]);
    const [errors, setErrors] = useState({});
    const [errorsU, setErrorsU] = useState({});
    //const [errorsOp, setErrorsOp] = useState({});
    //const [errorsI, setErrorsI] = useState({});
    //const [errorsV, setErrorsV] = useState({});
    //const [errorsS, setErrorsS] = useState({});

    // Validación para habilitar/deshabilitar el botón "Siguiente" en la vista 1
    const validaDatosVista1 = () => {
        return data.tituloPublicacion && data.descripcion && data.tipoPropiedad;
    };
    //valida vista 2
    const validaDatosVista2 = () => {
        return ubicacion.direccion && ubicacion.barrio && data.ambientes 
            && data.dormitorios && data.baños && data.supCubierta
            && data.supSemiCub && data.supDescubierta && data.cantCocheras;
    };
    //valida vista 3
    const validaDatosVista3 = () => {
        if(imagenes.length){
            return true
        }
        return false;
    };
    const handleOnChangeData = (e) => {
        const { id, value } = e.target;
        setData({...data, [id]: value});

        //quito msj de error
        if(value){
            const errores = {...errors};
            //elimino
            delete errores[id];
            //actualizo
            setErrors(errores);
        }
    };
    const handleOnChangeUbicacion = (e) => {
        const { id, value } = e.target;
        setUbicacion({...ubicacion, [id]: value});

        if(value){
            const erroresU = {...errorsU};
            delete erroresU[id];
            setErrorsU(erroresU);
        }
    };
    const handleOnChangeOpVenta = (e) => {
        const { value, checked } = e.target;
        if(checked){
            setOpVenta(value);
            setOperacion([
                ...operacion, 
                {
                    tipoOperacion: value,
                    moneda: monedaVenta,
                    precio: precioVenta,
                }
            ]);
        }else{
            setOpVenta('');
            setPrecioVenta(0);
        }
    };
    const handleOnChangeOpAlquiler = (e) => {
        const { value, checked } = e.target;
        if(checked){
            setOpAlquiler(value);
            setOperacion([
                ...operacion, 
                {
                    tipoOperacion: value,
                    moneda: monedaAlq,
                    precio: precioAlq,
                }
            ]);
        }else{
            setOpAlquiler('');
            setPrecioAlq(0);
        }
    };
    const handleOnChangeMonedaVenta = (e) => {
        setMonedaVenta(e.target.value);
    };
    const handleOnChangeMonedaAlq = (e) => {
        setMonedaAlq(e.target.value);
    };
    const handleOnChangePrecioVenta = (e) => {
        setPrecioVenta(e.target.value);
    };
    const handleOnChangePrecioAlq = (e) => {
        setPrecioAlq(e.target.value);
    };
    const handleOnChangeImgs = (e) => {
        setImagenes(e.target.files);
        const files = Array.from(e.target.files);
        const previews = files.map((file) => ({
            file,
            url: URL.createObjectURL(file),
        }));
        setVistaPrevia(previews);
    };
    const handleOnChangeVideos = (e) => {
        setVideos(e.target.files[0]);
    };

    const handleOnChangeServicios = (e) => {
        const {value, checked} = e.target;
        
        setServicios((prevServicios) => 
            checked ? [...prevServicios, value] : prevServicios.filter(s => s !== value)
        );
    };
    //btns vista 1
    const onClickSgtVista1 = () => {
        setVista1(false);
        setVista2(true);
    };
    //btns vista 2
    const onClickAtrasVista2 = () => {
        setVista1(true);
        setVista2(false);
    };
    const onClickSgtVista2 = () => {
        setVista1(false);
        setVista2(false);
        setVista3(true);
    };
    //btns vista 
    const onClickAtrasVista3 = () => {
        setVista1(false);
        setVista2(true);
        setVista3(false);
    };
    const handleOnSubmit = (e) => {
        e.preventDefault();

        if(validaDatosVista1 && validaDatosVista2 && validaDatosVista3){
            //creo obj para enviar al Back
            const newObj = {
                tituloPublicacion: data.tituloPublicacion,
                descripcion: data.descripcion,
                tipoPropiedad: data.tipoPropiedad,
                /* operacion,
                expesnsas,
                ubicacion,
                cantPisos,
                ambientes,
                dormitorios,
                baños,
                imagenes,
                video,
                supCubierta,
                supSemiCub,
                supDescubierta,
                supTotal,
                unidadMedida,
                servicios,
                estado,
                antiguedad,
                cantCocheras, */
            }
        }
    };


    return (
        <div className='cont-crea-prop'>
            <h1>Creación de una Propiedad</h1>
            <form onSubmit={handleOnSubmit} className='formulario-crea-prop'>
                {/* vista-1 */}
                <div className={vista1 ? 'vista-1' : 'notVista1'} id='vista-1'>
                    <div className='cont-data-vista-1'>
                        {/* titulo prop */}
                        <div className='cont-dato'>
                            <div style={{'display':'flex', 'justifyContent':'center', 'alignItems':'center'}}>
                                <label className='label-crea-prop'>Titulo publicación</label>
                                <p style={{ 'margin':'0', 'color':'red', 'fontSize':'23px'}}>*</p>
                            </div>
                            <input type='text' id='tituloPublicacion' value={data.tituloPublicacion} onChange={(e) => { handleOnChangeData(e) }} className='input-tituloPublicacion' />
                        </div>
                        {/* tipo prop */}
                        <div className='cont-dato'>
                            <div style={{'display':'flex', 'justifyContent':'center', 'alignItems':'center'}}>
                                <label className='label-crea-prop'>Tipo propiedad</label>
                                <p style={{ 'margin':'0', 'color':'red', 'fontSize':'23px'}}>*</p>
                            </div>
                            <input type='text' id='tipoPropiedad' value={data.tipoPropiedad} onChange={(e) => { handleOnChangeData(e) }} className='input-tituloPublicacion' />
                        </div>
                        {/* operacion */}
                        <div className='cont-dato'>
                            <div style={{'display':'flex', 'justifyContent':'center', 'alignItems':'center'}}>
                                <label className='label-crea-prop'>Tipo operación</label>
                                <p style={{ 'margin':'0', 'color':'red', 'fontSize':'23px'}}>*</p>
                            </div>
                            <div className='cont-operaciones'>
                                {/* venta */}
                                <div className='cont-opVenta-y-precio'>
                                    <div className='cont-venta'>
                                        <label className='label-venta'>Venta</label>
                                        <input
                                            type='checkbox'
                                            id='venta'
                                            value={"Venta"}
                                            onChange={(e) => { handleOnChangeOpVenta(e) }}
                                            className='input-check-venta'
                                        />
                                    </div>
                                    <div className='cont-precio-venta'>
                                        <label className='label-precio-venta'>P. Venta: </label>
                                        <input 
                                            type='text' 
                                            id='monedaVenta' 
                                            value={monedaVenta} 
                                            onChange={(e) => { handleOnChangeMonedaVenta(e) }} 
                                            className='input-moneda-venta' 
                                            disabled={!opVenta}
                                        />
                                        <input 
                                            type='number' 
                                            id='precioVenta' 
                                            value={precioVenta} 
                                            onChange={(e) => { handleOnChangePrecioVenta(e) }} 
                                            className='input-precio-venta' 
                                            disabled={!opVenta}
                                        />
                                    </div>                                    
                                </div>
                                {/* Alq */}
                                <div className='cont-opAlq-y-precio'>
                                    <div className='cont-alquiler'>
                                        <label className='label-alq'>Alquiler</label>
                                        <input 
                                            type='checkbox' 
                                            id='alquiler' 
                                            value={"Alquiler"} 
                                            onChange={(e) => { handleOnChangeOpAlquiler(e) }} 
                                            className='input-check-venta' 
                                        />
                                    </div>                                    
                                    <div className='cont-precio-alq'>
                                        <label className='label-precio-venta'>P. Alquiler: </label>
                                        <input 
                                            type='text' 
                                            id='monedaAlq' 
                                            value={monedaAlq} 
                                            onChange={(e) => { handleOnChangeMonedaAlq(e) }} 
                                            className='input-moneda-alq' 
                                            disabled={!opVenta}
                                        />
                                        <input 
                                            type='number' 
                                            id='precioAlq' 
                                            value={precioAlq} 
                                            onChange={(e) => { handleOnChangePrecioAlq(e) }} 
                                            className='input-precio-venta'
                                            disabled={!opAlquiler}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='cont-dato'>
                            <div style={{'display':'flex', 'justifyContent':'center', 'alignItems':'center'}}>
                                <label className='label-crea-prop'>Descripción</label>
                                <p style={{ 'margin':'0', 'color':'red', 'fontSize':'23px'}}>*</p>
                            </div>
                            <textarea id='descripcion' value={data.descripcion} onChange={(e) => { handleOnChangeData(e) }}  rows="8" className='input-descripcion-prop' />
                        </div>
                        {/* btns Sgt-Atras */}
                        <div className='cont-campReq-botones'>                            
                                <div className='cont-campo-requerido'>
                                    <p>Campo requerido</p>
                                    <p style={{'color':'red', 'marginLeft':'3px'}}>*</p>
                                </div>
                                <div className='cont-botones-sgt-atras'>
                                    <button
                                        type='button' //sino se recarga la pag pensando q es el submit
                                        className='btn-sgt-vista1'
                                        onClick={() => onClickSgtVista1()}
                                    //disabled={!isVista1Complete()} // deshabilitado si no se completan todos los campos
                                    >
                                        Siguiente
                                    </button>
                                </div>                            
                        </div>                
                    </div>
                </div>
                {/* vista-2 */}
                <div className={vista2 ? 'vista-2' : 'notVista2'} id='vista-2'>
                    <div className='cont-data-vista-2'>
                        <div className='cont-ubicacion'>
                            <div className='cont-ubicacion-direcc'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Dirección</label>
                                    <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p>
                                </div>
                                <input type='text' id='direccion' value={ubicacion.direccion} onChange={(e) => { handleOnChangeUbicacion(e) }} className='input-tituloPublicacion' />
                            </div>
                            <div className='cont-ubicacion-barrio'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Barrio</label>
                                    <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p>
                                </div>
                                <input type='text' id='barrio' value={ubicacion.barrio} onChange={(e) => { handleOnChangeUbicacion(e) }} className='input-tituloPublicacion' />
                            </div>
                        </div>

                        <div className='cont-ubicacion'>
                            <div className='cont-amb'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Ambientes</label>
                                    <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p>
                                </div>
                                <input type='text' id='ambientes' value={data.ambientes} onChange={(e) => { handleOnChangeData(e) }} className='input-tituloPublicacion' />
                            </div>
                            <div className='cont-dormi'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Dormitorios</label>
                                    <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p>
                                </div>
                                <input type='text' id='dormitorios' value={data.dormitorios} onChange={(e) => { handleOnChangeData(e) }} className='input-tituloPublicacion' />
                            </div>
                            <div className='cont-baños'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Baños</label>
                                    <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p>
                                </div>
                                <input type='text' id='baños' value={data.baños} onChange={(e) => { handleOnChangeData(e) }} className='input-tituloPublicacion' />
                            </div>
                            <div className='cont-pisos'>
                                <label className='label-crea-prop'>Cant. pisos</label>
                                <input type='text' id='pisos' value={data.cantPisos} onChange={(e) => { handleOnChangeData(e) }} className='input-tituloPublicacion' />
                            </div>
                        </div>

                        <div className='cont-ubicacion'>
                            <div className='cont-amb'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Sup cubierta</label>
                                    <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p>
                                </div>
                                <input type='text' id='supCubierta' value={data.supCubierta} onChange={(e) => { handleOnChangeData(e) }} className='input-tituloPublicacion' />
                            </div>
                            <div className='cont-dormi'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Sup semicub</label>
                                    <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p>
                                </div>
                                <input type='text' id='supSemicubierta' value={data.supSemiCub} onChange={(e) => { handleOnChangeData(e) }} className='input-tituloPublicacion' />
                            </div>
                            <div className='cont-baños'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Sup decubierta</label>
                                    <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p>
                                </div>
                                <input type='text' id='supDescubierta' value={data.supDescubierta} onChange={(e) => { handleOnChangeData(e) }} className='input-tituloPublicacion' />
                            </div>
                            <div className='cont-pisos'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Sup Total</label>
                                    <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p>
                                </div>
                                <input type='text' id='pisos' value={data.cantPisos} onChange={(e) => { handleOnChangeData(e) }} className='input-tituloPublicacion' />
                            </div>
                        </div>

                        <div className='cont-ubicacion'>
                            <div className='cont-amb'>
                                <label className='label-crea-prop'>Estado</label>
                                <input type='text' id='estado' value={data.estado} onChange={(e) => { handleOnChangeData(e) }} className='input-tituloPublicacion' />
                            </div>
                            <div className='cont-dormi'>
                                <label className='label-crea-prop'>Antiguedad</label>
                                <input type='text' id='antiguedad' value={data.antiguedad} onChange={(e) => { handleOnChangeData(e) }} className='input-tituloPublicacion' />
                            </div>
                            <div className='cont-baños'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Cant cocheras</label>
                                    <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p>
                                </div>
                                <input type='text' id='cantCocheras' value={data.cantCocheras} onChange={(e) => { handleOnChangeData(e) }} className='input-tituloPublicacion' />
                            </div>
                        </div>
                        {/* btns Sgt-Atras */}
                        <div className='cont-campReq-botones'>
                            <div className='cont-campo-requerido'>
                                <p>Campo requerido</p>
                                <p style={{ 'color': 'red', 'marginLeft': '3px' }}>*</p>
                            </div>
                            <div className='cont-botones-sgt-atras-vista-2'>
                                <button type='button' className='btn-atras-vista-2' onClick={()=>onClickAtrasVista2()}>Atrás</button>
                                <button type='button' className='btn-sgt-vista-2' onClick={()=>onClickSgtVista2()}>Siguiente</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* vista-3*/}
                <div className={vista3 ? 'vista-3' : 'notVista3'} id='vista-3'>
                    <div className='cont-data-vista-2'>
                        <div className='cont-servicios'>
                            <p className='titulo-servicio'>Servicios</p>
                            <div className='cont-amb'>
                                <label className='label-crea-prop'>Luz eléctric</label>
                                <input type='checkbox' id='luz' value={"luz"}  onChange={(e) => { handleOnChangeServicios(e) }} className='check-luz' />
                            </div>
                            <div className='cont-amb'>
                                <label className='label-crea-prop'>Gas</label>
                                <input type='checkbox' id='gas' value={"gas"}  onChange={(e) => { handleOnChangeServicios(e) }} className='check-luz' />
                            </div>
                            <div className='cont-amb'>
                                <label className='label-crea-prop'>Cloaca</label>
                                <input type='checkbox' id='luz' value={"cloaca"}  onChange={(e) => { handleOnChangeServicios(e) }} className='check-luz' />
                            </div>
                        </div>

                        {/* <div className="selected-services">
                            <h3>Servicios Seleccionados:</h3>
                            <ul>
                                {servicios.map((servicio, index) => (
                                    <li key={index}>{servicio}</li>
                                ))}
                            </ul>
                        </div> */}

                        {/* carga de img */}
                        <div className="img-cloudinary">
                            <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                <label className='label-crea-prop'>Imágenes</label>
                                <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p>
                            </div>
                            <input type="file" accept="image/*" multiple onChange={(e)=> {handleOnChangeImgs(e)}}/>
                        </div>
                        {/* muestra ims miniatura */}
                        <div className="image-preview">
                            {
                                vistaPrevia.map((img, index) => (
                                    <div key={index} >
                                        <img src={img.url} alt={`preview-${index}`} className='img-miniatura'/>
                                    </div>
                                ))
                            }
                        </div>

                        {/* carga video */}
                        <div className="video-cloudinary">
                            <label className='label-crea-prop'>Video</label>
                            <input type="file" accept="video/*" onChange={(e)=>{handleOnChangeVideos(e)}} />
                        </div>

                        {/* btns Sgt-Atras */}
                        <div className='cont-campReq-botones'>
                            <div className='cont-campo-requerido'>
                                <p>Campo requerido</p>
                                <p style={{ 'color': 'red', 'marginLeft': '3px' }}>*</p>
                            </div>
                            <div className='cont-botones-sgt-atras-vista-2'>
                                <button type='button' className='btn-atras-vista-2' onClick={()=>onClickAtrasVista3()}>Atrás</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* btns crea */}
                <div className={vista1 && vista2 ? 'cont-botones-crea-prop' : 'cont-botones-crea-prop-Disable'}>
                    <button type='onSubmit' className='btn-crea'>Crear propiedad</button>
                </div>
            </form>
        </div>
    )
}

export default FormularioProp;