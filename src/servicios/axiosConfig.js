import axios from "axios";
//Inicializacion de axios
const http = axios.create({
    baseURL: 'https://superheroapi.com/api/10226215810372596/',
    timeout: 60000,
    headers: { 'Content-Type': 'application/json' }
})


// const interceptors = (config) => {
//     const token = localStorage.getItem('token');
//     console.log(token);
//     config.headers.authorization = token;
//     return config;
// }


// http.interceptors.request.use(interceptors, error => Promise.reject(error));

export {
    http
}