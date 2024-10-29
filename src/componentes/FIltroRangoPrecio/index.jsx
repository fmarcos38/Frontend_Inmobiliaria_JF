import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getProps } from '../../redux/actions';
import './styles.css';

const FiltraPrecio = ({limit, operacion, tipoPropiedad}) => {
    const [precioMin, setPrecioMin] = useState(10000);
    const [precioMax, setPrecioMax] = useState(1000000);
    const dispatch = useDispatch();

    const handleMinPriceChange = (event) => {
        const value = Math.min(Number(event.target.value), precioMax - 10000);
        setPrecioMin(value);
    };

    const handleMaxPriceChange = (event) => {
        const value = Math.max(Number(event.target.value), precioMin + 10000);
        setPrecioMax(value);
    };

    /* para btn aplicar filtro precio */
    const handleClickFiltroPrecio = () => {
        // Asegurarnos de que limit nunca sea undefined
        if (limit) {
            dispatch(getProps(limit, 0, operacion, tipoPropiedad, precioMin, precioMax));  // Pasamos todos los parámetros necesarios
        }        
    };

    return (
        <div className="price-range-filter">
            <div className="price-range-slider">
                <input 
                    type="range" 
                    min="10000" 
                    max="1000000" 
                    step="10000" 
                    value={precioMin} 
                    onChange={(e) => {handleMinPriceChange(e)}} 
                    className="slider" 
                />
                <input 
                    type="range" 
                    min="10000" 
                    max="1000000" 
                    step="10000" 
                    value={precioMax} 
                    onChange={(e) => {handleMaxPriceChange(e)}} 
                    className="slider" 
                />
            </div>
            <div className="price-range-values">
                <span>{precioMin.toLocaleString()}</span> - <span>{precioMax.toLocaleString()}</span>
            </div>
            {/* btn aplicar filtro precio */}
            <button 
                variant="contained"
                onClick={() => {handleClickFiltroPrecio()}}
                className='btn-filtros'
            >
                Aplicar Filtro de Precios
            </button>
        </div>
    );
};

export default FiltraPrecio;
