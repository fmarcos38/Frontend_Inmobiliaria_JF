import React, { useState, useEffect } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './estilos.css';

const Favorito = ({ id,direccionF, cantCocheras, operacion, imagenes, tituloPublicacion, ambientes, dormitorios, unidadMedida, tipo }) => {

    const [isFavorite, setIsFavorite] = useState(false); 

    // Función para quitar o agregar el id de la prop a favorito
    const toggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

        if (isFavorite) { //quito
            // eslint-disable-next-line no-self-compare
            const updatedFavorites = favorites.filter(p => p.id !== id);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        } else { //agrego
            //creo objeto propiedad
            const propiedad = {
                id,
                direccionF,
                cantCocheras,
                operacion,
                imagenes,
                tituloPublicacion,
                ambientes,
                dormitorios,
                unidadMedida,
                tipo,
            }
            const updatedFavorites = [...favorites, propiedad];
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        }
        //actualizo estado a lo opuesto
        setIsFavorite(!isFavorite);
    };

    // Cargar favoritos desde localStorage al cargar el componente
    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if(favorites.length){
            const existe = favorites.find(p => p.id === id);
            if(existe){
                setIsFavorite(true);//include retorna true o false
            }
        }
    }, [id]);


    return (
        <button className="favorite-button"  onClick={toggleFavorite}>
            <FavoriteIcon className={`icono-fav ${isFavorite ? 'favorited' : ''}`}/>
        </button>
    );
};

export default Favorito;