import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:8080/prjApirest/v1/"
});


api.interceptors.request.use(async config => {
    const token = "";
    config.headers.Authorization = token;

    return config;
});

export default api;