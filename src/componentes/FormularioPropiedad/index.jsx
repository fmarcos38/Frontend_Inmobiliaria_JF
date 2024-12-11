import React, { useState } from 'react';
import './estilos.css';


function FormularioProp({propiedad, handleOnSubmit, op}) {

    //tipo de propiedad
    const tipoProps = [
        'Casa', 'Departamento', 'PH', 'Oficina',
        'Local', 'Cochera', 'Galpón', 
        'Terreno', 'Quinta', 'Campo',
    ];
    const [tituloPublicacion, setTituloPublicacion] = useState(propiedad?.tituloPublicacion || ''); 
    const [descripcion, setDescripcion] = useState(propiedad?.descripcion || '');
    const [tipoPropiedad, setTipoPropiedad] = useState(propiedad?.tipoPropiedad || '');
    const [expesnsas, setExpensas] = useState(propiedad?.expesnsas || null);
    const [cantPisos, setCantPisos] = useState(propiedad?.cantPisos || null);
    const [ambientes, setAmbientes] = useState(propiedad?.ambientes || null);
    const [dormitorios, setDormitorios] = useState(propiedad?.dormitorios || null);
    const [baños, setBaños] = useState(propiedad?.baños || null);
    const [supCubierta, setSupCubierta] = useState(propiedad?.supCubierta || null);
    const [supSemiCub, setSupSemiCub] = useState(propiedad?.supSemiCub || null);
    const [supDescubierta, setSupDescubierta] = useState(propiedad?.supDescubierta || null);
    const [supTotal, setSupTotal] = useState(propiedad?.supTotal || null);
    const [estado, setEstado] = useState(propiedad?.estado || '');
    const [antiguedad, setAntiguedad] = useState(propiedad?.antiguedad || null);
    const [cantCocheras, setCantCocheras] = useState(propiedad?.cantCocheras || null); 
    //estado objeto tipo opeeracion
    const [opVenta, setOpVenta] = useState(propiedad?.venta || null);
    const [opAlquiler, setOpAlquiler] = useState(propiedad?.alquiler || null);
    //estado moneda
    const [monedaVenta, setMonedaVenta] = useState('U$D');
    const [monedaAlq, setMonedaAlq] = useState('$');
    //estado precios
    const [precioVenta, setPrecioVenta] = useState(propiedad?.venta?.precio || null);
    const [precioAlq, setPrecioAlq] = useState(propiedad?.alquiler?.precio || null); 
    //estados para ubicacion
    const [direccionPublicacion, setDireccionPublicacion] = useState(propiedad?.ubicacion?.direccionPublicacion || '');
    const [direccionReal, setDireccionReal] = useState(propiedad?.ubicacion?.direccionReal || '');
    const [barrio, setBarrio] = useState(propiedad?.ubicacion?.barrio || '');
    const [ciudad, setCiudad] = useState(propiedad?.ubicacion?.ciudad || '');
    const [provincia, setProvincia] = useState(propiedad?.ubicacion?.provincia || ''); 
    //estado imgs
    const [imagenes, setImagenes] = useState(propiedad?.imagenes || []);  console.log("imagenes", imagenes);
    const [vistaPrevia, setVistaPrevia] = useState(propiedad?.imagenes || []);//vista previa
    //estado video
    const [video, setVideos] = useState(propiedad?.video || []);  
    const [vistaPreviaVideo, setVistaPreviaVideo] = useState(propiedad?.video || []);//vista previa
    //servicios
    const [servicios, setServicios] = useState([]);
    //estado para errores
    const [errors, setErrors] = useState({});
    const [errorsU, setErrorsU] = useState({});
    //estado para vistas
    const [vista1, setVista1] = useState(true);  
    const [vista2, setVista2] = useState(false);
    const [vista3, setVista3] = useState(false);
    const [vista4, setVista4] = useState(false);
    
    const handleOnChangeTituloPublicacion = (e) => {
        setTituloPublicacion(e.target.value);
    };
    const handleOnChangeDescripcion = (e) => {
        setDescripcion(e.target.value);
    };
    const handleOnChangeTipoPropiedad = (e) => {
        setTipoPropiedad(e.target.value);
    };
    const handleOnChangeExpensas = (e) => {
        const { value } = e.target;
        setExpensas(value === '' ? null : Number(value));
    };
    const handleOnChangeCantPisos = (e) => {
        const { value } = e.target;
        setCantPisos(value === '' ? null : Number(value));
    };
    const handleOnChangeAmbientes = (e) => {
        const { value } = e.target;
        setAmbientes(value === '' ? null : Number(value));
    };
    const handleOnChangeDormitorios = (e) => {
        const { value } = e.target;
        setDormitorios(value === '' ? null : Number(value));
    };
    const handleOnChangeBaños = (e) => {
        const { value } = e.target;
        setBaños(value === '' ? null : Number(value));
    };
    const handleOnChangeSupCubierta = (e) => {
        const { value } = e.target;
        setSupCubierta(value === '' ? null : Number(value));
    };
    const handleOnChangeSupSemiCub = (e) => {
        const { value } = e.target;
        setSupSemiCub(value === '' ? null : Number(value));
    };
    const handleOnChangeSupDescubierta = (e) => {
        const { value } = e.target;
        setSupDescubierta(value === '' ? null : Number(value));
    };
    const handleOnChangeSupTotal = (e) => {
        const { value } = e.target;
        setSupTotal(value === '' ? null : Number(value));
    };
    const handleOnChangeEstado = (e) => {
        setEstado(e.target.value);
    };
    const handleOnChangeAntiguedad = (e) => {
        const { value } = e.target;
        setAntiguedad(value === '' ? null : Number(value));
    };
    const handleOnChangeCantCocheras = (e) => {
        const { value } = e.target;
        setCantCocheras(value === '' ? null : Number(value));
    };
    const handleOnChangeDireccionPublicacion = (e) => {
        setDireccionPublicacion(e.target.value);
    };
    const handleOnChangeDireccionReal = (e) => {
        setDireccionReal(e.target.value);
    };
    const handleOnChangeBarrio = (e) => {
        setBarrio(e.target.value);
    };
    const handleOnChangeCiudad = (e) => {
        setCiudad(e.target.value);
    };
    const handleOnChangeProvincia = (e) => {
        setProvincia(e.target.value);
    };
    const handleOnChangeOpVenta = (e) => {
        const { checked } = e.target;
        if(checked){
            setOpVenta({
                moneda: monedaVenta,
                precio: precioVenta,
            });
        }else{
            setOpVenta(null);
            setPrecioVenta(null);
        }
    };
    const handleOnChangeOpAlquiler = (e) => {
        const { checked } = e.target;
        if(checked){
            setOpAlquiler({
                moneda: monedaAlq,
                precio: precioAlq,
            });
        }else{
            setOpAlquiler(null);
            setPrecioAlq(null);
        }
    };
    const handleOnChangeMonedaVenta = (e) => {
        setMonedaVenta(e.target.value);
    };
    const handleOnChangeMonedaAlq = (e) => {
        setMonedaAlq(e.target.value);
    };
    const handleOnChangePrecioVenta = (e) => {
        const value = e.target.value;
        setPrecioVenta(value === "" ? null : Number(value));
    };
    const handleOnChangePrecioAlq = (e) => {
        const value = e.target.value;
        setPrecioAlq(value === "" ? null : Number(e.target.value));
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

    //funcion valida errores de los inputs
    const handleOnBlur = (e) => {
        const { id, value } = e.target;
        if(!value){
            setErrors({...errors, [id]: 'Campo requerido'});
        }else{
            setErrors({...errors, [id]: ''});
        }
    };
    // Validación para habilitar/deshabilitar el botón "Siguiente" en la vista 1
    const validaDatosVista1 = () => {
        return tituloPublicacion && descripcion && tipoPropiedad;
    };
    //valida vista 2
    const validaDatosVista2 = () => {
        return direccionPublicacion 
            && direccionReal
            && barrio 
            && ciudad
            && provincia; 
    };
    //valida vista 3
    const validaDatosVista3 = () => {
        if(
            tipoPropiedad === 'Terreno' ||
            tipoPropiedad === 'Cochera' ||
            tipoPropiedad === 'Local' ||
            tipoPropiedad === 'Quinta' ||
            tipoPropiedad === 'Campo' ||
            tipoPropiedad === 'Galpón'
        ){
            return true;
        }
        return ambientes
            && dormitorios
            && baños
            && supCubierta
            && supTotal
            && cantCocheras;
    };
    //valida vista 4
    const validaDatosVista4 = () => {
        if(imagenes.length){
            return true
        }
        return false;
    };

    //btns vista 1
    const onClickSgtVista1 = () => {
        setVista1(false);
        setVista2(true);

        //actualizo operacion
        /* if(opVenta){
            setOperacion([
                ...operacion, 
                {
                    tipoOperacion: opVenta,
                    moneda: monedaVenta,
                    precio: precioVenta,
                }
            ]);
        } */
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
    //elimina img de vista previa
    const handleOnClickEliminaImg = (index) => {
        setImagenes((prevImgs) => {
            const imgs = [...prevImgs];
            imgs.splice(index, 1);
            return imgs;
        });
        setVistaPrevia((prevPreviews) => {
            const previews = [...prevPreviews];
            previews.splice(index, 1);
            return previews;
        });
    };
    //submit
    const OnSubmit = (e) => {
        e.preventDefault();
        //valido
        if(!validaDatosVista1()){
            setErrors({...errors, tituloPublicacion: 'Campo requerido'});
        }
        if(!validaDatosVista2()){
            setErrorsU({...errorsU, direccionPublicacion: 'Campo requerido'});
        }
        if(!validaDatosVista3()){
            setErrors({...errors, ambientes: 'Campo requerido'});
        }
        if(!validaDatosVista4()){
            alert('Debe cargar al menos una imagen');
        }
        //data
        // Construcción del objeto data
        const data = {
            tituloPublicacion,
            descripcion,
            tipoPropiedad,
            expesnsas,
            cantPisos,
            ambientes,
            dormitorios,
            baños,
            supCubierta,
            supSemiCub,
            supDescubierta,
            supTotal,
            estado,
            antiguedad,
            cantCocheras,
            venta: opVenta,
            alquiler: opAlquiler,
            ubicacion: {
                direccionPublicacion,
                direccionReal,
                barrio,
                ciudad,
                provincia,
            },
            imagenes,
            video,
            servicios,
        };
        //envio
        handleOnSubmit(data);
    }


    return (
        <div className='cont-crea-prop'>
            <h1 style={{margin:'0'}}>
            {
                op === 'creacion' ? "Crea tu propiedad" : "Edita tu propiedad"
            }
            </h1>
            <form onSubmit={OnSubmit} className='formulario-crea-prop'>
                {/* vista-1 */}
                <div className={vista1 ? 'vista-1' : 'notVista1'} id='vista-1'>
                    <div className='cont-data-vista-1'>
                        {/* titulo prop */}
                        <div className='cont-dato'>
                            <div style={{'display':'flex', 'justifyContent':'center', 'alignItems':'center'}}>
                                <label className='label-crea-prop'>Titulo publicación</label>
                                <p style={{ 'margin':'0', 'color':'red', 'fontSize':'23px'}}>*</p>
                            </div>
                            <input 
                                type='text' 
                                id='tituloPublicacion' 
                                value={tituloPublicacion} 
                                onChange={(e) => { handleOnChangeTituloPublicacion(e) }} 
                                onBlur={handleOnBlur} 
                                className={`input-tituloPublicacion ${errors.tituloPublicacion ? 'input-error' : ''}`} 
                            />
                            {errors.tituloPublicacion && (
                                <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
                                    {errors.tituloPublicacion}
                                </p>
                            )}
                        </div>
                        {/* tipo prop */}
                        <div className='cont-dato'>
                            <div style={{'display':'flex', 'justifyContent':'center', 'alignItems':'center'}}>
                                <label className='label-crea-prop'>Tipo propiedad</label>
                                <p style={{ 'margin':'0', 'color':'red', 'fontSize':'23px'}}>*</p>
                            </div>
                            <select id='tipoPropiedad' onChange={(e) => { handleOnChangeTipoPropiedad(e) }} onBlur={handleOnBlur} className='input-tituloPublicacion'>
                                <option value=''></option>
                                {
                                    tipoProps.map((tipo, index) => (
                                        <option key={index} value={tipo}>{tipo}</option>
                                    ))
                                }
                            </select>
                            {errors.tipoPropiedad && (
                                <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
                                    {errors.tipoPropiedad}
                                </p>
                            )}
                        </div>
                        {/* operacion */}
                        <div className='cont-dato'>
                            {/* titulo */}
                            <div style={{'display':'flex', 'justifyContent':'center', 'alignItems':'center'}}>
                                <label className='label-crea-prop'>Tipo operación</label>
                                <p style={{ 'margin':'0', 'color':'red', 'fontSize':'23px'}}>*</p>
                            </div>
                            <div className='cont-operaciones operacion'>
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
                                        <label className='label-precio-venta'>Valor: </label>
                                        <input 
                                            type='text' 
                                            id='monedaVenta' 
                                            value={monedaVenta} 
                                            onChange={(e) => { handleOnChangeMonedaVenta(e) }} 
                                            className='input-moneda-venta' 
                                            disabled={opVenta === null}
                                        />
                                        <input 
                                            type='number' 
                                            id='precioVenta' 
                                            value={precioVenta === null ? '' : precioVenta} 
                                            onChange={(e) => { handleOnChangePrecioVenta(e) }} 
                                            onBlur={handleOnBlur}
                                            className='input-precio-venta' 
                                            disabled={opVenta === null}
                                        />
                                        {
                                            opVenta && errors.precioVenta && (
                                                <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
                                                    {errors.precioVenta}
                                                </p>
                                            )
                                        }
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
                                        <label className='label-precio-venta'>Valor: </label>
                                        <input 
                                            type='text' 
                                            id='monedaAlq' 
                                            value={monedaAlq === null ? '' : monedaAlq} 
                                            onChange={(e) => { handleOnChangeMonedaAlq(e) }}                                             
                                            className='input-moneda-alq' 
                                            disabled={!opVenta}
                                        />
                                        <input 
                                            type='number' 
                                            id='precioAlq' 
                                            value={precioAlq === null ? '' : precioAlq}
                                            onBlur={handleOnBlur} 
                                            onChange={(e) => { handleOnChangePrecioAlq(e) }} 
                                            className='input-precio-venta'
                                            disabled={opAlquiler === null}
                                        />
                                        {
                                            opAlquiler && errors.precioAlq && (
                                                <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
                                                    {errors.precioAlq}
                                                </p>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Descrip */}
                        <div className='cont-dato'>
                            <div style={{'display':'flex', 'justifyContent':'center', 'alignItems':'center'}}>
                                <label className='label-crea-prop'>Descripción</label>
                                <p style={{ 'margin':'0', 'color':'red', 'fontSize':'23px'}}>*</p>
                            </div>
                            <textarea 
                                id='descripcion' 
                                value={descripcion} 
                                onBlur={handleOnBlur}
                                onChange={(e) => { handleOnChangeDescripcion(e) }}  
                                rows="8" 
                                className='input-descripcion-prop' 
                            />
                            {errors.descripcion && (
                                <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
                                    {errors.descripcion}
                                </p>
                            )}
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
                                    value={direccionPublicacion}
                                    onBlur={handleOnBlur} 
                                    onChange={(e) => { handleOnChangeDireccionPublicacion(e) }}
                                    placeholder='Lavalle 2500'
                                    className='input-tituloPublicacion' 
                                />
                                {errors.direccionPublicacion && (
                                    <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
                                        {errors.direccionPublicacion}
                                    </p>
                                )}
                            </div>
                            <div className='cont-ubicacion-barrio'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Dirección Real</label>
                                    <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p>
                                </div>
                                <input 
                                    type='text' 
                                    id='direccionReal' 
                                    value={direccionReal} 
                                    onBlur={handleOnBlur}
                                    onChange={(e) => { handleOnChangeDireccionReal(e) }}
                                    placeholder='Lavalle 2570'
                                    className='input-tituloPublicacion' 
                                />
                                {errors.direccionReal && (
                                    <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
                                        {errors.direccionReal}
                                    </p>
                                )}
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
                                    value={barrio}
                                    onBlur={handleOnBlur} 
                                    onChange={(e) => { handleOnChangeBarrio(e) }}
                                    placeholder='Centro'
                                    className='input-tituloPublicacion' 
                                />
                                {errors.barrio && (
                                    <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
                                        {errors.barrio}
                                    </p>
                                )}
                            </div>
                            <div className='cont-ubicacion-barrio'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Ciudad</label>
                                    <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p>
                                </div>
                                <input 
                                    type='text' 
                                    id='ciudad' 
                                    value={ciudad} 
                                    onBlur={handleOnBlur}
                                    onChange={(e) => { handleOnChangeCiudad(e) }} 
                                    placeholder='Mar del Plata'
                                    className='input-tituloPublicacion' 
                                />
                                {errors.ciudad && (
                                    <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
                                        {errors.ciudad}
                                    </p>
                                )}
                            </div>
                        </div>
                        {/* provincia */}
                        <div className='cont-ubicacion'>
                            <label className='label-crea-prop'>Provincia</label>
                            <input
                                type='text'
                                id='provincia'
                                value={provincia}
                                onBlur={handleOnBlur}
                                onChange={(e) => { handleOnChangeProvincia(e) }}
                                placeholder='Buenos Aires'
                                className='input-tituloPublicacion'
                            />
                            {errors.provincia && (
                                <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
                                    {errors.provincia}
                                </p>
                            )}
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
                                    value={ambientes === null ? '' : ambientes} 
                                    onBlur={handleOnBlur}
                                    onChange={(e) => { handleOnChangeAmbientes(e) }} 
                                    className='input-amb' 
                                />
                                {errors.ambientes && (
                                    <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
                                        {errors.ambientes}
                                    </p>
                                )}
                            </div>
                            <div className='cont-amb'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Dormitorios</label>
                                    <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p>
                                </div>
                                <input 
                                    type='number' 
                                    id='dormitorios' 
                                    value={dormitorios}
                                    onBlur={handleOnBlur} 
                                    onChange={(e) => { handleOnChangeDormitorios(e) }} 
                                    className='input-amb' 
                                />
                                {errors.dormitorios && (
                                    <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
                                        {errors.dormitorios}
                                    </p>
                                )}
                            </div>
                            <div className='cont-amb'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Baños</label>
                                    <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p>
                                </div>
                                <input 
                                    type='number' 
                                    id='baños' 
                                    value={baños}
                                    onBlur={handleOnBlur} 
                                    onChange={(e) => { handleOnChangeBaños(e) }} 
                                    className='input-amb' 
                                />
                                {errors.baños && (
                                    <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
                                        {errors.baños}
                                    </p>
                                )}
                            </div>
                            <div className='cont-amb'>
                                <label className='label-crea-prop'>Cant. pisos</label>
                                <input 
                                    type='number' 
                                    id='cantPisos' 
                                    value={cantPisos} 
                                    onChange={(e) => { handleOnChangeCantPisos(e) }} 
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
                                <input 
                                    type='number' 
                                    id='supCubierta' 
                                    value={supCubierta} 
                                    onBlur={handleOnBlur}
                                    onChange={(e) => { handleOnChangeSupCubierta(e) }} 
                                    className='input-tituloPublicacion' 
                                />
                                {errors.supCubierta && (
                                    <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
                                        {errors.supCubierta}
                                    </p>
                                )}
                            </div>
                            <div className='cont-amb'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Sup semicub</label>
                                </div>
                                <input 
                                    type='number' 
                                    id='supSemiCub' 
                                    value={supSemiCub} 
                                    onChange={(e) => { handleOnChangeSupSemiCub(e) }} 
                                    className='input-tituloPublicacion' 
                                />
                            </div>
                            <div className='cont-amb'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Sup decubierta</label>
                                </div>
                                <input 
                                    type='number' 
                                    id='supDescubierta' 
                                    value={supDescubierta} 
                                    onChange={(e) => { handleOnChangeSupDescubierta(e) }} 
                                    className='input-tituloPublicacion' 
                                />
                            </div>
                            <div className='cont-amb'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Sup Total</label>
                                    <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p>
                                </div>
                                <input 
                                    type='number' 
                                    id='supTotal' 
                                    value={supTotal}
                                    onBlur={handleOnBlur} 
                                    onChange={(e) => { handleOnChangeSupTotal(e) }} 
                                    className='input-tituloPublicacion' 
                                />
                                {errors.supTotal && (
                                    <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
                                        {errors.supTotal}
                                    </p>
                                )}
                            </div>
                        </div>
                        {/* estado, antiguedad, cant cocheras */}
                        <div className='cont-ambts'>
                            <div className='cont-amb'>
                                <label className='label-crea-prop'>Estado</label>
                                <input 
                                    type='text' 
                                    id='estado' 
                                    value={estado} 
                                    onChange={(e) => { handleOnChangeEstado(e) }} 
                                    className='input-tituloPublicacion' 
                                />
                            </div>
                            <div className='cont-amb'>
                                <label className='label-crea-prop'>Antiguedad</label>
                                <input 
                                    type='number' 
                                    id='antiguedad' 
                                    value={antiguedad}
                                    onChange={(e) => { handleOnChangeAntiguedad(e) }} 
                                    className='input-tituloPublicacion' 
                                />
                            </div>
                            {
                                tipoPropiedad === "Departamento" && (
                                    <div className='cont-amb'>
                                        <label className='label-crea-prop'>Expensas</label>
                                        <input type='number' id='expensas' value={expesnsas} onChange={(e) => { handleOnChangeExpensas(e) }} className='input-tituloPublicacion' />
                                    </div>
                                )
                            } 
                            <div className='cont-amb'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Cant cocheras</label>
                                    <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p>
                                </div>
                                <input 
                                    type='number' 
                                    id='cantCocheras' 
                                    value={cantCocheras}
                                    onBlur={handleOnBlur} 
                                    onChange={(e) => { handleOnChangeCantCocheras(e) }} 
                                    className='input-tituloPublicacion' 
                                />
                                {errors.cantCocheras && (
                                    <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
                                        {errors.cantCocheras}
                                    </p>
                                )}
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
                            <div className='sub-cont-servicios'>
                                <div className='cont-servicio'>
                                    <label className='label-crea-prop'>Luz eléctrica</label>
                                    <input type='checkbox' id='luz' value={"luz"} onChange={(e) => { handleOnChangeServicios(e) }} className='check-luz' />
                                </div>
                                <div className='cont-servicio'>
                                    <label className='label-crea-prop'>Gas</label>
                                    <input type='checkbox' id='gas' value={"gas"} onChange={(e) => { handleOnChangeServicios(e) }} className='check-luz' />
                                </div>
                                <div className='cont-servicio'>
                                    <label className='label-crea-prop'>Cloaca</label>
                                    <input type='checkbox' id='luz' value={"cloaca"} onChange={(e) => { handleOnChangeServicios(e) }} className='check-luz' />
                                </div>
                            </div>
                        </div>

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
                                vistaPrevia?.map((img, index) => (
                                    <div key={index} className='cont-img-miniatura'>
                                        <img src={img.url} alt={`preview-${index}`} className='img-miniatura'/>
                                        <button 
                                            type='button'
                                            className='btn-elimina-img'
                                            onClick={()=>{handleOnClickEliminaImg(index)}}
                                        >
                                            X
                                        </button>
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
                    <button type='submit' className='btn-crea'>
                        {
                            op === 'creacion' ? 'Crear propiedad' : 'Editar propiedad'
                        }
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FormularioProp;

/*



*/