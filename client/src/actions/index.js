import * as types from './types';
import axios from 'axios';
import { CloudWatchLogs } from 'aws-sdk';


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

export const loadData = () => async dispatch => {
    axios.get(`/api/auth/userdata`, {
        headers: { authorization: localStorage.getItem('token') }
    })
        .then(function (res) {
            console.log(res)
            dispatch({ type: types.DATA, payload: res.data });
        })
        .catch(function (e) {
            console.log(e)
            dispatch({ type: types.DATA_ERROR, payload: 'User data could not load' });

        });
}

export const initUpload = (user_id) => async dispatch => {
    // const user_id = '5dcc7dc7877529002a7e7acf'
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
                                console.log(user_id,response.url)
                                axios.post('/api/face/search', {
                                    user_id: user_id,
                                    image_url: response.url
                                })
                                    .then(function (res) {
                                        console.log(res)
                                        dispatch({ type: types.UPLOAD_PICTURE, payload: { url: response.url, matches: res } })

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

export const turnoffErrorMessage = () => dispatch => {
    setTimeout(() => {
        dispatch({ type: types.TURNOFF_ERROR })
    }, 2000);
}


