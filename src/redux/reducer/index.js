import { 
    GET_PROPERTY, GET_PROPS, IS_OPEN_MODAL_PICTURE, LOADING,  RESET_PROPERTY,   
} from "../actions/actionType";

const initialState = {
    propiedades: [],
    totPropiedades: 0,
    propiedad: {},
    loading: true,
}

export default function rootReducer (state = initialState, action) {
    switch(action.type){
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
                totPropiedades: action.payload.total,
            };
        case GET_PROPERTY:
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