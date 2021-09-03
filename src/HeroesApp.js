// import React, { useReducer } from 'react';
import { Provider } from 'react-redux';
// import { AuthContext } from './auth/AuthContext';
// import { authReducer } from './auth/authReducer';
import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';

// const init = () => {
//     return JSON.parse(localStorage.getItem('user')) || { logged: false };
// }
//El init le pasa la info a estado inicial que se inicializa vacio


export const HeroesApp = () => {

    return (
        <Provider store={store} >
            <AppRouter />
        </Provider>
    )
}