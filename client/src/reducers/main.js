import { UPLOAD_PICTURE, UPLOAD_PICTURE_ERROR, TURNOFF_ERROR } from './../actions/types';
import image from './../containers/images/default.jpg'

const INITIAL_STATE = {
    image_url: image,
    errorMessage: ''
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case UPLOAD_PICTURE:
            return {...state, image_url: action.payload, errorMessage: ''};
        case UPLOAD_PICTURE_ERROR:
            return {...state, errorMessage: action.payload};
        case TURNOFF_ERROR: 
            return {...state, errorMessage: ''}
        default:
            return state;
    }
};