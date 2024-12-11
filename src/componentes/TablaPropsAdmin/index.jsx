import React from 'react';
import { NavLink } from 'react-router-dom';
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
                            <th>Dirección</th>
                            <th>Operación</th>
                            <th>Precio</th>
                            <th>Dorm</th>
                            <th>Baños</th>
                            <th>Detalle</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {propiedades?.map(propiedad => (
                            <tr key={propiedad._id}>
                                <td><img src={propiedad.imagenes[0]} alt={propiedad.direccion} className='foto-tabla-prop'/></td>
                                <td>{propiedad.ubicacion.direccionReal}</td>
                                <td>
                                    {
                                        propiedad.venta && !propiedad.alquiler ? "Venta" : null
                                    }
                                    {
                                        propiedad.alquiler && !propiedad.venta ? "Alquiler" : null
                                    }
                                    {
                                        propiedad.venta && propiedad.alquiler ? "Venta / Alquiler" : null
                                    }
                                </td>
                                <td>
                                    {
                                        propiedad.venta && !propiedad.alquiler ? `$ ${propiedad.venta.precio}` : null
                                    }
                                    {
                                        propiedad.alquiler && !propiedad.venta ? `$ ${propiedad.alquiler.precio}` : null
                                    }
                                    {
                                        propiedad.venta && propiedad.alquiler ? `$ ${propiedad.venta.precio} / $ ${propiedad.alquiler.precio}` : null
                                    }
                                </td>
                                <td>{propiedad.dormitorios}</td>
                                <td>{propiedad.baños}</td>
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