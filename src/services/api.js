import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.engine-company.com:8443/',
    // baseURL: 'http://localhost:7070',
});

export default api;