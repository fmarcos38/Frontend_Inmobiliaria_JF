const initialState = {
    propiedades: [],
    totPropiedades: 0,
    propiedad: {},
    loading: true,
}

export default function rootReducer (state = initialState, action) {
    switch(action.payload){
        default:
            return state;
    }
}