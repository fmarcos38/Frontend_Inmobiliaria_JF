import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProps } from '../../redux/actions';
import Loading from '../../componentes/Loading';
import BarraLateral from '../../componentes/Barra-Lateral';
import ListaPropiedades from '../../componentes/ListaPropiedades';
import WhatsAppButton from '../../componentes/BotonWhastApp';
import Paginacion from '../../componentes/Paginacion';


function PropsAlquiler() {

    const loading = useSelector(state => state.loading);
    const [operacion, setOperacion] = useState('Alquiler');
    const [tipoPropiedad, setTipoPropiedad] = useState('');
    const [precioMin, setPrecioMin] = useState(10000);
    const [precioMax, setPrecioMax] = useState(1000000);
    const [currentPage, setCurrentPage] = useState(1);
    const allProps = useSelector(state => state.propiedades);
    const totalPropiedades = useSelector(state => state.totPropiedades);
    const dispatch = useDispatch();
    const propiedadesPorPagina = 12;
    const limit = propiedadesPorPagina;
    const offset = (currentPage - 1) * limit;

    //efecto para iniciar la Pag desd la parte SUPERIOR
    useEffect(() => {
        // Desplaza la página hacia la parte superior cuando el componente se monta
        window.scrollTo(0, 0);
    }, []); // El array vacío asegura que se ejecute solo al montar el componente
    
    useEffect(()=>{
        dispatch(getProps(limit, offset, operacion, tipoPropiedad, precioMin, precioMax));
    },[dispatch, limit, offset, operacion, precioMax, precioMin, tipoPropiedad]);


    return (
        <div className='cont-prop-Venta'>
            <h1 className='titulo-peopsVenta'>Propiedades en Alquiler</h1>
            {
                loading ? (
                    <Loading />
                ) : (
                    <div className='cont-filtros-listaProps-venta'>
                        <div className='cont-barraL'>
                            <BarraLateral
                                muestraVentaAlq={'false'}
                                soloAlq={'false'}
                                setCurrentPage={setCurrentPage}
                                setOperacion={setOperacion}
                                setTipoPropiedad={setTipoPropiedad}
                                precioMin={precioMin}
                                setPrecioMin={setPrecioMin}
                                precioMax={precioMax}
                                setPrecioMax={setPrecioMax}
                            />
                        </div>

                        <div className='cont-listaProps'>
                            <ListaPropiedades allProps={allProps} id='listaProps' />
                            {
                                allProps[0] &&
                                <Paginacion
                                    allProps={allProps}
                                    currentPage={currentPage}
                                    onPageChange={setCurrentPage}
                                    totalPropiedades={totalPropiedades}
                                    propiedadesPorPagina={propiedadesPorPagina}
                                />
                            }
                        </div>
                    </div>
                )
            }
            <WhatsAppButton />
        </div>
    )
}

export default PropsAlquiler;