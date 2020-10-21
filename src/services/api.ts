import axios from 'axios';

const api = axios.create({
    baseURL: 'https://proffy04.herokuapp.com'
})


export default api;