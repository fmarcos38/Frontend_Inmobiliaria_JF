import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { creaUsuario } from '../../redux/actions';
import Swal from 'sweetalert2';
import './estilos.css';


const FormularioUsuario = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();

    const validaInputs = () => {
        const newErrors = {};
        if (!email) {
            newErrors.email = 'El email es requerido';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'El email no es válido';
        }
        if (!password) {
            newErrors.password = 'La contraseña es requerida';
        } else if (password.length < 6) {
            newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length > 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validaInputs()) {
            dispatch(creaUsuario({ email, password }));
            Swal.fire({
                title: 'Usuario creado',
                icon: 'success',
                confirmButtonText: 'Ok'
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className='cont-form-crea-usuario'>
            <div className='cont-dato-crea-usuario'>
                <label className='label-crea-usuario'>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='input-crea-usuario'
                />
                {errors.email && <p className='p-crea-usuario'>{errors.email}</p>}
            </div>
            <div>
                <label className='label-crea-usuario'>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='input-crea-usuario'
                />
                {errors.password && <p className='p-crea-usuario'>{errors.password}</p>}
            </div>
            <button type="submit" className='btn-crea-usuario'>Crear usuario</button>
        </form>
    );
};

export default FormularioUsuario;