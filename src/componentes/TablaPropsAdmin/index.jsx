import React from 'react';
import { NavLink } from 'react-router-dom';
import { formatMoney } from '../../Helps';
import EditIcon from '@mui/icons-material/Edit';
import BotonEliminaProp from '../BotonEliminaProp';
import './estilos.css';


function TablaProspAdmin({propiedades}) {

    return (
        <div className='cont-tabla'>
            {/* tabla */}
                <table className='tabla-props-admin'>
                    <thead>
                        <tr>
                            <th>Foto</th>
                            <th>Tipo</th>
                            <th>Dirección</th>
                            <th>Operación</th>
                            <th>Precio</th>
                            <th>Detalle</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {propiedades?.map(propiedad => (
                            <tr key={propiedad._id}>
                                <td><img src={propiedad.imagenes[0]} alt={propiedad.direccion} className='foto-tabla-prop'/></td>
                                <td>
                                    {
                                        propiedad.tipoPropiedad === "Departamento" ? "Dpto" : propiedad.tipoPropiedad
                                    }
                                </td>
                                <td>{propiedad.ubicacion.direccionReal}</td>
                                <td>{propiedad.operacion}</td>
                                <td>{formatMoney(propiedad.precio)}</td>
                                <td>
                                    <button className='boton-detalle-prop'>
                                        <NavLink to={`/detalle/${propiedad._id}`} className='link-detalle-prop'>
                                            Detalle
                                        </NavLink>
                                    </button>
                                </td>
                                <td>
                                    <button className='boton-elimina-prop'>
                                        <NavLink to={`/admin/editaProp/${propiedad._id}`} className='link-edita-prop'>
                                            <EditIcon />
                                        </NavLink>
                                    </button>
                                    <BotonEliminaProp _id={propiedad._id}/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    )
}

export default TablaProspAdmin