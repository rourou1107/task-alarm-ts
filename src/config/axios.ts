import axios from 'axios';
import history from './history';
const appID = '1ggPi1f5133zd4Pmh8aErr6f';
const appSecret = '46j5ANEYHm9fnbzvd6uhhYxG';
const instance = axios.create({
    baseURL: ' https://gp-server.hunger-valley.com/',
    headers: {
        't-app-id': appID,
        't-app-secret': appSecret
    }
});
instance.interceptors.request.use((config) => {
    const xToken = localStorage.getItem('x-token')
    if(xToken){
        config.headers['Authorization'] = `Bearer ${xToken}` // 发送请求前，取到Token，放在请求头里
    }
    return config;
},  (error) => {
    console.error(error)
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use((response) => {
    if(response.headers['x-token']){ //
        localStorage.setItem('x-token',response.headers['x-token'])
    }
    return response;
},  (error) => {
    if(error.response.status === 401){
        history.push('/login');
    }
    // Do something with response error

    return Promise.reject(error);
});
export default instance;
