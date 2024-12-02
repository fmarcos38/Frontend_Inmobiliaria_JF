// WhatsAppButton.js
import React from 'react';
import './estilos.css';

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/2281359060"
            className="whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="whatsapp-icon"
            />
        </a>
    );
};

export default WhatsAppButton;
