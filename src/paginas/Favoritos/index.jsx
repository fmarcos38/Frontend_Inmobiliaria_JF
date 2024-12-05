import React, { useEffect, useState } from 'react';
import BarraLateral from '../../componentes/Barra-Lateral';
import ListaFavoritos from '../../componentes/ListaFavoritos';
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
            propsFiltradas = propsFiltradas.filter(prop =>
                prop.operacion.some(op => op.tipoOperacion === operacion)
            );
        }

        if (tipoPropiedad) {
            propsFiltradas = propsFiltradas.filter(prop => prop.tipoPropiedad === tipoPropiedad);
        }

        //filtro por precio min
        propsFiltradas = propsFiltradas.filter(prop => 
            prop.operacion.some(op => op.precio >= precioMin)
        )
        //filtro por precio max
        propsFiltradas = propsFiltradas.filter(prop => 
            prop.operacion.some(op => op.precio <= precioMax)
        )

        setFilteredFav(propsFiltradas);
    }, [fav, operacion, tipoPropiedad, precioMin, precioMax]);

    // Render
    return (
        <div className="home">
            <div className="cont-barraLateral-Y-listaProps">
                {/* Barra Lateral con los filtros */}
                <div className="cont-barraLateral">
                    <BarraLateral
                        muestraVentaAlq={'true'}
                        soloAlq={'true'}
                        setOperacion={setOperacion}
                        setTipoPropiedad={setTipoPropiedad}
                        precioMin={precioMin}
                        setPrecioMin={setPrecioMin}
                        precioMax={precioMax}
                        setPrecioMax={setPrecioMax}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
                {/* Lista de propiedades favoritas (filtrada) */}
                <div className="cont-listaProps-Y-paginacion">
                    <ListaFavoritos allProps={filteredFav} /> {/* Muestra las propiedades filtradas */}
                </div>
            </div>
        </div>
    );
}

export default FavoritosPage;
