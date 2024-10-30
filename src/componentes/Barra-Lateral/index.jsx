import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getProps, } from '../../redux/actions';
import FiltraPrecio from '../FIltroRangoPrecio';
import './estilos.css'; 

const BarraLateral = ({ muestraVentaAlq, limit, offset, setCurrentPage, setOperacion, setTipoPropiedad, soloAlq }) => {
    const [operacion, setOperacio] = useState('');
    //estado para filtro por precio - tipo prop
    const [tipoP, setTipoP] = useState('todas');
    const dispatch = useDispatch();

    const handleFilterChange = (event) => {
        const { value } = event.target;
        const nuevaOperacion = value === operacion ? '' : value;
        setOperacio(nuevaOperacion);
        setOperacion(nuevaOperacion); // Actualizamos el estado "operacion" en el componente padre (Home)
    };

    const handleClick = (e) => {
        setCurrentPage(1);  // Reiniciar a la página 1
        const tipoPropiedad = e.target.id;
        setTipoPropiedad(tipoPropiedad);  // Pasamos el tipo de propiedad al estado de Home
        //actualizo tipo prop PARA filtro por precio
        setTipoP(tipoPropiedad);
        
        // Asegurarnos de que limit nunca sea undefined
        if (limit) {
            dispatch(getProps(limit, 0, operacion, tipoPropiedad));  // Pasamos todos los parámetros necesarios
        }
    };

    useEffect(() => {
        if (operacion !== '' && limit) {
            dispatch(getProps(limit, offset, operacion));
        }
    }, [dispatch, limit, offset, operacion]);

    return (
        <div className='cont-barra'>
            <div className={muestraVentaAlq === 'true' ? 'cont-titulo-filtro' : 'cont-titulo-filtro-Sin-muestrVentaAlq'}>
                <p className='titulo-filtros'>Filtros Propiedades</p>
            </div>

            {
                muestraVentaAlq === 'true' && 
                (
                    <div className='opc-venta-alq'>
                        <div className='cont-venta-alq'>
                            <label className='label-filtro-tipo-operacion'>VENTA</label>
                            <input
                                id='Venta'
                                type="checkbox"
                                value="Venta"
                                checked={operacion === 'Venta'}
                                onChange={handleFilterChange}
                                className='input-check-venta'
                            />
                            <label className='label-filtro-tipo-operacion'>ALQUILER</label>
                            <input
                                id='Alquiler'
                                type="checkbox"
                                value="Alquiler"
                                checked={operacion === 'Alquiler'}
                                onChange={handleFilterChange}
                                className='input-check-alq'
                            />
                        </div>

                        <div className='cont-venta-alq'>
                            <label className='label-filtro-tipo-ope-Alq-Temp'>ALQUILER TEMPORAL</label>
                            <input
                                id='Alquiler Temporal'
                                type="checkbox"
                                value="Alquiler Temporal"
                                checked={operacion === "Alquiler Temporal"}
                                onChange={handleFilterChange}
                                className='input-check-alq'
                            />
                        </div>
                    </div>
                )
            }
            
            {/* alq tem - Para la vista de alquileres */}
            {
                soloAlq === 'true' &&
                <div className='cont-venta-alq'>
                    <label className='label-filtro-tipo-ope-Alq-Temp'>ALQUILER TEMPORAL</label>
                    <input
                        id='Alquiler Temporal'
                        type="checkbox"
                        value="Alquiler Temporal"
                        checked={operacion === "Alquiler Temporal"}
                        onChange={handleFilterChange}
                        className='input-check-alq'
                    />
                </div>
            }
            <div className='cont-btn-filtros'>
                <button className='boton-filtros' id='Departamento' onClick={handleClick}>Deptos</button>
                <button className='boton-filtros' id='Casa' onClick={handleClick}>Casas</button>
                <button className='boton-filtros' id='PH' onClick={handleClick}>PH</button>
                <button className='boton-filtros' id='Local' onClick={handleClick}>Locales</button>
                <button className='boton-filtros' id='Terreno' onClick={handleClick}>Terrenos</button>
                <button className='boton-filtros' id='Oficina' onClick={handleClick}>Oficinas</button>
                <button className='boton-filtros' id='Cochera' onClick={handleClick}>Cocheras</button>
                <button className='boton-filtros' id='todas' onClick={handleClick}>Todas</button>
            </div>

            <div>
                <FiltraPrecio limit={limit} operacion={operacion} tipoPropiedad={tipoP}/>
            </div>
        </div>
    );
};

export default BarraLateral;
