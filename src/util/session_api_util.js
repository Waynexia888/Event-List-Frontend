import axios from 'axios';

export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

const authFrontend = axios.create(
    {baseURL: 'http://localhost:4000/api/user/'}
)

export const signup = (userData) => {
    return authFrontend.post('signup', userData);
};

export const login = (userData) => {
    return authFrontend.post('login', userData);
};