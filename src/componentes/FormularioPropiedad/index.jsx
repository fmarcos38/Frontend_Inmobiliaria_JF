import React, { useState, useEffect } from 'react';
import './estilos.css';


function FormularioProp({propiedad, handleOnSubmit, op}) {

    //tipo de propiedad
    const tipoProps = [
        'Casa', 'Departamento', 'PH', 'Oficina',
        'Local', 'Cochera', 'Galpón', 
        'Terreno', 'Quinta', 'Campo',
    ];
    const [tituloPublicacion, setTituloPublicacion] = useState('');
    //estado objeto tipo opeeracion
    const [operacion, setOperacion] = useState(null); 
    //estado moneda
    const [monedaVenta, setMonedaVenta] = useState('');
    const [monedaAlq, setMonedaAlq] = useState('');
    const [moneda, setMoneda] = useState(''); 
    //estado precios
    const [precioVenta, setPrecioVenta] = useState(null); 
    const [precioAlq, setPrecioAlq] = useState(null);
    const [precio, setPrecio] = useState(null); 
    //estados para ubicacion
    const [direccionPublicacion, setDireccionPublicacion] = useState('');
    const [direccionReal, setDireccionReal] = useState('');
    const [barrio, setBarrio] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [provincia, setProvincia] = useState(''); 
    //descrip
    const [descripcion, setDescripcion] = useState();
    const [tipoPropiedad, setTipoPropiedad] = useState();
    const [cantPisos, setCantPisos] = useState(null);
    const [ambientes, setAmbientes] = useState(null);
    const [dormitorios, setDormitorios] = useState(null);
    const [baños, setBaños] = useState(null);
    const [supCubierta, setSupCubierta] = useState(null);
    const [supSemiCub, setSupSemiCub] = useState(null);
    const [supDescubierta, setSupDescubierta] = useState(null);
    const [supTotal, setSupTotal] = useState(null);
    const [estado, setEstado] = useState('');
    const [antiguedad, setAntiguedad] = useState(null);
    const [expesnsas, setExpensas] = useState(null);
    const [cantCocheras, setCantCocheras] = useState(null);     
    //estado imgs
    const [imagenes, setImagenes] = useState([]);  
    const [vistaPrevia, setVistaPrevia] = useState([]);//vista previa
    //estado video
    const [video, setVideos] = useState([]);  
    const [vistaPreviaVideo, setVistaPreviaVideo] = useState([]);//vista previa
    //servicios
    const [servicios, setServicios] = useState([]);
    //vendida o alquilada
    const [estadoActual, setEstadoActual] = useState('');
    //estado para errores
    const [errors, setErrors] = useState({});
    //estado para errores ubicacion
    const [errorsU, setErrorsU] = useState({});
    //estado para vistas
    const [vista1, setVista1] = useState(true);  
    const [vista2, setVista2] = useState(false);
    const [vista3, setVista3] = useState(false);
    const [vista4, setVista4] = useState(false);
    
    const handleOnChangeTituloPublicacion = (e) => {
        setTituloPublicacion(e.target.value);
    };
    const handleOnChangeTipoPropiedad = (e) => {
        setTipoPropiedad(e.target.value);
    };
    const handleOnChangeOperacion = (e) => {
        setOperacion(e.target.value);
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
    const handleOnChangeDescripcion = (e) => {
        setDescripcion(e.target.value);
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
        const { value, checked } = e.target;
        setServicios((prevServicios) =>
            checked ? [...prevServicios, value] : prevServicios.filter((s) => s !== value)
        );
    };
    const handleOnChangeEstadoActual = (e) => {
        setEstadoActual(e.target.value);
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
    // Validaciónes
    const validaDatosVista1 = () => {
        return tituloPublicacion 
        && tipoPropiedad
        && operacion
        && descripcion;        
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
    /* const validaDatosVista3 = () => {
        return ambientes
            && dormitorios
            && baños
            && supCubierta
            && supTotal;
    }; */
    //valida vista 4
    const validaDatosVista4 = () => {
        if(imagenes.length){
            return true
        }
        return false;
    };
    //btns vista 1
    const onClickSgtVista1 = () => {
        let hasErrors = false;
        const newErrors = {};

        if (!tituloPublicacion) {
            newErrors.tituloPublicacion = 'Campo requerido';
            hasErrors = true;
        }
        if (!descripcion) {
            newErrors.descripcion = 'Campo requerido';
            hasErrors = true;
        }
        if (!tipoPropiedad) {
            newErrors.tipoPropiedad = 'Campo requerido';
            hasErrors = true;
        }
        if (!operacion) {
            newErrors.operacion = 'Campo requerido';
            hasErrors = true;
        }

        setErrors(newErrors);

        // Si hay errores, no avanzar
        if (hasErrors) {
            return;
        }

        // Si no hay errores, avanzar a la siguiente vista
        setVista1(false);
        setVista2(true);
    };
    //btns vista 2
    const onClickAtrasVista2 = () => {
        setVista1(true);
        setVista2(false);
    };
    const onClickSgtVista2 = () => {
        let hasErrors = false;
        const newErrors = {};

        if (!direccionPublicacion) {
            newErrors.direccionPublicacion = 'Campo requerido';
            hasErrors = true;
        }
        if (!direccionReal) {
            newErrors.direccionReal = 'Campo requerido';
            hasErrors = true;
        }
        if (!barrio) {
            newErrors.barrio = 'Campo requerido';
            hasErrors = true;
        }
        if (!ciudad) {
            newErrors.ciudad = 'Campo requerido';
            hasErrors = true;
        }
        if (!provincia) {
            newErrors.provincia = 'Campo requerido';
            hasErrors = true;
        }
        
        setErrorsU(newErrors);
        // Si hay errores, no avanzar
        if (hasErrors) {
            return;
        }
        //avanzo
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
        /* let hasErrors = false;
        const newErrors = {};

        if(!ambientes){
            newErrors.ambientes = 'Campo requerido';
            hasErrors = true;
        }
        if(!dormitorios){
            newErrors.dormitorios = 'Campo requerido';
            hasErrors = true;
        }
        if(!baños){
            newErrors.baños = 'Campo requerido';
            hasErrors = true;
        }
        if(!supCubierta){
            newErrors.supCubierta = 'Campo requerido';
            hasErrors = true;
        }
        if(!supTotal){
            newErrors.supTotal = 'Campo requerido';
            hasErrors = true;
        } */
        //setErrors(newErrors);
        // Si hay errores, no avanzar
        /* if (hasErrors) {
            return;
        } */
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
    
    //igualmente a pesar de que recibo del padre la función onsubmit, la vuelvo a definir acá
    const OnSubmit = (e) => {
        e.preventDefault();
        //valido
        if(!validaDatosVista1()){
            setErrors({...errors, tituloPublicacion: 'Campo requerido'});
        }
        if(!validaDatosVista2()){
            setErrorsU({...errorsU, direccionPublicacion: 'Campo requerido'});
        }
        /* if(!validaDatosVista3()){
            setErrors({...errors, ambientes: 'Campo requerido'});
        } */
        if(!validaDatosVista4()){
            alert('Debe cargar al menos una imagen');
        }
        // Construcción del objeto data
        const data = {
            tituloPublicacion,
            operacion: operacion,
            moneda: moneda,
            precio: precio,
            tipoPropiedad,
            descripcion,
            ubicacion: {
                direccionPublicacion,
                direccionReal,
                barrio,
                ciudad,
                provincia,
            },
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
            expesnsas,
            cantCocheras,        
            imagenes,
            video,
            servicios,
            estadoActual
        };
        //envio
        handleOnSubmit(data);
    }


    //ejecuto funcion para asignar moneda SI la prop está en Venta y Alq
    useEffect(() => {
        if(operacion === "Venta" && monedaVenta){
            setMoneda(monedaVenta);
            setMonedaAlq(null);
            //vuelvo al elemento select id monedaAlq a su valor por defecto
            document.getElementById('monedaAlq').value = 'Moneda';

        }else if(operacion === "Alquiler" && monedaAlq){
            setMoneda(monedaAlq);
            setMonedaVenta(null);
            //vuelvo al elemento select id monedaVenta a su valor por defecto
            document.getElementById('monedaVenta').value = 'Moneda';
            //y lo desabilito
            document.getElementById('monedaVenta').disabled = true;
        }else if(!operacion){
            setMonedaAlq(null);
            setMonedaVenta(null);
            setMoneda(null);
            document.getElementById('monedaAlq').value = 'Moneda';
            document.getElementById('monedaVenta').value = 'Moneda';
        }
    }, [monedaVenta, monedaAlq, operacion]);
    //ejecuto funcion para asignar precio SI la prop está en Venta y Alq
    useEffect(() => {
        if(operacion === "Venta" && precioVenta){
            setPrecio(precioVenta);
            setPrecioAlq(null);
        }else if(operacion === "Alquiler" && precioAlq){
            setPrecio(precioAlq);
            setPrecioVenta(null);
        }else if(!operacion){
            setPrecioVenta(null);
            setPrecio(null);
            setPrecioAlq(null);
        }
    }, [precioVenta, precioAlq, operacion]);
    //efecto para cargar los datos de la propiedad Si es editar
    useEffect(() => {
        if(propiedad){
            setTituloPublicacion(propiedad.tituloPublicacion);
            setTipoPropiedad(propiedad.tipoPropiedad);
            setOperacion(propiedad.operacion);
            if(propiedad.operacion === "Venta"){                
                //selecciono el radio btn
                document.getElementById("operacionVenta").checked = true;
                setMonedaVenta(propiedad.moneda);
                setPrecioVenta(propiedad.precio);
            }
            if(propiedad.operacion === "Alquiler"){
                //selecciono el radio btn
                document.getElementById("operacionAlquiler").checked = true;
                setMonedaAlq(propiedad.moneda);
                setPrecioAlq(propiedad.precio);
            }
            setDescripcion(propiedad.descripcion);
            setCantPisos(propiedad.cantPisos);
            setAmbientes(propiedad.ambientes);
            setDormitorios(propiedad.dormitorios);
            setBaños(propiedad.baños);
            setSupCubierta(propiedad.supCubierta);
            setSupSemiCub(propiedad.supSemiCub);
            setSupDescubierta(propiedad.supDescubierta);
            setSupTotal(propiedad.supTotal);
            setEstado(propiedad.estado);
            setExpensas(propiedad.expesnsas);
            setAntiguedad(propiedad.antiguedad);
            setCantCocheras(propiedad.cantCocheras);
            //ubicacion
            setDireccionPublicacion(propiedad.ubicacion?.direccionPublicacion);
            setDireccionReal(propiedad.ubicacion?.direccionReal);
            setBarrio(propiedad.ubicacion?.barrio);
            setCiudad(propiedad.ubicacion?.ciudad);
            setProvincia(propiedad.ubicacion?.provincia);
            //imgs
            setImagenes(propiedad.imagenes);
            setVistaPrevia(propiedad.imagenes?.map((img) => ({ url: img })));
            //video
            setVideos(propiedad.video);
            setVistaPreviaVideo(propiedad.video?.map((video) => ({ url: video })));
            //servicios
            setServicios(propiedad.servicios);
        }
    }
    , [propiedad]);


    return (
        <div className='cont-crea-prop'>
            <h1 className='titulo-crea-prop'>
            {
                op === 'editar' ? "Editar propiedad" : "Crear propiedad" 
            }
            </h1>
            <form onSubmit={OnSubmit} className='formulario-crea-prop'>
                {/* vista-1 */} {/* titulo, tipo Prop, Tipo Op, moneda, precio, Descrip */}
                <div className={vista1 ? 'vista-1' : 'notVista1'} id='vista-1'>
                    <div className='cont-data-vista-1'>
                        {/* titulo prop */}
                        <div className='cont-dato'>
                            <div style={{'display':'flex', 'justifyContent':'center', 'alignItems':'center'}}>
                                <label className='label-crea-prop'>Titulo publicación</label>
                                <p style={{ 'margin':'0', 'color':'red', 'fontSize':'23px'}}>*</p>
                                {errors.tituloPublicacion && (<p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errors.tituloPublicacion}</p>)}
                            </div>
                            <input 
                                type='text' 
                                id='tituloPublicacion' 
                                value={tituloPublicacion} 
                                onChange={(e) => { handleOnChangeTituloPublicacion(e) }} 
                                onBlur={handleOnBlur} 
                                className="input-tituloPublicacion" 
                            />
                        </div>
                        {/* tipo prop - estado Vendida/Alquilada */}
                        <div className='cont-tipo-prop-EstadoActual'>
                            <div className='cont-tipo-prop'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Tipo propiedad</label>
                                    <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p>
                                </div>
                                <select
                                    id='tipoPropiedad'
                                    onChange={(e) => { handleOnChangeTipoPropiedad(e) }}
                                    onBlur={handleOnBlur}
                                    placeholder={propiedad ? propiedad.tipoPropiedad : ''}
                                    className='input-tituloPublicacion'
                                >
                                    <option value=''>{propiedad?.tipoPropiedad ? propiedad.tipoPropiedad : ''}</option>
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
                            <div className='cont-estado-Vendida-Alquilada'>
                                <label className='label-crea-prop'>Vendida / Alquilada</label>
                                <select
                                    id='estadoActual'
                                    onChange={(e) => {handleOnChangeEstadoActual(e)}}
                                    onBlur={handleOnBlur}
                                    placeholder={propiedad ? propiedad.estadoActual : ''}
                                    className='input-tituloPublicacion'
                                >
                                    <option value=''>{propiedad.estadoActual ? propiedad.estadoActual : ''}</option>
                                    <option value={'Vendida'}>Vendida</option>
                                    <option value={'Alquilada'}>Alquilada</option>
                                </select>
                            </div>
                        </div>
                        {/* operacion */}
                        <div className='cont-dato'>
                            <div style={{'display':'flex', 'justifyContent':'center', 'alignItems':'center'}}>
                                <label className='label-crea-prop'>Tipo operación</label>
                                <p style={{ 'margin':'0', 'color':'red', 'fontSize':'23px'}}>*</p>
                                {errors.operacion && (<p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errors.operacion}</p>)}
                            </div>
                            <div className='cont-operaciones operacion'>
                                {/* venta */}
                                <div className='cont-opVenta-y-precio'>
                                    <div className='cont-venta'>
                                        <label className='label-venta'>Venta</label>
                                        <input
                                            type='radio'
                                            id='operacionVenta'
                                            value={"Venta"}
                                            checked={operacion === 'Venta'}
                                            onChange={(e) => { handleOnChangeOperacion(e) }}
                                            className='input-check-venta'
                                        />
                                    </div>
                                    {/* valor */}
                                    <div className='cont-precio-venta'>
                                        <label className='label-precio-venta'>Valor: </label>
                                        <select 
                                            id='monedaVenta' 
                                            value={monedaVenta} 
                                            onChange={(e) => { handleOnChangeMonedaVenta(e) }} 
                                            className='input-moneda-venta' 
                                            disabled={operacion !== "Venta"}
                                        >
                                            {
                                                op === "editar" ? 
                                                <option value={monedaVenta}>{monedaVenta}</option> :
                                                <option value=''>Moneda</option>
                                            }
                                            <option value='USD'>USD</option>
                                            <option value='$'>$</option>
                                        </select>
                                        <input 
                                            type='number' 
                                            id='precioVenta' 
                                            value={precioVenta === null ? '' : precioVenta} 
                                            onChange={(e) => { handleOnChangePrecioVenta(e) }} 
                                            onBlur={handleOnBlur}
                                            className='input-precio-venta' 
                                            disabled={operacion !== "Venta"}
                                        />
                                        {
                                            operacion === "Venta" && errors.precioVenta && (
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
                                            type='radio'
                                            id='operacionAlquiler'
                                            value={"Alquiler"}
                                            checked={operacion === 'Alquiler'}
                                            onChange={(e) => { handleOnChangeOperacion(e) }}
                                            className='input-check-venta'
                                        />
                                    </div>                                    
                                    <div className='cont-precio-alq'>
                                        <label className='label-precio-venta'>Valor: </label>
                                        <select 
                                            type='text' 
                                            id='monedaAlq' 
                                            value={monedaAlq === null ? '' : monedaAlq} 
                                            onChange={(e) => { handleOnChangeMonedaAlq(e) }}                                             
                                            className='input-moneda-alq' 
                                            disabled={operacion !== 'Alquiler'}
                                        >
                                            <option value=''>Moneda</option>
                                            <option value='USD'>USD</option>
                                            <option value='$'>$</option>
                                        </select>
                                        <input 
                                            type='number' 
                                            id='precioAlq' 
                                            value={precioAlq === null ? '' : precioAlq}
                                            onBlur={handleOnBlur} 
                                            onChange={(e) => { handleOnChangePrecioAlq(e) }} 
                                            className='input-precio-venta'
                                            disabled={operacion !== 'Alquiler'}
                                        />
                                        {
                                            operacion !== 'Alquiler' && errors.precioAlq && (
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
                                {errors.descripcion && (
                                <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
                                    {errors.descripcion}
                                </p>
                            )}
                            </div>
                            <textarea 
                                id='descripcion' 
                                value={descripcion} 
                                onBlur={handleOnBlur}
                                onChange={(e) => { handleOnChangeDescripcion(e) }}  
                                rows="8" 
                                className='input-descripcion-prop' 
                            />
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
                                    >
                                        Siguiente
                                    </button>
                                </div>                            
                        </div>                
                    </div>
                </div>
                {/* vista-2 */} {/* direcc real y publicacion, barrio, ciudad, provincia */}
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
                                {errorsU.direccionPublicacion && (
                                    <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
                                        {errorsU.direccionPublicacion}
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
                                {errorsU.direccionReal && (
                                    <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
                                        {errorsU.direccionReal}
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
                                {errorsU.barrio && (
                                    <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
                                        {errorsU.barrio}
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
                                {errorsU.ciudad && (
                                    <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
                                        {errorsU.ciudad}
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
                            {errorsU.provincia && (
                                <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
                                    {errorsU.provincia}
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
                        {
                            tipoPropiedad !== 'Terreno' &&
                            <div className='cont-ambts'>
                                {/* amb */}
                                <div className='cont-amb'>
                                    <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                        <label className='label-crea-prop'>Ambientes</label>
                                        {/* <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p> */}
                                    </div>
                                    <input
                                        type='number'
                                        id='ambientes'
                                        value={ambientes === null ? '' : ambientes}
                                        //onBlur={handleOnBlur}
                                        onChange={(e) => { handleOnChangeAmbientes(e) }}
                                        className='input-amb'
                                    />
                                    {errors.ambientes && (
                                        <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
                                            {errors.ambientes}
                                        </p>
                                    )}
                                </div>
                                {/* dormitorios */}
                                <div className='cont-amb'>
                                    <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                        <label className='label-crea-prop'>Dormitorios</label>
                                        {/* <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p> */}
                                    </div>
                                    <input
                                        type='number'
                                        id='dormitorios'
                                        value={dormitorios}
                                        //onBlur={handleOnBlur} 
                                        onChange={(e) => { handleOnChangeDormitorios(e) }}
                                        className='input-amb'
                                    />
                                    {errors.dormitorios && (
                                        <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
                                            {errors.dormitorios}
                                        </p>
                                    )}
                                </div>
                                {/* baños */}
                                <div className='cont-amb'>
                                    <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                        <label className='label-crea-prop'>Baños</label>
                                        {/* <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p> */}
                                    </div>
                                    <input
                                        type='number'
                                        id='baños'
                                        value={baños}
                                        //onBlur={handleOnBlur} 
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
                        }
                        {/* superficies*/}
                        <div className='cont-ambts'>
                            <div className='cont-amb'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Sup cubierta</label>
                                    {/* <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p> */}
                                </div>
                                <input 
                                    type='number' 
                                    id='supCubierta' 
                                    value={supCubierta} 
                                    //onBlur={handleOnBlur}
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
                                    {/* <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p> */}
                                </div>
                                <input 
                                    type='number' 
                                    id='supTotal' 
                                    value={supTotal}
                                    //onBlur={handleOnBlur} 
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
                        {
                            tipoPropiedad !== 'Terreno' &&
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
                                    </div>
                                    <input
                                        type='number'
                                        id='cantCocheras'
                                        value={cantCocheras}
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
                        }
                        {/* btns Sgt-Atras */}
                        <div className='cont-campReq-botones'>
                            {/* <div className='cont-campo-requerido'>
                                <p>Campo requerido</p>
                                <p style={{ 'color': 'red', 'marginLeft': '3px' }}>*</p>
                            </div> */}
                            <div className='cont-botones-sgt-atras-vista-2'>
                                <button 
                                    type='button' 
                                    className='btn-atras-vista-2' 
                                    onClick={()=>onClickAtrasVista3()}>Atrás</button>
                                <button 
                                    type='button' 
                                    className='btn-sgt-vista-2' 
                                    onClick={()=>onClickSgtVista3()}
                                    /* disabled={!validaDatosVista3()} */
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
                                    <input 
                                        type='checkbox' 
                                        id='luz' 
                                        value={"luz"} 
                                        checked={servicios?.includes('luz')}
                                        onChange={(e) => { handleOnChangeServicios(e) }} 
                                        className='check-luz' 
                                    />
                                </div>
                                <div className='cont-servicio'>
                                    <label className='label-crea-prop'>Gas</label>
                                    <input 
                                        type='checkbox' 
                                        id='gas' 
                                        value={"gas"}
                                        checked={servicios?.includes('gas')} 
                                        onChange={(e) => { handleOnChangeServicios(e) }} 
                                        className='check-luz' 
                                    />
                                </div>
                                <div className='cont-servicio'>
                                    <label className='label-crea-prop'>Cloaca</label>
                                    <input 
                                        type='checkbox' 
                                        id='cloaca' 
                                        value={"cloaca"}
                                        checked={servicios?.includes('cloaca')} 
                                        onChange={(e) => { handleOnChangeServicios(e) }} 
                                        className='check-luz' 
                                    />
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
                        //validaDatosVista3() &&
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