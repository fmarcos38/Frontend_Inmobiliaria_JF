import axios from "axios";
import { 
    LOGIN, RESET_LOGIN, GET_PROPS, IS_OPEN_MODAL_PICTURE, LOADING, MUESTRA_DESTACADAS, 
    RESET_PROPERTY, GET_PROPIEDAD, 
} from "./actionType.js";
import { actual } from "../../urls";

//---LOGIN--------------------------------------------------------
export function login(data){ 
    return async function (dispatch) {
        const resp = await axios.post(`${actual}/auth/login`, data); 
        //asigno data del user al localStorage
        localStorage.setItem("userData", JSON.stringify(resp.data));
        dispatch({ type: LOGIN, payload: resp.data });        
    }
}
export function resetLogin(){
    return function(dispatch){
        dispatch({type: RESET_LOGIN, payload: null})
    }
}
//--usuario------------------------------------------------------
//crea usuario
export const creaUsuario = (data) => {
    return async function() {
        await axios.post(`${actual}/usuarios/crea`, data);
    }
};

//trae usuarios
export const getUsuarios = () => {
    return async function(dispatch) {
        const resp = await axios.get(`${actual}/usuarios`);
        dispatch({type: 'GET_USUARIOS', payload: resp.data});
    }
};

//trae usuario por ID
export const getUsuario = (_id) => {
    return async function(dispatch) { 
        const resp = await axios.get(`${actual}/usuarios/${_id}`);
        dispatch({type: 'GET_USUARIO', payload: resp.data});
    }
};

//edita usuario
export const editaUsuario = ({_id, data}) => {
    return async function() { 
        await axios.put(`${actual}/usuarios/edita/${_id}`, data);
    }
};

//elimina usuario
export const eliminaUsuario = (email) => {
    return async function() {
        await axios.delete(`${actual}/usuarios/elimina/`, email);
    }
};
//---PROPIEDADES----------------------------------------------------
//trae props
export const getProps = (limit, offset, operacion, tipo, precioMin, precioMax) => {
    return async function (dispatch) {
        dispatch({ type: LOADING }); // loading

        // Construimos los parámetros dinámicamente
        let queryParams = `?limit=${limit}&offset=${offset}`;

        if (operacion) queryParams += `&operacion=${operacion}`;
        if (tipo) queryParams += `&tipo=${tipo}`;
        if (precioMin) queryParams += `&precioMin=${precioMin}`;
        if (precioMax) queryParams += `&precioMax=${precioMax}`;

        try {
            const resp = await axios.get(`${actual}/propiedades${queryParams}`); 
            dispatch({ type: GET_PROPS, payload: resp.data });
        } catch (error) {
            console.error('Error fetching properties:', error);
            // Puedes manejar el error aquí si lo necesitas
        }
    };
};  

//trae propiedad por ID
export const getPropiedad = (_id) => {
    return async function(dispatch) {
        try {
            const resp = await axios.get(`${actual}/propiedades/${_id}`);
            dispatch({type: GET_PROPIEDAD, payload: resp.data});
        } catch (error) {
            console.log(error);
        }
    }
};

//elimina propiedad
export const eliminaProp = (_id) => {
    return async function() {
        await axios.delete(`${actual}/propiedades/eliminaProp/${_id}`);
    }
};

//edita propiedad
export const editaProp = (data) => {
    return async function() {
        await axios.put(`${actual}/propiedades/editaProp`, data);
    }
};

//reset detalle
export const resetProperty = () => {
    return function(dispatch) {
        dispatch({ type: RESET_PROPERTY });
    }
};

//muestra props destacadas
export const muestraDestacadas = (obj) => {
    return function(dispatch){
        dispatch({type:MUESTRA_DESTACADAS, payload:obj});
    }
};

//cierra Modal imagen prop
export const isOpenModalPicture = () => {
    return function(dispatch){
        dispatch({type: IS_OPEN_MODAL_PICTURE});
    }
};