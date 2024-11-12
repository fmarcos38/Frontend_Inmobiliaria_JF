import axios from "axios";
import { 
    LOGIN, RESET_LOGIN, GET_PROPERTY,  GET_PROPS, IS_OPEN_MODAL_PICTURE, LOADING, MUESTRA_DESTACADAS, RESET_PROPERTY, 
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
export const getProperty = (id) => {
    return async function(dispatch) {
        try {
            const resp = await axios.get(`${actual}/propiedades/${id}`);
            dispatch({type: GET_PROPERTY, payload: resp.data});
        } catch (error) {
            console.log(error);
        }
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