import React from 'react';
import NoHayProps from '../NoHayProps';
import Card from '../Card';
import './estilos.css';


function ListaFavoritos({allProps}) {

    return (
        <div className='cont-listaProps-fav'>
            <h1 className='titulo-lista-props-fav'>Propiedades Favoritas</h1>
            
                    <div className='cont-card-lista-props'>                        
                        {
                            allProps[0] ?
                            allProps.map(p => {
                                return (
                                    <div className='cont-card-Fav-listaProps' key={p.id}>
                                        <Card 
                                            key={p.id}
                                            id={p.id}
                                            direccionF={p.direccionF}
                                            cantCocheras={p.cantCocheras}
                                            operacion={p.operacion}
                                            imagenes={p.imagenes}
                                            tituloPublicacion={p.tituloPublicacion}
                                            ambientes={p.ambientes}
                                            dormitorios={p.dormitorios}
                                            unidadMedida={p.unidadMedida}
                                            tipo={p.tipo}
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

export default ListaFavoritos;