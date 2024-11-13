import React, { useState } from 'react';
import { actual } from '../../urls';
import './estilos.css';


function FormularioProp() {

    //tipo de propiedad
    const tipoProps = [
        'Casa', 'Departamento', 'PH', 'Oficina',
        'Local', 'Cochera', 'Galpón', 
        'Terreno', 'Quinta', 'Campo',
    ];

    const [data, setData] = useState({
        tituloPublicacion: '',
        descripcion: '',
        tipoPropiedad: '',
        expesnsas: '',       
        cantPisos: 0,
        ambientes: 0,
        dormitorios: 0,
        baños: 0,
        supCubierta: 0,
        supSemiCub: 0,
        supDescubierta: 0,
        supTotal: 0,
        estado: '',
        antiguedad: 0,
        cantCocheras: 0,
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
    //estado ubicacion
    //direc real, direc publi, prov, ciudad, barrio
    const [ubicacion, setUbicacion] = useState({
        direccionPublicacion: '',
        direccionReal: '',
        barrio: '',
        ciudad: '',
        provincia: '',
    });
    //estado imgs
    const [imagenes, setImagenes] = useState([]);
    const [vistaPrevia, setVistaPrevia] = useState([]);//vista previa
    //estado video
    const [video, setVideos] = useState();  
    const [vistaPreviaVideo, setVistaPreviaVideo] = useState([]);//vista previa
    //servicios
    const [servicios, setServicios] = useState([]);
    const [errors, setErrors] = useState({});
    const [errorsU, setErrorsU] = useState({});
    //estado para vistas
    const [vista1, setVista1] = useState(true);  
    const [vista2, setVista2] = useState(false);
    const [vista3, setVista3] = useState(false);
    const [vista4, setVista4] = useState(false);
    

    // Validación para habilitar/deshabilitar el botón "Siguiente" en la vista 1
    const validaDatosVista1 = () => {
        return data.tituloPublicacion && data.descripcion && data.tipoPropiedad;
    };
    //valida vista 2
    const validaDatosVista2 = () => {
        return ubicacion.direccionPublicacion 
            && ubicacion.direccionReal
            && ubicacion.barrio 
            && ubicacion.ciudad
            && ubicacion.provincia; 
    };
    //valida vista 3
    const validaDatosVista3 = () => {
        if(
            data.tipoPropiedad === 'Terreno' ||
            data.tipoPropiedad === 'Cochera' ||
            data.tipoPropiedad === 'Local' ||
            data.tipoPropiedad === 'Quinta' ||
            data.tipoPropiedad === 'Campo' ||
            data.tipoPropiedad === 'Galpón'
        ){
            return true;
        }
        return data.ambientes
            && data.dormitorios
            && data.baños
            && data.supCubierta
            && data.supTotal
            && data.cantCocheras;
    };
    //valida vista 4
    const validaDatosVista4 = () => {
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
        setPrecioVenta(Number(e.target.value));
    };
    const handleOnChangePrecioAlq = (e) => {
        setPrecioAlq(Number(e.target.value));
    };
    const handleOnChangeImgs = (e) => {
        const filesArray = Array.from(e.target.files); //convierto e.target.files en un array
        setImagenes(filesArray);
        const files = Array.from(e.target.files);
        //para la vista previa
        const previews = files.map((file) => ({
            file,
            url: URL.createObjectURL(file),
        }));
        setVistaPrevia(previews);
    };
    const handleOnChangeVideos = (e) => {
        setVideos(e.target.files[0]);
        //para la vista previa
        const file = e.target.files[0];
        setVistaPreviaVideo(URL.createObjectURL(file));
    };
    const handleOnChangeServicios = (e) => {
        const {value, checked} = e.target;
        
        setServicios((prevServicios) => 
            checked ? [...prevServicios, value] : prevServicios.filter(s => s !== value)
        );
    };
    //btns vista 1 y actualizo operacion
    const onClickSgtVista1 = () => {
        setVista1(false);
        setVista2(true);

        //actualizo operacion
        if(opVenta){
            setOperacion([
                ...operacion, 
                {
                    tipoOperacion: opVenta,
                    moneda: monedaVenta,
                    precio: precioVenta,
                }
            ]);
        }
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
    //btns vista 3
    const onClickAtrasVista3 = () => {
        setVista1(false);
        setVista2(true);
        setVista3(false);
    };
    const onClickSgtVista3 = () => {
        setVista1(false);
        setVista2(false);
        setVista3(false);
        setVista4(true);
    };
    //btns vista 4
    const onClickAtrasVista4 = () => {
        setVista1(false);
        setVista2(false);
        setVista3(true);
        setVista4(false);
    };
    //btns crea
    const handleOnSubmit = async(e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('data', JSON.stringify({
            ...data,
            operacion,
            ubicacion,
            servicios,
            video,
        }));

    imagenes.forEach((imagen, index) => {
        formData.append('imagenes', imagen);
    });

        try {
            const response = await fetch(`${actual}/propiedades`, {
                method: 'POST',
                body: formData,
            });
            
            if(response.ok){
                alert('Propiedad creada con éxito');
                //limpio
                setData({
                    tituloPublicacion: '',
                    descripcion: '',
                    tipoPropiedad: '',
                    expesnsas: '',       
                    cantPisos: 0,
                    ambientes: 0,
                    dormitorios: 0,
                    baños: 0,
                    supCubierta: 0,
                    supSemiCub: 0,
                    supDescubierta: 0,
                    supTotal: 0,
                    estado: '',
                    antiguedad: 0,
                    cantCocheras: 0,
                });
                setOpVenta('');
                setOpAlquiler('');
                setMonedaVenta('U$D');
                setMonedaAlq('$');
                setPrecioVenta(0);
                setPrecioAlq(0);
                setOperacion([]);
                setUbicacion({
                    direccionPublicacion: '',
                    direccionReal: '',
                    barrio: '',
                    ciudad: '',
                    provincia: '',
                });
                setImagenes([]);
                setVistaPrevia([]);
                setVideos();
                setVistaPreviaVideo([]);
                setServicios([]);
                //quitar la seleccion de los checkbox
                const checkboxes = document.querySelectorAll('input[type="checkbox"]');
                checkboxes.forEach((checkbox) => {
                    checkbox.checked = false;
                });
                setVista1(true);
                setVista2(false);
                setVista3(false);
                setVista4(false);
            }else{
                alert('Error al crear la propiedad');
            }

        } catch (error) {
            console.log(error);
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
                            <select id='tipoPropiedad' onChange={(e) => { handleOnChangeData(e) }} className='input-tituloPublicacion'>
                                <option value=''>Seleccione una opción</option>
                                {
                                    tipoProps.map((tipo, index) => (
                                        <option key={index} value={tipo}>{tipo}</option>
                                    ))
                                }
                            </select>
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
                                        disabled={!validaDatosVista1()} // deshabilitado si no se completan todos los campos
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
                        {/* direccPubli y direccReal */}
                        <div className='cont-ubicacion'>
                            <div className='cont-ubicacion-direcc'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Dirección Publicación</label>
                                    <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p>
                                </div>
                                <input 
                                    type='text' 
                                    id='direccionPublicacion' 
                                    value={ubicacion.direccionPublicacion} 
                                    onChange={(e) => { handleOnChangeUbicacion(e) }}
                                    placeholder='Lavalle al 2500'
                                    className='input-tituloPublicacion' 
                                />
                            </div>
                            <div className='cont-ubicacion-barrio'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Dirección Real</label>
                                    <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p>
                                </div>
                                <input 
                                    type='text' 
                                    id='direccionReal' 
                                    value={ubicacion.direccionReal} 
                                    onChange={(e) => { handleOnChangeUbicacion(e) }}
                                    placeholder='Lavalle al 2570'
                                    className='input-tituloPublicacion' 
                                />
                            </div>
                        </div>                        
                        {/* barrio y ciudad */}
                        <div className='cont-ubicacion'>
                            <div className='cont-ubicacion-direcc'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Barrio</label>
                                    <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p>
                                </div>
                                <input 
                                    type='text' 
                                    id='barrio' 
                                    value={ubicacion.barrio} 
                                    onChange={(e) => { handleOnChangeUbicacion(e) }}
                                    placeholder='Centro'
                                    className='input-tituloPublicacion' 
                                />
                            </div>
                            <div className='cont-ubicacion-barrio'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Ciudad</label>
                                    <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p>
                                </div>
                                <input 
                                    type='text' 
                                    id='ciudad' 
                                    value={ubicacion.ciudad} 
                                    onChange={(e) => { handleOnChangeUbicacion(e) }} 
                                    placeholder='Mar del Plata'
                                    className='input-tituloPublicacion' 
                                />
                            </div>
                        </div>
                        {/* provincia */}
                        <div className='cont-ubicacion'>
                            <label className='label-crea-prop'>Provincia</label>
                            <input
                                type='text'
                                id='provincia'
                                value={ubicacion.provincia}
                                onChange={(e) => { handleOnChangeUbicacion(e) }}
                                placeholder='Buenos Aires'
                                className='input-tituloPublicacion'
                            />
                        </div>
                        {/* btns Sgt-Atras */}
                        <div className='cont-campReq-botones'>
                            <div className='cont-campo-requerido'>
                                <p>Campo requerido</p>
                                <p style={{ 'color': 'red', 'marginLeft': '3px' }}>*</p>
                            </div>
                            <div className='cont-botones-sgt-atras-vista-2'>
                                <button 
                                    type='button' 
                                    className='btn-atras-vista-2' 
                                    onClick={()=>onClickAtrasVista2()}
                                >
                                    Atrás
                                </button>
                                <button 
                                    type='button' 
                                    className='btn-sgt-vista-2' 
                                    onClick={()=>onClickSgtVista2()}
                                    disabled={!validaDatosVista2()}
                                >
                                    Siguiente
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* vista-3 */}
                <div className={vista3 ? 'vista-3' : 'notVista3'} id='vista-3'>
                    <div className='cont-data-vista-3'>
                        {/* amb, dorm, baño,  */}
                        <div className='cont-ambts'>
                            <div className='cont-amb'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Ambientes</label>
                                    <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p>
                                </div>
                                <input 
                                    type='number' 
                                    id='ambientes' 
                                    value={data.ambientes} 
                                    onChange={(e) => { handleOnChangeData(e) }} 
                                    className='input-amb' 
                                />
                            </div>
                            <div className='cont-amb'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Dormitorios</label>
                                    <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p>
                                </div>
                                <input 
                                    type='number' 
                                    id='dormitorios' 
                                    value={data.dormitorios} 
                                    onChange={(e) => { handleOnChangeData(e) }} 
                                    className='input-amb' 
                                />
                            </div>
                            <div className='cont-amb'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Baños</label>
                                    <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p>
                                </div>
                                <input 
                                    type='number' 
                                    id='baños' 
                                    value={data.baños} 
                                    onChange={(e) => { handleOnChangeData(e) }} 
                                    className='input-amb' 
                                />
                            </div>
                            <div className='cont-amb'>
                                <label className='label-crea-prop'>Cant. pisos</label>
                                <input 
                                    type='number' 
                                    id='cantPisos' 
                                    value={data.cantPisos} 
                                    onChange={(e) => { handleOnChangeData(e) }} 
                                    className='input-amb' 
                                />
                            </div>
                        </div>
                        {/* superficies*/}
                        <div className='cont-ambts'>
                            <div className='cont-amb'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Sup cubierta</label>
                                    <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p>
                                </div>
                                <input type='number' id='supCubierta' value={data.supCubierta} onChange={(e) => { handleOnChangeData(e) }} className='input-tituloPublicacion' />
                            </div>
                            <div className='cont-amb'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Sup semicub</label>
                                </div>
                                <input type='number' id='supSemiCub' value={data.supSemiCub} onChange={(e) => { handleOnChangeData(e) }} className='input-tituloPublicacion' />
                            </div>
                            <div className='cont-amb'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Sup decubierta</label>
                                </div>
                                <input type='number' id='supDescubierta' value={data.supDescubierta} onChange={(e) => { handleOnChangeData(e) }} className='input-tituloPublicacion' />
                            </div>
                            <div className='cont-amb'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Sup Total</label>
                                    <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p>
                                </div>
                                <input type='number' id='supTotal' value={data.supTotal} onChange={(e) => { handleOnChangeData(e) }} className='input-tituloPublicacion' />
                            </div>
                        </div>
                        {/* estado, antiguedad, cant cocheras */}
                        <div className='cont-ambts'>
                            <div className='cont-amb'>
                                <label className='label-crea-prop'>Estado</label>
                                <input type='text' id='estado' value={data.estado} onChange={(e) => { handleOnChangeData(e) }} className='input-tituloPublicacion' />
                            </div>
                            <div className='cont-amb'>
                                <label className='label-crea-prop'>Antiguedad</label>
                                <input type='number' id='antiguedad' value={data.antiguedad} onChange={(e) => { handleOnChangeData(e) }} className='input-tituloPublicacion' />
                            </div>
                            <div className='cont-amb'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Cant cocheras</label>
                                    <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p>
                                </div>
                                <input type='number' id='cantCocheras' value={data.cantCocheras} onChange={(e) => { handleOnChangeData(e) }} className='input-tituloPublicacion' />
                            </div>
                        </div>
                        {/* btns Sgt-Atras */}
                        <div className='cont-campReq-botones'>
                            <div className='cont-campo-requerido'>
                                <p>Campo requerido</p>
                                <p style={{ 'color': 'red', 'marginLeft': '3px' }}>*</p>
                            </div>
                            <div className='cont-botones-sgt-atras-vista-2'>
                                <button 
                                    type='button' 
                                    className='btn-atras-vista-2' 
                                    onClick={()=>onClickAtrasVista3()}>Atrás</button>
                                <button 
                                    type='button' 
                                    className='btn-sgt-vista-2' 
                                    onClick={()=>onClickSgtVista3()}
                                    disabled={!validaDatosVista3()}
                                >
                                    Siguiente
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* vista-4*/}
                <div className={vista4 ? 'vista-4' : 'notVista4'} id='vista-4'>
                    <div className='cont-data-vista-2'>
                        {/* servicios */}
                        <div className='cont-servicios'>
                            <p className='titulo-servicio'>Servicios</p>
                            <div className='cont-amb'>
                                <label className='label-crea-prop'>Luz eléctrica</label>
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
                                    <div key={index} className='cont-img-miniatura'>
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
                        {/* muestra video */}
                        <div className="video-preview">
                            {
                                vistaPreviaVideo && (
                                    <video src={vistaPreviaVideo} /* controls */ className='video-miniatura'></video>
                                )
                            }
                            
                        </div>

                        {/* btns Sgt-Atras */}
                        <div className='cont-campReq-botones'>
                            <div className='cont-campo-requerido'>
                                <p>Campo requerido</p>
                                <p style={{ 'color': 'red', 'marginLeft': '3px' }}>*</p>
                            </div>
                            <div className='cont-botones-sgt-atras-vista-2'>
                                <button 
                                    type='button' 
                                    className='btn-atras-vista-2' 
                                    onClick={()=>onClickAtrasVista4()}
                                >
                                    Atrás
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* btns crea */}
                <div 
                    className={
                        validaDatosVista1() && 
                        validaDatosVista2() && 
                        validaDatosVista3() &&
                        validaDatosVista4()
                        ? 'cont-botones-crea-prop' 
                        : 'cont-botones-crea-prop-Disable'
                    }
                >
                    <button type='submit' className='btn-crea'>Crear propiedad</button>
                </div>
            </form>
        </div>
    )
}

export default FormularioProp;

/*



*/