import React from 'react';
import NoHayProps from '../NoHayProps';
import Card from '../Card';
import './estilos.css';


function ListaFavoritos({allProps}) {

    return (
        <div className='cont-listaProps-fav'>
            <h1 className='titulo-lista-props-fav'>Tus Propiedades Favoritas</h1>

            <div className='cont-card-lista-props'>
                {
                    allProps[0] ?
                        allProps.map(p => {
                            return (
                                <div className='cont-card-Fav-listaProps' key={p.id}>
                                    <Card
                                        key={p.id}
                                        id={p.id}
                                        tituloPublicacion={p.tituloPublicacion}
                                        ubicacion={p.ubicacion}
                                        operacion={p.operacion}
                                        imagenes={p.imagenes}
                                        cantCocheras={p.cantCocheras}
                                        ambientes={p.ambientes}
                                        dormitorios={p.dormitorios}
                                        tipoPropiedad={p.tipoPropiedad}
                                        supTotal={p.supTotal}
                                        supDescubierta={p.supDescubierta}
                                        supCubierta={p.supCubierta}
                                        supSemiCub={p.supSemiCub}
                                        baños={p.baños}
                                    />
                                </div>
                            )
                        }) : (
                            <div className='no-props'>
                                <NoHayProps />
                            </div>
                        )
                }
            </div>
        </div>
    )
}

export default ListaFavoritos;