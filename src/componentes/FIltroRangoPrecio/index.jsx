import React from 'react';
import './styles.css';

const FiltraPrecio = ({precioMin, precioMax, setPrecioMin, setPrecioMax, setCurrentPage }) => {

    const handleMinPriceChange = (event) => {
        const value = Math.min(Number(event.target.value), precioMax - 10000);
        setPrecioMin(value);
        setCurrentPage(1);
    };

    const handleMaxPriceChange = (event) => {
        const value = Math.max(Number(event.target.value), precioMin + 10000);
        setPrecioMax(value);
        setCurrentPage(1);
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
        </div>
    );
};

export default FiltraPrecio;
