import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProps } from '../../redux/actions';
import TablaProspAdmin from '../../componentes/TablaPropsAdmin';
import { InmobiliariaContext } from '../../context';
import './estilos.css';



function ListaPropsAdminPage() {

    const propiedades = useSelector(state => state.propiedades);
    const dispatch = useDispatch();
    const context = useContext(InmobiliariaContext);

    useEffect(()=>{
        dispatch(getProps());
    },[dispatch, propiedades]); //al cambiar propiedades(por ejem CUANDO ELIMINO), se vuelve a cargar la lista


    return (
        <div className='cont-listaPropsAdmin'>
            {
                context.isAuthenticated ? (
                    <>
                        <h1>Lista de Propiedades</h1>
                        <p className='msj-girar-pantalla'>Girar el dispositivo para una mejor vista de la tabala</p>
                        <TablaProspAdmin propiedades={propiedades}/>
                    </>
                ) : (
                    <h1>Acceso denegado</h1>
                )
            }
        </div>
    )
}

export default ListaPropsAdminPage