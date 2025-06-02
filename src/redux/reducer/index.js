import { 
    LOGIN, RESET_LOGIN, GET_PROPS, IS_OPEN_MODAL_PICTURE, LOADING,  RESET_PROPERTY,
    GET_PROPIEDAD,GET_USUARIOS, GET_USUARIO,   
} from "../actions/actionType";

const initialState = {
    user: null,
    usuarios: [],
    propiedades: [],
    totPropiedades: 0,
    propiedad: {},
    loading: true,
}

export default function rootReducer (state = initialState, action) {
    switch(action.type){
        case LOGIN: 
        return{
            ...state,
            user: action.payload,
        }
        case RESET_LOGIN: 
        return{
            ...state,
            user: action.payload
        }
        case GET_USUARIOS:
            return {
                ...state,
                usuarios: action.payload
        }
        case GET_USUARIO:
        return{
            ...state,
            user: action.payload
        }
        case LOADING:
            return{
                ...state,
                loading: false
        };
        case GET_PROPS:
            return {
                ...state,
                loading: false,
                propiedades: action.payload.propiedades,
                totPropiedades: action.payload.totPropsFiltradas,
            };
        case GET_PROPIEDAD:
            return{
                ...state,
                propiedad: action.payload,
            };
        case RESET_PROPERTY:
            return{
                ...state,
                propiedad: {}
            };
        case IS_OPEN_MODAL_PICTURE:
            return{
                ...state,
                isOpenModalPicture: !state.isOpenModalPicture,
            };
        default:
            return state;
    }
}