import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
    baseURL: "http://localhost:8080/prjApirest/v1/"
});


api.interceptors.request.use(async config => {
    const token = getToken();
    if(token)
    config.headers.Authorization = token;

    return config;
});

export default api;