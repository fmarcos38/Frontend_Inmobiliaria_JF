import React, { useContext, useEffect } from 'react';
import { actual } from '../../urls';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPropiedad } from '../../redux/actions';
import FormularioProp from '../../componentes/FormularioPropiedad';
import { InmobiliariaContext } from '../../context';
import './estilos.css';

function EditaPropiedad() {

    const {_id} = useParams();
    const dispatch = useDispatch();
    const propiedad = useSelector((state) => state.propiedad);
    const context = useContext(InmobiliariaContext);
    
    const handleOnSubmit = async (data) => {

        const formData = new FormData();
        formData.append('data', JSON.stringify({
            tituloPublicacion: data.tituloPublicacion,
            tipoPropiedad: data.tipoPropiedad,
            operacion: data.operacion,
            moneda: data.moneda,
            precio: data.precio,
            descripcion: data.descripcion,    
            ubicacion: data.ubicacion,
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
            expesnsas: data.expesnsas,
            imagenes: data.imagenes,
            video: data.video,
            servicios: data.servicios,
            estadoActual: data.estadoActual
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
            {
                context.isAuthenticated ? (
                    <>
                        <FormularioProp
                            op='editar'
                            propiedad={propiedad}
                            handleOnSubmit={handleOnSubmit}
                        />
                    </>
                ) : (
                    <h1>Acceso denegado</h1>
                )
            }
        </div>
    )
}

export default EditaPropiedad