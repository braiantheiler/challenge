import axios from 'axios';
//Cambiar nombre de archivo por User
//Peticiones HTTP
export const User = {
    async login(email, password) {
        try {
            const { data } = await axios.post('http://challenge-react.alkemy.org/', { email, password })
            return data
        } catch (error) {
            return null
        }
    }
}

