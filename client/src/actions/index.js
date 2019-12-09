import * as types from './types';
import axios from 'axios';


export const signUp = (formprops, callback) => async dispatch => {
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

export const loadData = () => async dispatch => {
    axios.get(`/api/auth/userdata`, {
        headers: { authorization: localStorage.getItem('token') }
    })
        .then(function (res) {
            dispatch({ type: types.DATA, payload: res.data });
        })
        .catch(function (e) {
            console.log(e)
            dispatch({ type: types.DATA_ERROR, payload: 'User data could not load' });
        });
}

export const initUpload = (user_id) => async dispatch => {
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
                                axios.post('/api/face/search', {
                                    user_id: user_id,
                                    image_url: response.url
                                })
                                    .then(async function (res) {
                                        console.log(JSON.parse(res.config.data))
                                        await dispatch({ type: types.UPLOAD_PICTURE, payload: { matches: res.data, image_url: JSON.parse(res.config.data) } })

                                    })
                                    .catch(function (e) {
                                        dispatch({ type: types.UPLOAD_PICTURE_ERROR, payload: 'Face Search Error' })
                                    });
                            }
                            else {
                                dispatch({ type: types.UPLOAD_PICTURE_ERROR, payload: 'Could not upload file.' })
                            }
                        }
                    };
                    xhr.send(file);
                }
                else {
                    dispatch({ type: types.UPLOAD_PICTURE_ERROR, payload: 'Could not upload file.' })
                }
            }
        };
        xhr.send();
    } catch (err) {
        dispatch({ type: types.UPLOAD_PICTURE_ERROR, payload: "You didn't choose the file" })
    }
}



