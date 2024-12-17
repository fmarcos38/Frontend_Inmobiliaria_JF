import React, { useEffect, useState } from 'react';
import BarraLateral from '../../componentes/Barra-Lateral';
import ListaFavoritos from '../../componentes/ListaFavoritos';
import WhatsAppButton from '../../componentes/BotonWhastApp';
import './estilos.css';

function FavoritosPage() {
    const [fav, setFav] = useState([]); // Lista original de favoritos
    const [filteredFav, setFilteredFav] = useState([]); // Lista filtrada

    // Estados para los filtros
    const [operacion, setOperacion] = useState('');
    const [tipoPropiedad, setTipoPropiedad] = useState('');
    const [precioMin, setPrecioMin] = useState(1000);
    const [precioMax, setPrecioMax] = useState(10000000);
    const [setCurrentPage] = useState(1); // Agregar manejo de página

    // 1. Cargar favoritos del localStorage
    useEffect(() => {
        const listaFav = JSON.parse(localStorage.getItem('favorites')) || [];
        setFav(listaFav);
        setFilteredFav(listaFav); // Inicialmente muestra todo
    }, []);

    // 2. Filtrar favoritos cuando cambian los filtros
    useEffect(() => {
        let propsFiltradas = [...fav];

        if (operacion) {
            propsFiltradas = propsFiltradas.filter(prop => prop.operacion === operacion)
        }

        if (tipoPropiedad) {
            propsFiltradas = propsFiltradas.filter(prop => prop.tipoPropiedad === tipoPropiedad);
        }

        //filtro por precio min
        propsFiltradas = propsFiltradas.filter(prop => prop.precio >= precioMin );
        //filtro por precio max
        propsFiltradas = propsFiltradas.filter(prop => prop.precio <= precioMax );

        setFilteredFav(propsFiltradas);
    }, [fav, operacion, tipoPropiedad, precioMin, precioMax]);

    // Render
    return (
        <div className='cont-prop-Venta'>
            <h1 className='titulo-propsFav'>Tus propiedades favoritas</h1>
            <div className='cont-filtros-listaProps-fav'>
                <div className='cont-barraL'>
                    <BarraLateral
                        muestraVentaAlq={'true'}
                        soloAlq={'true'}
                        setOperacion={setOperacion}
                        setCurrentPage={setCurrentPage}
                        setTipoPropiedad={setTipoPropiedad}
                        precioMin={precioMin}
                        setPrecioMin={setPrecioMin}
                        precioMax={precioMax}
                        setPrecioMax={setPrecioMax}
                    />
                </div>

                {/* lista props y pag */}
                <div className='cont-listaProps-fav'>
                    <ListaFavoritos allProps={filteredFav} />
                </div>
            </div>
            <WhatsAppButton />
        </div>
    );
}

export default FavoritosPage;

/*


                
                <div className="cont-listaProps-Y-paginacion">
                    <h1 className='titulo-lista-props-fav'>Tus Propiedades Favoritas</h1>
                     
                </div>
            </div>

*/
