import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProps } from '../../redux/actions';
import TablaProspAdmin from '../../componentes/TablaPropsAdmin';
import './estilos.css';


function ListaPropsAdminPage() {

    const propiedades = useSelector(state => state.propiedades);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProps());
    },[dispatch]);


    return (
        <div className='cont-listaPropsAdmin'>
            <h1>Lista de Propiedades</h1>
            <div className='cont-tabla-page'>
                <TablaProspAdmin propiedades={propiedades}/>
            </div>
        </div>
    )
}

export default ListaPropsAdminPage