import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector  } from 'react-redux';
import { login, resetLogin } from '../../redux/actions';
import { userData } from "../../localStorage";
import { InmobiliariaContext } from '../../context';
import Swal from 'sweetalert2';
import Button from '@mui/material/Button';
import './estilos.css';


function Login() {

    const [, setUser] = useState();
    const [input, setInput] = useState({email: "", password: ""});
    const [errors, setErrors] = useState({});
    const userLog = useSelector(state => state.user);
    const errorUserLog = useSelector(state => state.error);    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const contexto = useContext(InmobiliariaContext);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInput({...input, [name]: value});

        //quito msj de error SI se llena un input
        if(value){
            const errorsInput = {...errors};
            delete errorsInput[name];
            setErrors(errorsInput);
        }
    };

    //funcion valida inputs
    const validaInputs = () => {
        const newErrors = {}

        if(!input.email) { newErrors.email = "El email es requerido"};
        if(!input.password) { newErrors.password = "El pass es requerido"}
        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => { 
        e.preventDefault();
        if (userLog === null) { 
            if(validaInputs()){
                dispatch(login(input));
            }
        }
    };
    
    useEffect(() => {
        setUser(userLog);
    }, [errorUserLog, userLog])

    useEffect(()=>{
        if(userLog?.message === 'ok'){
        //actualizo data del user log en el contexto
        const userLogActual = userData();
        contexto.setUserLog(userLogActual);
        contexto.login();
        navigate('/');
        window.location.reload();
        }
        if(userLog?.message === 'Email incorrecto'){
            Swal.fire({
                text: 'Email incorrecto',
                icon: 'error'
            });
            dispatch(resetLogin());
        }
        if(userLog?.message === 'Contraseña incorrecta'){
            Swal.fire({
                text: 'Contraseña incorrecta',
                icon: 'error'
            });
            dispatch(resetLogin());
        }
    },[contexto, dispatch, navigate, userLog]);


    return (
        <div className='cont-componente-login'>
            <form onSubmit={(e) => { handleSubmit(e) }} className='cont-form-login'>
                <h1 className='tittulo-login'>Ingrese sus datos</h1>
                <div class="form__group field">
                    <input required class="form__field" type="text" name='email' value={input.email} onChange={(e) => {handleChange(e)}}/>
                    <label class="form__label" for="name">Email</label>
                </div>
                <div class="form__group field">
                    <input required class="form__field" type="text" name='password' value={input.password} onChange={(e) => {handleChange(e)}}/>
                    <label class="form__label" for="name">Password</label>
                </div>
                <div className='cont-btn-login'>
                    <Button variant="outlined" type="submit" className='btn-login'>Login</Button>
                </div>
                /
            </form>
        </div>
    )
}

export default Login