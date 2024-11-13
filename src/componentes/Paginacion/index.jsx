import React from 'react';
import './estilos.css';

function Paginacion({ currentPage, onPageChange, totalPropiedades, propiedadesPorPagina }) {

    // Calcular el número total de páginas basado en el total de propiedades y propiedades por página
    const totalPaginas = Math.ceil(totalPropiedades / propiedadesPorPagina);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1); // Cambiamos a la página anterior
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPaginas) {
            onPageChange(currentPage + 1); // Cambiamos a la siguiente página
        }
    };

    return (
        <div className="paginacion-container">
            <button
                className="paginacion-button"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
            >
                Anterior
            </button>

            <span className="paginacion-info">
                Página {currentPage} de {totalPaginas}
            </span>

            <button
                className="paginacion-button"
                onClick={handleNextPage}
                disabled={currentPage === totalPaginas}
            >
                Siguiente
            </button>
        </div>
    );
}

export default Paginacion;
