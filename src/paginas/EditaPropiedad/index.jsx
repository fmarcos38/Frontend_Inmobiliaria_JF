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
    
    const handleOnSubmit = async (
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
        operacion,
        ubicacion,
        imagenes,
        video,
        servicios,
    ) => {

        const formData = new FormData();
        formData.append('data', JSON.stringify({
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
            operacion,
            ubicacion,
            imagenes,
            video,
            servicios,
        }));

        imagenes.forEach((imagen, index) => {
            formData.append('imagenes', imagen);
        });

        try {
            const response = await fetch(`${actual}/propiedades`, {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                alert('Propiedad creada con éxito');
            } else {
                alert('Error al crear la propiedad');
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