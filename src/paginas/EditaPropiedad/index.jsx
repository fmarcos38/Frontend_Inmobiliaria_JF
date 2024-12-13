import React, { useEffect } from 'react';
import { actual } from '../../urls';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPropiedad } from '../../redux/actions';
import FormularioProp from '../../componentes/FormularioPropiedad';
import './estilos.css';

function EditaPropiedad() {

    const {_id} = useParams();
    const dispatch = useDispatch();
    const propiedad = useSelector((state) => state.propiedad);
    
    const handleOnSubmit = async (data) => {

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
            const response = await fetch(`${actual}/propiedades/editaProp/${_id}`, {
                method: 'PUT',
                body: formData,
            });
            if (response.ok) {
                alert('Propiedad modificar con éxito');
            } else {
                alert('Error al modificar la propiedad');
            }
        } catch (error) {
            console.log(error);
        }
    };

    //efecto para buscar la propiedad por ID
    useEffect(() => {
        dispatch(getPropiedad(_id));
    }, [dispatch, _id]); 
    

    return (
        <div className='cont-page-edita-prop'>
            <FormularioProp
                propiedad={propiedad} 
                handleOnSubmit={handleOnSubmit}
            />
        </div>
    )
}

export default EditaPropiedad