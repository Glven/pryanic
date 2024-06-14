import axios from "axios";

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = config => {
    const token = localStorage.getItem('token')
    if (token !== '') {
        config.headers['x-auth'] = token
    }
    return config
}

$authHost.interceptors.request.use(authInterceptor, error => {
    return Promise.reject(error)
})

export {
    $host,
    $authHost
}