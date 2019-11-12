import * as types from './types';
import axios from 'axios';


export const signup = (formprops, callback) => async dispatch => {
    try {        
        const response = await axios.post('/api/auth/signup', formprops);
        dispatch({ type: types.AUTH_USER, payload: response.data.token });
        localStorage.setItem('token', response.data.token);
        callback();
    } catch(e) {
        dispatch({ type: types.AUTH_ERROR, payload: 'Email is in use' });
    }
}

export const signIn = (formProps, callback) => async dispatch => {
    try {
        const response = await axios.post('/api/auth/signin', formProps);
        dispatch({ type: types.AUTH_USER, payload: response.data.token });
        localStorage.setItem('token', response.data.token);
        callback();
    } catch(e) {
        dispatch({ type: types.AUTH_ERROR, payload: 'Invalid login credentials' });
    }
}

export const signout = () => {
    localStorage.removeItem('token');
    return {
        type: types.AUTH_USER,
        payload: ''
    };
}



