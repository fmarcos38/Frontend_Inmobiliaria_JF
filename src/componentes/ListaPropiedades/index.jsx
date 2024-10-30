import React from 'react';
import Card from '../Card';
import NoHayProps from '../NoHayProps';
import './styles.css';

function ListaPropiedades({allProps}) {

    return (
        <div className='contGralListaP'>
            <div className='contListaP'>
                {
                    allProps[0] ?
                    allProps.map(p => {
                        return (
                            <div className='cont-card' key={p.id}>
                                <Card className='card' key={p.id}
                                    id={p.id}
                                    codigoReferencia={p.codigoReferencia}
                                    direccionF={p.direccionF}
                                    descripcion={p.descripcion}
                                    disposicion={p.disposicion}
                                    expensas={p.expensas}
                                    geoLat={p.geoLat}
                                    geoLong={p.geoLong}
                                    cantPisos={p.cantPisos}
                                    rentaTemporaria={p.rentaTemporaria}
                                    destacadaEnWeb={p.destacadaEnWeb}
                                    baños={p.baños}
                                    ubicacion={p.ubicacion}
                                    operacion={p.operacion}
                                    imagenes={p.imagenes}
                                    productor={p.productor}
                                    tituloPublicacion={p.tituloPublicacion}
                                    supTechada={p.supTechada}
                                    ambientes={p.ambientes}
                                    supSemiCub={p.supSemiCub}
                                    dormitorios={p.dormitorios}
                                    unidadMedida={p.unidadMedida}
                                    bañoSuit={p.bañoSuit}
                                    cantCocheras={p.cantCocheras}
                                    supTotal={p.supTotal}
                                    tipo={p.tipo}
                                    supDescubierta={p.supDescubierta}
                                    servicios={p.servicios}                                    
                                />
                            </div>
                        )
                    }) : (
                        <div className='no-props'>
                            <NoHayProps/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ListaPropiedades