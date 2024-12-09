import React from 'react'
import { NavLink } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './estilos.css';

function ListaUsuarios({usuarios}) {

    return (
        <table className='cont-listaUsuarios'>
            <thead>
                <tr>
                    <th>Email</th>
                    <th>Rol</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {usuarios.map((usuario, index) => (
                    <tr key={index}>
                        <td>{usuario.email}</td>
                        <td>{usuario.role}</td>
                        <td>
                            <NavLink to={`/admin/editaUsuario/${usuario._id}`}>
                                <EditIcon />
                            </NavLink>
                        </td>
                        <td>
                            <DeleteIcon />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default ListaUsuarios;