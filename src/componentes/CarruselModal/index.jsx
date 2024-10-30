import React, { useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './styles.css';

function CarruselModal({imagenes}) {


    const [indexImgActual, setIndexImgActual] = useState(0);

    const handleClickPrev = () => {
        if(indexImgActual === 0){ return }
        else{
            setIndexImgActual(indexImgActual - 1);
        }
    };
    const handleClickNext = () => {
        if(indexImgActual === imagenes.length -1){ return }
        else{
            setIndexImgActual(indexImgActual + 1);
        }
    };
    
    
    return (
        <div className='contGralCarruselM'>
            <div className='cont-img-btns'>
                {/* btn atrás */}
                <button className='btn-carrusel-prev' onClick={() => handleClickPrev()}>
                    <ArrowBackIosNewIcon />
                </button>

                {/* imagen a ostrar */}
                <img src={imagenes[indexImgActual].original} alt='' className='img-carruselM' />

                {/* btn prox */}
                <button className='btn-carrusel-next' onClick={() => handleClickNext()}>
                    <ArrowForwardIosIcon />
                </button>
            </div>
        </div>
    )
}

export default CarruselModal