import React from 'react';
import EditIcon from '@mui/icons-material/Edit';

import './estilos.css';
import BotonEliminaProp from '../BotonEliminaProp';

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
                            <th>Edita</th>
                            <th>Elimina</th>
                        </tr>
                    </thead>
                    <tbody>
                        {propiedades?.map(propiedad => (
                            <tr key={propiedad._id}>
                                <td><img src={propiedad.imagenes[0]} alt={propiedad.direccion} className='foto-tabla-prop'/></td>
                                <td>{propiedad.ubicacion.direccionReal}</td>
                                <td>{propiedad.operacion[0].tipoOperacion}</td>
                                <td>{propiedad.operacion[0].precio}</td>
                                <td>{propiedad.dormitorios}</td>
                                <td>{propiedad.baños}</td>
                                <td>
                                    <button>
                                        <EditIcon />
                                    </button>
                                </td>
                                <td>
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