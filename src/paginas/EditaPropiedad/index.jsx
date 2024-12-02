import React, { useEffect, useState } from 'react';
import { actual } from '../../urls';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FormularioProp from '../../componentes/FormularioPropiedad';
import { getPropiedad } from '../../redux/actions';


function EditaPropiedad() {

    const {_id} = useParams();
    const dispatch = useDispatch();
    const propiedad = useSelector((state) => state.propiedad);
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
            const response = await fetch(`${actual}/propiedades/editaProp/${_id}`, {
                method: 'PUT',
                body: formData,
            });
            
            if(response.ok){
                alert('Propiedad editada con éxito');
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
    //elimina img de vista previa
    const handleOnClickEliminaImg = (index) => {
        const previews = [...vistaPrevia];
        previews.splice(index, 1);
        setVistaPrevia(previews);
    };

    //efecto para buscar la propiedad por ID
    useEffect(() => {
        dispatch(getPropiedad(_id));
    }, [dispatch, _id]); 
    //efecto para cargar la info de la prop en el formulario
    useEffect(()=>{
        //actualizo los inputs del formulario con la info de la propiedad
        setData({
            tituloPublicacion: propiedad.tituloPublicacion,
            descripcion: propiedad.descripcion,
            tipoPropiedad: propiedad.tipoPropiedad,
            expesnsas: propiedad.expesnsas,       
            cantPisos: propiedad.cantPisos,
            ambientes: propiedad.ambientes,
            dormitorios: propiedad.dormitorios,
            baños: propiedad.baños,
            supCubierta: propiedad.supCubierta,
            supSemiCub: propiedad.supSemiCub,
            supDescubierta: propiedad.supDescubierta,
            supTotal: propiedad.supTotal,
            estado: propiedad.estado,
            antiguedad: propiedad.antiguedad,
            cantCocheras: propiedad.cantCocheras,
        });
        //actualizo los inputs de operacion
        propiedad.operacion?.forEach((op) => {
            if(op.tipoOperacion === 'Venta'){
                setOpVenta(op.tipoOperacion);
                setMonedaVenta(op.moneda);
                setPrecioVenta(op.precio);
            }
            if(op.tipoOperacion === 'Alquiler'){
                setOpAlquiler(op.tipoOperacion);
                setMonedaAlq(op.moneda);
                setPrecioAlq(op.precio);
            }
        });
        //actualizo los inputs de ubicacion
        setUbicacion({
            direccionPublicacion: propiedad.ubicacion?.direccionPublicacion || "",
            direccionReal: propiedad.ubicacion?.direccionReal || "",
            barrio: propiedad.ubicacion?.barrio || "",
            ciudad: propiedad.ubicacion?.ciudad || "",
            provincia: propiedad.ubicacion?.provincia || "",
        });
        //actualizo las imgs
        setImagenes(propiedad.imagenes);
        //actualizo la vista previa
        const previews = propiedad.imagenes.map((imagen) => ({
            file: imagen,
            url: `${imagen}`,
        }));
        setVistaPrevia(previews);
        //actualizo el video
        setVideos(propiedad.video);
        //actualizo los servicios
        setServicios(propiedad.servicios);
    },[
        dispatch, propiedad?.ambientes, propiedad?.antiguedad, propiedad?.baños, propiedad?.cantCocheras, 
        propiedad?.cantPisos, propiedad?.descripcion, propiedad?.dormitorios, propiedad?.estado, propiedad?.expensas, propiedad?.expesnsas,
        propiedad?.imagenes, propiedad?.operacion, propiedad?.servicios, propiedad?.supCubierta, propiedad?.supDescubierta, 
        propiedad?.supSemiCub, propiedad?.supTotal, propiedad?.tipoPropiedad, propiedad?.tituloPublicacion, 
        propiedad?.ubicacion?.barrio, propiedad?.ubicacion?.ciudad, propiedad?.ubicacion?.direccionPublicacion, 
        propiedad?.ubicacion?.direccionReal, propiedad?.ubicacion?.provincia, propiedad?.video
    ]);

    return (
        <div className='cont-page-edita-prop'>
            <FormularioProp 
                tipoOperacion={"edita"}
                data={data}
                setData={setData}
                tipoProps={tipoProps}
                opVenta={opVenta}
                setOpVenta={setOpVenta}
                opAlquiler={opAlquiler}
                setOpAlquiler={setOpAlquiler}
                monedaVenta={monedaVenta}
                setMonedaVenta={setMonedaVenta}
                monedaAlq={monedaAlq}
                setMonedaAlq={setMonedaAlq}
                precioVenta={precioVenta}
                setPrecioVenta={setPrecioVenta}
                precioAlq={precioAlq}
                setPrecioAlq={setPrecioAlq}
                operacion={operacion}
                setOperacion={setOperacion}
                ubicacion={ubicacion}
                setUbicacion={setUbicacion}
                imagenes={imagenes}
                setImagenes={setImagenes}
                vistaPrevia={vistaPrevia}
                setVistaPrevia={setVistaPrevia}
                video={video}
                setVideos={setVideos}
                vistaPreviaVideo={vistaPreviaVideo}
                setVistaPreviaVideo={setVistaPreviaVideo}
                servicios={servicios}
                setServicios={setServicios}
                errors={errors}
                setErrors={setErrors}
                errorsU={errorsU}
                setErrorsU={setErrorsU}
                vista1={vista1}
                setVista1={setVista1}
                vista2={vista2}
                setVista2={setVista2}
                vista3={vista3}
                setVista3={setVista3}
                vista4={vista4}
                setVista4={setVista4}
                validaDatosVista1={validaDatosVista1}
                validaDatosVista2={validaDatosVista2}
                validaDatosVista3={validaDatosVista3}
                validaDatosVista4={validaDatosVista4}
                handleOnChangeData={handleOnChangeData}
                handleOnChangeUbicacion={handleOnChangeUbicacion}
                handleOnChangeOpVenta={handleOnChangeOpVenta}
                handleOnChangeOpAlquiler={handleOnChangeOpAlquiler}
                handleOnChangeMonedaVenta={handleOnChangeMonedaVenta}
                handleOnChangeMonedaAlq={handleOnChangeMonedaAlq}
                handleOnChangePrecioVenta={handleOnChangePrecioVenta}
                handleOnChangePrecioAlq={handleOnChangePrecioAlq}
                handleOnChangeImgs={handleOnChangeImgs}
                handleOnChangeVideos={handleOnChangeVideos}
                handleOnChangeServicios={handleOnChangeServicios}
                onClickSgtVista1={onClickSgtVista1}
                onClickAtrasVista2={onClickAtrasVista2}
                onClickSgtVista2={onClickSgtVista2}
                onClickAtrasVista3={onClickAtrasVista3}
                onClickSgtVista3={onClickSgtVista3}
                onClickAtrasVista4={onClickAtrasVista4}
                handleOnSubmit={handleOnSubmit}
                handleOnClickEliminaImg={handleOnClickEliminaImg}
            />
        </div>
    )
}

export default EditaPropiedad