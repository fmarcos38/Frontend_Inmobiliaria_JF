import React from 'react'
import { useDispatch } from 'react-redux';
import { eliminaProp, getProps } from '../../redux/actions';
import Swal from 'sweetalert2';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import './estilos.css';


function BotonEliminaProp({_id}) {
    
    const dispatch = useDispatch();
    
    const handleOnClick = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, elimina!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(eliminaProp(_id));
                Swal.fire(
                    'Eliminado!',
                    'La propiedad ha sido eliminada.',
                    'success'
                );
                //actualizo la lista de props
                dispatch(getProps());
                window.location.reload();
            }
        });
    };

    return (
        <button className='boton-elimina-prop' onClick={handleOnClick}>
            <DeleteForeverIcon />
        </button>
    )
}

export default BotonEliminaProp