
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsuarios } from '../../redux/actions';
import ListaUsuarios from '../../componentes/ListaUsuarios';
import './estilos.css';

function ListaUsuariosPage() {

    const usuarios = useSelector((state) => state.usuarios);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getUsuarios());
    },[dispatch]);

    return (
        <div className='cont-lista-usuarios'>
            <h1>Lista usuarios</h1>
            <ListaUsuarios usuarios={usuarios} />
        </div>
    )
}

export default ListaUsuariosPage