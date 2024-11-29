import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProps } from '../../redux/actions';
import ListaPropiedades from '../../componentes/ListaPropiedades';
import './estilos.css';


function ListaPropiedadesPage() {

    const propiedades = useSelector(state => state.propiedades);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProps());
    },[dispatch]);


    return (
        <div className='cont-listaPropsAdmin'>
            <h1>Lista de Propiedades</h1>
            <div className='cont-tabla-page'>
                <ListaPropiedades propiedades={propiedades}/>
            </div>
        </div>
    )
}

export default ListaPropiedadesPage;