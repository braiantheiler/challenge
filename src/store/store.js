import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../auth/authReducer";


//Esto de aqui abajo es una simple comprobacion de que si existen las herramientas de desarrollo las va a configurar o si no lo deja pasar
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(
    authReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);