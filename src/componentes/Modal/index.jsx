import React from 'react'
import { useDispatch } from 'react-redux';
import { isOpenModalPicture } from '../../redux/actions';
import CarruselModal from '../CarruselModal';
import './styles.css';

function Modal({imagenes}) {

    const dispatch = useDispatch();

    const handleOnclickClose = () =>{
        dispatch(isOpenModalPicture());
    };

    return (
        <div className='contModal'>
            <div className='cont-btn-cierra-modal'>
                <button
                    className='btn-close-modal'
                    onClick={() => handleOnclickClose()}
                >
                    <b>X</b>
                </button>
            </div>

            {/* carrusel de imgs */}
            <CarruselModal imagenes={imagenes}/>
        </div>
    )
}

export default Modal