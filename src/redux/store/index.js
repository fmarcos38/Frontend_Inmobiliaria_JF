import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../Reducer";
import { thunk } from "redux-thunk";

const composeEnhacer = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
    rootReducer,
    composeEnhacer(applyMiddleware(thunk))  
);

export default store;