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
                            <div className='cont-card' key={p._id}>
                                <Card className='card' key={p._id}
                                    id={p._id}
                                    tituloPublicacion={p.tituloPublicacion}
                                    tipoPropiedad={p.tipoPropiedad}
                                    ubicacion={p.ubicacion}
                                    operacion={p.operacion}
                                    imagenes={p.imagenes}
                                    dormitorios={p.dormitorios}
                                    cantCocheras={p.cantCocheras}
                                    supTotal={p.supTotal}
                                    supDescubierta={p.supDescubierta}
                                    ambientes={p.ambientes}
                                    supCubierta={p.supCubierta}
                                    supSemiCub={p.supSemiCub}
                                    baños={p.baños}                                  
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