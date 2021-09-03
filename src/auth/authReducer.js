//Los reducer son funciones puras
import { types } from "../types/types";

// const state = {
//     name: 'Fernando',
//     logged: true
// }

const initialState = {
    logged: true
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }

        case types.logout:
            return {
                logged: false
            }

        default:
            return state;
    }

}

