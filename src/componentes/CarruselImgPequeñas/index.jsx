import React, { useRef, useEffect } from 'react';
import './styles.css';

function CarruselImgPequeñas({ imagenes, indexImgActual, handleClick }) {
    const imgRefs = useRef([]);

    useEffect(() => {
        if (imgRefs.current[indexImgActual]) {
            imgRefs.current[indexImgActual].scrollIntoView({
                behavior: 'auto', // 'auto' para el primer render
                inline: 'start'   // Alinea al inicio del contenedor
            });
        }
    }, [indexImgActual]);


    return (
        <div className="miniaturas-container">
            {imagenes?.map((img, index) => (
                <img
                key={index}
                src={img.pequeña}
                alt={`Miniatura ${index + 1}`}
                className={`miniatura ${index === indexImgActual ? 'active' : ''}`}
                onClick={() => handleClick(index)}
            />
            ))}
        </div>
    );
}

export default CarruselImgPequeñas;
