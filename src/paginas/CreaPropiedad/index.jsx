import React from 'react';
import { actual } from '../../urls';
import FormularioProp from '../../componentes/FormularioPropiedad';
import './estilos.css';

function CreaPropiedad() {

    const handleOnSubmit = async(data) => {

        const formData = new FormData();
        formData.append('data', JSON.stringify({
            tituloPublicacion: data.tituloPublicacion,
            descripcion: data.descripcion,
            tipoPropiedad: data.tipoPropiedad,
            expesnsas: data.expesnsas,
            cantPisos: data.cantPisos,
            ambientes: data.ambientes,
            dormitorios: data.dormitorios,
            baños: data.baños,
            supCubierta: data.supCubierta,
            supSemiCub: data.supSemiCub,
            supDescubierta: data.supDescubierta,
            supTotal: data.supTotal,
            estado: data.estado,
            antiguedad: data.antiguedad,
            cantCocheras: data.cantCocheras,
            venta: data.venta,
            alquiler: data.alquiler,
            ubicacion: data.ubicacion,
            imagenes: data.imagenes,
            video: data.video,
            servicios: data.servicios,
        }));

        data.imagenes?.forEach((imagen, index) => {
            formData.append('imagenes', imagen);
        });

        try {
            const response = await fetch(`${actual}/propiedades`, {
                method: 'POST',
                body: formData,
            });
            if(response.ok){
                alert('Propiedad creada con éxito');
            }else{
                alert('Error al crear la propiedad');
            }           
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='cont-page-crea-prop'>
            <FormularioProp handleOnSubmit={handleOnSubmit} op='creacion'/>
        </div>
    )
}

export default CreaPropiedad;


/*

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

*/

/*
‼️Departamento en la ciudad de mar del plata, zona centro.
🔹Posee cocina/comedor, habitación, baño, balcón.
🔹Todos sus ambientes dan a Avenida Independencia.
🔹Muy luminoso.
🔹Todo eléctrico.
🔹Torre de categoría.
🔹Quincho equipado para 15/20 pers.
🔹Cochera propia.
*/