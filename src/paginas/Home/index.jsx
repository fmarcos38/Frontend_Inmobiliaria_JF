import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProps } from '../../redux/actions';
import Loading from '../../componentes/Loading';
import LandingA from '../../componentes/LandingA';
import LandingC from '../../componentes/LandingC';
import LandingB from '../../componentes/LandingB';
import BarraLateral from '../../componentes/Barra-Lateral';
import ListaPropiedades from '../../componentes/ListaPropiedades';
import Paginacion from '../../componentes/Paginacion';
import CotizacionDolar from '../../componentes/CotizacionDolar';
import './estilos.css';

function Home() {

  const loading = useSelector(state => state.loading);
  const [operacion, setOperacion] = useState('');
  const [tipoPropiedad, setTipoPropiedad] = useState('todas');
  const [currentPage, setCurrentPage] = useState(1);
  const allProps = useSelector(state => state.propiedades);
  const totalPropiedades = useSelector(state => state.totPropiedades);
  const dispatch = useDispatch();

  /* para la paginación */
  const propiedadesPorPagina = 12;
  const limit = propiedadesPorPagina;
  const offset = (currentPage - 1) * limit;


  //efecto para iniciar la Pag desd la parte SUPERIOR
  useEffect(() => {
    // Desplaza la página hacia la parte superior cuando el componente se monta
    window.scrollTo(0, 0);
  }, []); // El array vacío asegura que se ejecute solo al montar el componente

  // Efecto para manejar la paginación y los filtros
  useEffect(() => {
    dispatch(getProps(limit, offset, operacion, tipoPropiedad));
  }, [dispatch, currentPage, limit, offset, operacion, tipoPropiedad]);

  
  return (
    <div>
      {
        loading ? (
          <Loading />
        ) : (
          <div className='home'>
            <LandingA />
            <LandingB />
            <LandingC />
            <div className='cont-barraLateral-Y-listaProps'>
              <div className='cont-barraLateral' >
                <BarraLateral
                  muestraVentaAlq={'true'}
                  limit={limit}  // Aquí pasamos el valor de limit al componente BarraLateral
                  offset={offset} // También pasamos el offset
                  setCurrentPage={setCurrentPage}
                  setOperacion={setOperacion}
                  setTipoPropiedad={setTipoPropiedad}  // Nuevo prop para manejar tipoPropiedad
                />
              </div>
              <div className='cont-listaProps-Y-paginacion'>
                <h1 className='titulo-lista-props'>Conocé nuestras Propiedades</h1> 
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
            <CotizacionDolar />
          </div>
        )
      }
    </div>
  )
}

export default Home