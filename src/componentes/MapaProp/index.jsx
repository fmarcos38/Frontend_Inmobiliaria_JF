import React from 'react';
import './estilos.css'; // Archivo CSS para los estilos del mapa

const MapProp = ({address}) => {

    //apikey google map
    const apiKey = process.env.REACT_APP_API_GOOGLE_MAP;

    // Función para generar la URL de Google Maps con la dirección proporcionada
    const generateMapUrl = (lat, lng) => {
        const baseUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}`;
        return `${baseUrl}&q=${encodeURIComponent(address)}`;
    };

    return (
        <div className="map-container">
            <iframe
                title="Map"
                className="map"
                src={generateMapUrl(address)}
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default MapProp;