import * as types from './types';
import axios from 'axios';


export const signup = (formprops, callback) => async dispatch => {
    try {
        const response = await axios.post('/api/auth/signup', formprops);
        dispatch({ type: types.AUTH_USER, payload: response.data.token });
        localStorage.setItem('token', response.data.token);
        callback();
    } catch (e) {
        dispatch({ type: types.AUTH_ERROR, payload: 'Email is in use' });
    }
}

export const signIn = (formProps, callback) => async dispatch => {
    try {
        const response = await axios.post('/api/auth/signin', formProps);
        dispatch({ type: types.AUTH_USER, payload: response.data.token });
        localStorage.setItem('token', response.data.token);
        callback();
    } catch (e) {
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

export const initUpload = () => async dispatch => {
    try {
        const files = document.getElementById('file-input').files;
        const file = files[0];
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `/api/aws/sign-s3?file-name=${file.name}&file-type=${file.type}`);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    xhr.open('PUT', response.signedRequest);
                    xhr.onreadystatechange = () => {
                        if (xhr.readyState === 4) {
                            if (xhr.status === 200) {
                                dispatch({type: types.UPLOAD_PICTURE, payload: response.url})
                            }
                            else {
                                dispatch({type: types.UPLOAD_PICTURE_ERROR, payload: 'Could not upload file.'})
                            }
                        }
                    };
                    xhr.send(file);
                }
                else {
                    dispatch({type: types.UPLOAD_PICTURE_ERROR, payload: 'Could not upload file.'})
                }
            }
        };
        xhr.send();
    } catch (err) {
        dispatch({type: types.UPLOAD_PICTURE_ERROR, payload: "You didn't choose the file"})
    }
    
}

export const turnoffErrorMessage = () => dispatch => {
    setTimeout(() => {
        dispatch({type: types.TURNOFF_ERROR})
    }, 2000);
}


