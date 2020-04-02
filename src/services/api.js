import axios from 'axios';

const api = axios.create({
    baseURL: 'https://engine-backend.herokuapp.com/'
});

export default api;