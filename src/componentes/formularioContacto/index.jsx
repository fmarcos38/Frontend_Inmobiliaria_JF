import React, { useState, useEffect } from 'react';
import Logo from '../../imagenes/ScreenShot146.jpg';
import './estilos.css';

function FormularioContacto({tituloPublicacion, codigoReferencia}) {

    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const numeroTelefonoAsignado = "2281359060";
    // Iniciamos el mensaje vacío
    const [mensaje, setMensaje] = useState('');

    const handleLlamar = () => {
        window.location.href = `tel:${numeroTelefonoAsignado}`;
    };
    const handleWhatsApp = () => {
        const mensajeWhatsApp = `Hola, me llamo ${nombre} y estoy interesado en la propiedad ${codigoReferencia}. ${tituloPublicacion}`;
        window.open(`https://wa.me/${numeroTelefonoAsignado}?text=${encodeURIComponent(mensajeWhatsApp)}`, '_blank');
    };
    const handleSubmit = (e) => {
        e.preventDefault();

    };

    // Ajustar la altura del textarea dinámicamente
    const autoResizeTextarea = (e) => {
        e.target.style.height = 'auto';  // Reinicia la altura
        e.target.style.height = `${e.target.scrollHeight}px`;  // Ajusta la altura al contenido
    };
    
    //funcion envio de email
    
    
    // Usamos useEffect para actualizar el mensaje cuando cambian tituloPublicacion y codigoReferencia
    useEffect(() => {
        if(!tituloPublicacion){
            setMensaje(`Hola, me contactan por favor...gracias.`);
        }else{
            setMensaje(`Hola, quisiera saber más acerca de: Cod Ref: ${codigoReferencia}. ${tituloPublicacion}`);
        }
    }, [tituloPublicacion, codigoReferencia]);
    
    // Reajustamos la altura cada vez que cambia el mensaje
    useEffect(() => {
        const textarea = document.querySelector('textarea');
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    }, [mensaje]); 


    return (           
        <form onSubmit={() => { handleSubmit() }} className='formulario-contacto'>
            <div className='cont-logo-titulo-form'>
                <div className='cont-logo-formaulario'>
                    <img src={Logo} alt='' className='logo-formulario' />
                </div>
                <div className='cont-titulo-formulario'>
                    <p className='titulo-formulario'>JUAN FORASTIERI</p>
                    <p className='titulo-formulario'>NEGOCIOS INMOBILIARIOS</p>
                </div>
            </div>
            <div className="form__group field">
                <input required className="form__field" type="text" name='nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <label className="form__label" >Nombre y Apellido</label>
            </div>

            <div className="form__group field">
                <input required className="form__field" type="text" name='telefono' value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                <label className="form__label" >Telefono</label>
            </div>

            <div className="form__group field">
                <input required className="form__field" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label className="form__label" >Email</label>
            </div>

            <div className="form__group field">
                <textarea
                    required
                    className="textarea-form-contacto form__field"
                    value={mensaje}
                    name="msj"
                    onChange={(e) => setMensaje(e.target.value)}
                    onInput={autoResizeTextarea}
                    style={{ overflow: 'hidden', fontSize: '16px' }}  // Ajusta el tamaño de fuente
                />
                <label className="form__label" >Mensaje</label>
            </div>
            {/* botones */}
            <div className='btn-enviar-contacto'>
                <button
                    variant="outlined"
                    type="submit"
                    className='btn-form'
                >
                    Enviar
                </button>
                <button
                    type='button'
                    className='btn-form'
                    onClick={handleLlamar}
                >
                    Llamar
                </button>
                <button type='button' className='btn-form-whatsApp' onClick={handleWhatsApp}>
                    WhatsApp
                </button>
            </div>
        </form>
    )
}

export default FormularioContacto