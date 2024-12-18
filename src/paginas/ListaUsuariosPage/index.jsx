
import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsuarios } from '../../redux/actions';
import ListaUsuarios from '../../componentes/ListaUsuarios';
import './estilos.css';
import { InmobiliariaContext } from '../../context';

function ListaUsuariosPage() {

    const usuarios = useSelector((state) => state.usuarios);
    const dispatch = useDispatch();
    const context = useContext(InmobiliariaContext);

    useEffect(()=>{
        dispatch(getUsuarios());
    },[dispatch]);

    return (
        <div className='cont-lista-usuarios'>
            {
                context.isAuthenticated ? 
                <>
                    <h1>Lista usuarios</h1>
                    <ListaUsuarios usuarios={usuarios} />
                </>
                :
                <h2>No hay usuarios</h2>
            }
        </div>
    )
}

export default ListaUsuariosPage