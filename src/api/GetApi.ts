import axios, { AxiosRequestConfig, AxiosResponse } from "axios";


const axiosClient = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon/",
    headers: {
        'content-type': 'application/json'
    },
})
axiosClient.interceptors.request.use(function (config: AxiosRequestConfig) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

axiosClient.interceptors.response.use(function (response: AxiosResponse) {

    return response.data;
}, function (error) {
    return Promise.reject(error);
});

export default axiosClient;